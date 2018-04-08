import { Message } from 'discord.js'
import { CommandoClient } from 'discord.js-commando'
import { Config } from '@natsuki/util'

export class Module {
  public static client: CommandoClient
  public static config: Config

  protected static async onMessage (message: Message) {
    // If you need stuff to run in the background, use this.
  }

  /**
   * Initializes module
   * @param client
   * @param config
   */
  public async init (client: CommandoClient, config: Config) {
    Module.client = client
    Module.config = config
    await this.registerListeners(client)
  }

  /**
   * Register events
   * @param client
   */
  private async registerListeners (client: CommandoClient): Promise<void> {
    client.on('message', await Module.onMessage)
  }
}
