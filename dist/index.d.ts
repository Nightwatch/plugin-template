import { CommandoClient } from 'discord.js-commando';
import { Config } from '@natsuki/util';
export declare class Module {
    static client: CommandoClient;
    static config: Config;
    static id: string;
    static description: string;
    static commandGroups: never[];
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
    private registerListeners(client, config);
}
