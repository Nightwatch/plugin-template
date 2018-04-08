import { Message } from 'discord.js';
import { CommandoClient } from 'discord.js-commando';
import { Config } from '@natsuki/util';
export declare class Module {
    static client: CommandoClient;
    static config: Config;
    protected static onMessage(message: Message): Promise<void>;
    /**
     * Initializes module
     * @param client
     * @param config
     */
    init(client: CommandoClient, config: Config): Promise<void>;
    /**
     * Register events
     * @param client
     */
    private registerListeners(client);
}
