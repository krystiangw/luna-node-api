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
import type { Transaction } from './Transaction';
/**
 * ListTransactionsResponse response
 * @export
 * @interface ListTransactionsResponse
 */
export interface ListTransactionsResponse {
    /**
     *
     * @type {string}
     * @memberof ListTransactionsResponse
     */
    id?: string;
    /**
     *
     * @type {Array<Transaction>}
     * @memberof ListTransactionsResponse
     */
    transactions?: Array<Transaction>;
}
/**
 * Check if a given object implements the ListTransactionsResponse interface.
 */
export declare function instanceOfListTransactionsResponse(value: object): boolean;
export declare function ListTransactionsResponseFromJSON(json: any): ListTransactionsResponse;
export declare function ListTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTransactionsResponse;
export declare function ListTransactionsResponseToJSON(value?: ListTransactionsResponse | null): any;
//# sourceMappingURL=ListTransactionsResponse.d.ts.map