import { Message } from 'discord.js'
import { CommandoClient } from 'discord.js-commando'
import { Config } from '@nightwatch/util'
import { onMessage } from './lib/Events'

export class Plugin {
  public static client: CommandoClient
  public static config: Config
  public static id = 'Plugin Template'
  public static description = 'A template plugin'
  public static commandGroups = [
    // If you need to make command groups for the plugin's commands,
    // Add them here rather than adding them to the core bot.
    // Helps keep the plugins more independent from the bot.
    // ex. ['music', 'Music']
  ]

  /**
   * Initializes plugin
   * @param client
   * @param config
   */
  public async init (client: CommandoClient, config: Config) {
    Plugin.client = client
    Plugin.config = config
    await this.registerListeners(client, config)
  }

  /**
   * Register events
   * @param client
   */
  private async registerListeners (client: CommandoClient, config: Config): Promise<void> {
    client.on('message', message => onMessage(message, config))
  }
}
