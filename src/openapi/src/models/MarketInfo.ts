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
/**
 * MarketInfo current market information
 * @export
 * @interface MarketInfo
 */
export interface MarketInfo {
    /**
     * Base currency code
     * @type {string}
     * @memberof MarketInfo
     */
    baseCurrency?: string;
    /**
     * Counter currency code
     * @type {string}
     * @memberof MarketInfo
     */
    counterCurrency?: string;
    /**
     * Fee decimal places
     * @type {number}
     * @memberof MarketInfo
     */
    feeScale?: number;
    /**
     * Unique identifier for the market
     * @type {string}
     * @memberof MarketInfo
     */
    marketId?: string;
    /**
     * Maximum order price
     * @type {string}
     * @memberof MarketInfo
     */
    maxPrice?: string;
    /**
     * Maximum order volume
     * @type {string}
     * @memberof MarketInfo
     */
    maxVolume?: string;
    /**
     * Minimum order price
     * @type {string}
     * @memberof MarketInfo
     */
    minPrice?: string;
    /**
     * Minimum order volume
     * @type {string}
     * @memberof MarketInfo
     */
    minVolume?: string;
    /**
     * Price decimal places
     * @type {number}
     * @memberof MarketInfo
     */
    priceScale?: number;
    /**
     * Current market trading status:<br>
     * <code>POST_ONLY</code> Trading is indefinitely suspended. This state is
     * commonly used when new markets are being launched to give traders enough
     * time to setup their orders before trading begins. When in this status,
     * orders can only be posted as post-only.<br>
     * <code>ACTIVE</code> Trading is fully enabled.<br>
     * <code>SUSPENDED</code> Trading has been temporarily suspended due to very
     * high volatility. When in this status, orders can only be posted as
     * post-only.<br>
     * @type {string}
     * @memberof MarketInfo
     */
    tradingStatus?: MarketInfoTradingStatusEnum;
    /**
     * Volume decimal places
     * @type {number}
     * @memberof MarketInfo
     */
    volumeScale?: number;
}


/**
 * @export
 */
export const MarketInfoTradingStatusEnum = {
    PostOnly: 'POST_ONLY',
    Active: 'ACTIVE',
    Suspended: 'SUSPENDED'
} as const;
export type MarketInfoTradingStatusEnum = typeof MarketInfoTradingStatusEnum[keyof typeof MarketInfoTradingStatusEnum];


/**
 * Check if a given object implements the MarketInfo interface.
 */
export function instanceOfMarketInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketInfoFromJSON(json: any): MarketInfo {
    return MarketInfoFromJSONTyped(json, false);
}

export function MarketInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseCurrency': !exists(json, 'base_currency') ? undefined : json['base_currency'],
        'counterCurrency': !exists(json, 'counter_currency') ? undefined : json['counter_currency'],
        'feeScale': !exists(json, 'fee_scale') ? undefined : json['fee_scale'],
        'marketId': !exists(json, 'market_id') ? undefined : json['market_id'],
        'maxPrice': !exists(json, 'max_price') ? undefined : json['max_price'],
        'maxVolume': !exists(json, 'max_volume') ? undefined : json['max_volume'],
        'minPrice': !exists(json, 'min_price') ? undefined : json['min_price'],
        'minVolume': !exists(json, 'min_volume') ? undefined : json['min_volume'],
        'priceScale': !exists(json, 'price_scale') ? undefined : json['price_scale'],
        'tradingStatus': !exists(json, 'trading_status') ? undefined : json['trading_status'],
        'volumeScale': !exists(json, 'volume_scale') ? undefined : json['volume_scale'],
    };
}

export function MarketInfoToJSON(value?: MarketInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base_currency': value.baseCurrency,
        'counter_currency': value.counterCurrency,
        'fee_scale': value.feeScale,
        'market_id': value.marketId,
        'max_price': value.maxPrice,
        'max_volume': value.maxVolume,
        'min_price': value.minPrice,
        'min_volume': value.minVolume,
        'price_scale': value.priceScale,
        'trading_status': value.tradingStatus,
        'volume_scale': value.volumeScale,
    };
}

