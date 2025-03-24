import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import { Telegraf } from 'telegraf';
import { sendMessage } from './gpt.mjs';

export var main = () => {
    var bot = new Telegraf(process.env.TELEGRAM_KEY);

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
