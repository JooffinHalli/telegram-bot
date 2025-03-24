var main = () => {
  require('dotenv').config({ path: './.env' });

  const { Telegraf } = require('telegraf');
  const { sendMessage } = require('./gpt');

  const bot = new Telegraf(process.env.TELEGRAM_KEY);

  bot.on('message', (ctx) => {
    sendMessage(ctx.message.text).then(
      (res) => ctx.reply(res),
      (reason) => ctx.reply(reason)
    );
  });

  bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

main();

module.exports = main;
