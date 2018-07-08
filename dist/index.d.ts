import { CommandoClient } from 'discord.js-commando';
import { Config } from '@nightwatch/util';
export declare class Plugin {
    static client: CommandoClient;
    static config: Config;
    static id: string;
    static description: string;
    static commandGroups: never[];
    /**
     * Initializes plugin
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
