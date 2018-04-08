"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Module {
    static async onMessage(message) {
        // If you need stuff to run in the background, use this.
    }
    /**
     * Initializes module
     * @param client
     * @param config
     */
    async init(client, config) {
        Module.client = client;
        Module.config = config;
        await this.registerListeners(client);
    }
    /**
     * Register events
     * @param client
     */
    async registerListeners(client) {
        client.on('message', await Module.onMessage);
    }
}
exports.Module = Module;
//# sourceMappingURL=index.js.map