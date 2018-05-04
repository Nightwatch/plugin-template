"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Events_1 = require("./lib/Events");
class Module {
    /**
     * Initializes module
     * @param client
     * @param config
     */
    async init(client, config) {
        Module.client = client;
        Module.config = config;
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
Module.id = 'Module Template';
Module.description = 'A template module';
exports.Module = Module;
//# sourceMappingURL=index.js.map