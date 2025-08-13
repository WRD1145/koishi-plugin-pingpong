import { Context } from 'koishi'

export const name = 'example'

export function apply(ctx: Context) {
  ctx.command('ping')
  .option('name', '-n <name>')
  .action(({ options }) => {
    const name = options.name || '你'; 
    return `pong!${name}今天看起来很聪明`;
  });
   
}