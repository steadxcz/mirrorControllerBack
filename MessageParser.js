"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageRouter {
    routes;
    constructor() {
        this.routes = new Map();
    }
    registerRoute(deviceId, handler) {
        this.routes.set(deviceId, handler);
    }
    routeMessage(deviceId, message) {
        const handler = this.routes.get(deviceId);
        if (handler) {
            handler(message);
        }
        else {
            console.error(`No handler found for route: ${deviceId}`);
        }
    }
}
const router = new MessageRouter();
router.registerRoute('mirror', (message) => {
    console.log('Received mirror msg:', message);
});
router.registerRoute('web', (message) => {
    console.log('Received web message:', message);
});
exports.default = router;
