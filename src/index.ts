import { Message } from 'discord.js'
import { CommandoClient } from 'discord.js-commando'

export class Module {
  private static client: CommandoClient

  // public static async onMessage (message: Message) {}

  public async registerListeners (client: CommandoClient): Promise<void> {
    // client.on('message', await Module.onMessage)
    Module.client = client
  }
}
