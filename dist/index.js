"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Events_1 = require("./lib/Events");
class Plugin {
    /**
     * Initializes plugin
     * @param client
     * @param config
     */
    async init(client, config) {
        Plugin.client = client;
        Plugin.config = config;
        await this.registerListeners(client, config);
    }
    /**
     * Register events
     * @param client
     */
    async registerListeners(client, config) {
        client.on('message', message => Events_1.onMessage(message, config));
    }
}
Plugin.id = 'Plugin Template';
Plugin.description = 'A template plugin';
Plugin.commandGroups = [
// If you need to make command groups for the plugin's commands,
// Add them here rather than adding them to the core bot.
// Helps keep the plugins more independent from the bot.
// ex. ['music', 'Music']
];
exports.Plugin = Plugin;
//# sourceMappingURL=index.js.map