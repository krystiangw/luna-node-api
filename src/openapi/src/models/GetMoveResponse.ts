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
 * GetMoveResponse response for GET /1/move
 * @export
 * @interface GetMoveResponse
 */
export interface GetMoveResponse {
    /**
     * The assets quantity to move from the debit account to credit account. This is always a positive value.
     * @type {string}
     * @memberof GetMoveResponse
     */
    amount?: string;
    /**
     * User defined unique ID
     * @type {string}
     * @memberof GetMoveResponse
     */
    clientMoveId?: string;
    /**
     * Unix time the move was initiated, in milliseconds
     * @type {string}
     * @memberof GetMoveResponse
     */
    createdAt?: string;
    /**
     * The account to credit the funds to.
     * @type {string}
     * @memberof GetMoveResponse
     */
    creditAccountId?: string;
    /**
     * The account to debit the funds from.
     * @type {string}
     * @memberof GetMoveResponse
     */
    debitAccountId?: string;
    /**
     * Unique ID, defined by Luno
     * @type {string}
     * @memberof GetMoveResponse
     */
    id?: string;
    /**
     * Current status of the move.
     * 
     * Status meaning:<br>
     * <code>CREATED</code> The move is awaiting execution.<br>
     * <code>MOVING</code> The funds have been reserved and the move is being executed.<br>
     * <code>SUCCESSFUL</code> The move has completed successfully and should be reflected in both accounts available
     * balance.<br>
     * <code>FAILED</code> The move has failed. There could be many reasons for this but the most likely is that the
     * debit account doesn't have enough available funds to move.<br>
     * @type {string}
     * @memberof GetMoveResponse
     */
    status?: GetMoveResponseStatusEnum;
    /**
     * Unix time the move was last updated, in milliseconds
     * @type {string}
     * @memberof GetMoveResponse
     */
    updatedAt?: string;
}


/**
 * @export
 */
export const GetMoveResponseStatusEnum = {
    Created: 'CREATED',
    Moving: 'MOVING',
    Successful: 'SUCCESSFUL',
    Failed: 'FAILED'
} as const;
export type GetMoveResponseStatusEnum = typeof GetMoveResponseStatusEnum[keyof typeof GetMoveResponseStatusEnum];


/**
 * Check if a given object implements the GetMoveResponse interface.
 */
export function instanceOfGetMoveResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetMoveResponseFromJSON(json: any): GetMoveResponse {
    return GetMoveResponseFromJSONTyped(json, false);
}

export function GetMoveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMoveResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'clientMoveId': !exists(json, 'client_move_id') ? undefined : json['client_move_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'creditAccountId': !exists(json, 'credit_account_id') ? undefined : json['credit_account_id'],
        'debitAccountId': !exists(json, 'debit_account_id') ? undefined : json['debit_account_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function GetMoveResponseToJSON(value?: GetMoveResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'client_move_id': value.clientMoveId,
        'created_at': value.createdAt,
        'credit_account_id': value.creditAccountId,
        'debit_account_id': value.debitAccountId,
        'id': value.id,
        'status': value.status,
        'updated_at': value.updatedAt,
    };
}

