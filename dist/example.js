"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const dotenv = __importStar(require("dotenv"));
const publicKey = dotenv.config().parsed?.LUNO_PUBLIC;
const secretKey = dotenv.config().parsed?.LUNO_SECRET;
// PUBLIC API
async function getOrderbook() {
    const marketApi = new _1.MarketApi();
    try {
        const results = await marketApi.getOrderBookFull({ pair: 'XBTUSDC' });
        console.log('getOrderBookFull response: ', results);
    }
    catch (err) {
        console.error(err);
    }
}
getOrderbook();
// API AUTH
async function getUserOrders() {
    const conf = new _1.Configuration({
        headers: {
            Authorization: "Basic " + Buffer.from(publicKey + ":" + secretKey, 'utf8').toString('base64'),
        },
        // for Node < 18.0 needs to provide fetch API
        // fetchApi: fetch
    });
    const ordersApi = new _1.OrdersApi(conf);
    try {
        const results = await ordersApi.listOrders();
        console.log('listOrders response: ', results);
    }
    catch (err) {
        console.error(err);
    }
}
getUserOrders();
//# sourceMappingURL=example.js.map