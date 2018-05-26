import { Message } from 'discord.js';
import { CommandoClient } from 'discord.js-commando';
import { Config } from '@natsuki/util';
import { onMessage } from './lib/Events';

export class Module {
  public static client: CommandoClient;
  public static config: Config;
  public static id = 'Module Template';
  public static description = 'A template module';
  public static commandGroups = [
    // If you need to make command groups for the module's commands,
    // Add them here rather than adding them to the core bot.
    // Helps keep the modules more independent from the bot.
    // ex. ['music', 'Music']
  ];

  /**
   * Initializes module
   * @param client
   * @param config
   */
  public async init(client: CommandoClient, config: Config) {
    Module.client = client;
    Module.config = config;
    await this.registerListeners(client, config);
  }

  /**
   * Register events
   * @param client
   */
  private async registerListeners(
    client: CommandoClient,
    config: Config
  ): Promise<void> {
    client.on('message', (message) => onMessage(message, config));
  }
}
