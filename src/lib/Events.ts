import { Message } from 'discord.js'
import axios from 'axios'
import { Logger, Config } from '@nightwatch/util'
import { User as BotUser } from '@nightwatch/db'
import { Plugin } from '../'

export const onMessage = async (message: Message, config: Config) => {
  // Handle on message (if needed)
}
