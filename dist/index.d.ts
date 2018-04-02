import { Message } from 'discord.js';
import { CommandoClient } from 'discord.js-commando';
export declare class Module {
    private static client;
    private static apiToken;
    protected static onMessage(message: Message): Promise<void>;
    init(client: CommandoClient, apiToken: string): Promise<void>;
    private registerListeners(client);
}
