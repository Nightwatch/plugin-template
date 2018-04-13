import { Message } from 'discord.js';
import { Config } from '@natsuki/util';
export declare const onMessage: (message: Message, config: Config) => Promise<void>;
