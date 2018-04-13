import { Message } from 'discord.js'
import { CommandoClient } from 'discord.js-commando'
import { Config } from '@natsuki/util'
import { onMessage } from './lib/Events'

export class Module {
  public static client: CommandoClient
  public static config: Config
  public static moduleName = 'Module Template'

  /**
   * Initializes module
   * @param client
   * @param config
   */
  public async init (client: CommandoClient, config: Config) {
    Module.client = client
    Module.config = config
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
