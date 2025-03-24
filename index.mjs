import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import { Telegraf } from 'telegraf';
import { sendMessage } from './gpt.mjs';

var main = () => {
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

import http from 'node:http';

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Expose-Headers': '*',
  'Content-Type': 'application/json'
};

const server = http.createServer((req, res) => {
  res.writeHead(200, DEFAULT_HEADERS);
  res.end(JSON.stringify({ test: 1 }));
});

server.listen(3000);

server.on(
  'listening',
  () => {
    console.log(`server is started on http://localhost:3000...`);
    main();
  }
);
server.on(
  'error',
  () => console.log('Сервер не запустился')
);

export default server;
