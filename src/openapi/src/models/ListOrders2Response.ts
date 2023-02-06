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
import type { OrderV2 } from './OrderV2';
import {
    OrderV2FromJSON,
    OrderV2FromJSONTyped,
    OrderV2ToJSON,
} from './OrderV2';

/**
 * ListOrders2Response response for /api/2/listorders
 * @export
 * @interface ListOrders2Response
 */
export interface ListOrders2Response {
    /**
     * 
     * @type {Array<OrderV2>}
     * @memberof ListOrders2Response
     */
    orders?: Array<OrderV2>;
}

/**
 * Check if a given object implements the ListOrders2Response interface.
 */
export function instanceOfListOrders2Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListOrders2ResponseFromJSON(json: any): ListOrders2Response {
    return ListOrders2ResponseFromJSONTyped(json, false);
}

export function ListOrders2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOrders2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orders': !exists(json, 'orders') ? undefined : ((json['orders'] as Array<any>).map(OrderV2FromJSON)),
    };
}

export function ListOrders2ResponseToJSON(value?: ListOrders2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orders': value.orders === undefined ? undefined : ((value.orders as Array<any>).map(OrderV2ToJSON)),
    };
}

