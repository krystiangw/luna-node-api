/* tslint:disable */
/* eslint-disable */
/**
 * Luno API
 * The Luno API provides developers with a wealth of financial information provided through the Luno platform.  Through this secure system developers can:  <ul>    <li>Create accounts for trading in cryptocurrencies</li>    <li>Access current and historic cryptocurrency market data</li>    <li>Submit trade orders and view order status</li>    <li>Buy and sell Bitcoin and Ethereum</li>    <li>Send and receive Bitcoin and Ethereum</li>    <li>Generate Bitcoin and Ethereum wallet addresses</li>  </ul>   The Luno API brings the world of Bitcoin and Ethereum to your doorstep. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OrderBookEntry } from './OrderBookEntry';
import {
    OrderBookEntryFromJSON,
    OrderBookEntryFromJSONTyped,
    OrderBookEntryToJSON,
} from './OrderBookEntry';

/**
 * 
 * @export
 * @interface OrderBook
 */
export interface OrderBook {
    /**
     * List of asks sorted from lowest to highest price
     * @type {Array<OrderBookEntry>}
     * @memberof OrderBook
     */
    asks?: Array<OrderBookEntry>;
    /**
     * List of bids sorted from highest to lowest price
     * @type {Array<OrderBookEntry>}
     * @memberof OrderBook
     */
    bids?: Array<OrderBookEntry>;
    /**
     * Unix timestamp in milliseconds
     * @type {number}
     * @memberof OrderBook
     */
    timestamp?: number;
}

/**
 * Check if a given object implements the OrderBook interface.
 */
export function instanceOfOrderBook(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderBookFromJSON(json: any): OrderBook {
    return OrderBookFromJSONTyped(json, false);
}

export function OrderBookFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderBook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'asks': !exists(json, 'asks') ? undefined : ((json['asks'] as Array<any>).map(OrderBookEntryFromJSON)),
        'bids': !exists(json, 'bids') ? undefined : ((json['bids'] as Array<any>).map(OrderBookEntryFromJSON)),
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
    };
}

export function OrderBookToJSON(value?: OrderBook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'asks': value.asks === undefined ? undefined : ((value.asks as Array<any>).map(OrderBookEntryToJSON)),
        'bids': value.bids === undefined ? undefined : ((value.bids as Array<any>).map(OrderBookEntryToJSON)),
        'timestamp': value.timestamp,
    };
}

