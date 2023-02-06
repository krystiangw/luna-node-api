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
/**
 * GetWithdrawalResponse response
 * @export
 * @interface GetWithdrawalResponse
 */
export interface GetWithdrawalResponse {
    /**
     * Amount to withdraw
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    amount?: string;
    /**
     * Unix time the withdrawal was initiated, in milliseconds
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    createdAt?: string;
    /**
     * Withdrawal currency.
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    currency?: string;
    /**
     * External ID has the value that was passed in when the Withdrawal request was posted.
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    externalId?: string;
    /**
     * Withdrawal fee
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    fee?: string;
    /**
     *
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    id?: string;
    /**
     * Status
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    status?: GetWithdrawalResponseStatusEnum;
    /**
     * Type distinguishes between different withdrawal methods where more than one is supported
     * for the given currency.
     * @type {string}
     * @memberof GetWithdrawalResponse
     */
    type?: string;
}
/**
 * @export
 */
export declare const GetWithdrawalResponseStatusEnum: {
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Completed: "COMPLETED";
    readonly Cancelled: "CANCELLED";
    readonly Waiting: "WAITING";
    readonly Cancelling: "CANCELLING";
    readonly Unknown: "UNKNOWN";
};
export type GetWithdrawalResponseStatusEnum = typeof GetWithdrawalResponseStatusEnum[keyof typeof GetWithdrawalResponseStatusEnum];
/**
 * Check if a given object implements the GetWithdrawalResponse interface.
 */
export declare function instanceOfGetWithdrawalResponse(value: object): boolean;
export declare function GetWithdrawalResponseFromJSON(json: any): GetWithdrawalResponse;
export declare function GetWithdrawalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetWithdrawalResponse;
export declare function GetWithdrawalResponseToJSON(value?: GetWithdrawalResponse | null): any;
//# sourceMappingURL=GetWithdrawalResponse.d.ts.map