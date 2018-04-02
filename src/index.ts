import { Message } from 'discord.js'
import { CommandoClient } from 'discord.js-commando'

export class Module {
  private static client: CommandoClient
  private static apiToken: string

  protected static async onMessage (message: Message) {
    // If you need stuff to run in the background, use this.
  }

  public async init (client: CommandoClient, apiToken: string) {
    Module.client = client
    Module.apiToken = apiToken
    await this.registerListeners(client)
  }

  private async registerListeners (client: CommandoClient): Promise<void> {
    client.on('message', await Module.onMessage)
  }
}
