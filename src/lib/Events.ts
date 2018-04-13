import { Message } from 'discord.js'
import axios from 'axios'
import { Logger, Config } from '@natsuki/util'
import { User as NatsukiUser } from '@natsuki/db'
import { Module } from '../'

export const onMessage = async (message: Message, config: Config) => {
  // Handle on message (if needed)
}
