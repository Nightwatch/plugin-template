"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Module {
    static async onMessage(message) {
        // If you need stuff to run in the background, use this.
    }
    async init(client, apiToken) {
        Module.client = client;
        Module.apiToken = apiToken;
        await this.registerListeners(client);
    }
    async registerListeners(client) {
        client.on('message', await Module.onMessage);
    }
}
exports.Module = Module;
//# sourceMappingURL=index.js.map