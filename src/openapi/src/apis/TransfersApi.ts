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


import * as runtime from '../runtime';
import type {
  CancelWithdrawalResponse,
  CreateWithdrawalResponse,
  GetOrderBookFullDefaultResponse,
  GetWithdrawalResponse,
  ListTransfersResponse,
  ListWithdrawalsResponse,
} from '../models';
import {
    CancelWithdrawalResponseFromJSON,
    CancelWithdrawalResponseToJSON,
    CreateWithdrawalResponseFromJSON,
    CreateWithdrawalResponseToJSON,
    GetOrderBookFullDefaultResponseFromJSON,
    GetOrderBookFullDefaultResponseToJSON,
    GetWithdrawalResponseFromJSON,
    GetWithdrawalResponseToJSON,
    ListTransfersResponseFromJSON,
    ListTransfersResponseToJSON,
    ListWithdrawalsResponseFromJSON,
    ListWithdrawalsResponseToJSON,
} from '../models';

export interface CancelWithdrawalRequest {
    id: number;
}

export interface CreateWithdrawalRequest {
    type: string;
    amount: string;
    beneficiaryId?: number;
    fast?: boolean;
    reference?: string;
    externalId?: string;
}

export interface GetWithdrawalRequest {
    id: number;
}

export interface ListTransfersRequest {
    accountId: number;
    limit?: number;
    before?: number;
}

export interface ListWithdrawalsRequest {
    beforeId?: number;
    limit?: number;
}

/**
 * TransfersApi - interface
 * 
 * @export
 * @interface TransfersApiInterface
 */
export interface TransfersApiInterface {
    /**
     * Cancels a withdrawal request. This can only be done if the request is still in state <code>PENDING</code>.  Permissions required: <code>Perm_W_Withdrawals</code>
     * @summary Cancel withdrawal request
     * @param {number} id ID of the withdrawal to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    cancelWithdrawalRaw(requestParameters: CancelWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CancelWithdrawalResponse>>;

    /**
     * Cancels a withdrawal request. This can only be done if the request is still in state <code>PENDING</code>.  Permissions required: <code>Perm_W_Withdrawals</code>
     * Cancel withdrawal request
     */
    cancelWithdrawal(requestParameters: CancelWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CancelWithdrawalResponse>;

    /**
     * Creates a new withdrawal request to the specified beneficiary.  Permissions required: <code>Perm_W_Withdrawals</code>
     * @summary Request a withdrawal
     * @param {string} type Withdrawal method.
     * @param {string} amount Amount to withdraw. The currency withdrawn depends on the type setting.
     * @param {number} [beneficiaryId] The beneficiary ID of the bank account the withdrawal will be paid out to. This parameter is required if the user has set up multiple beneficiaries. The beneficiary ID can be found by selecting on the beneficiary name on the user’s &lt;a href&#x3D;\&quot;/wallet/beneficiaries\&quot;&gt;Beneficiaries&lt;/a&gt; page.
     * @param {boolean} [fast] If true, it will be a fast withdrawal if possible. Fast withdrawals come with a fee. Currently fast withdrawals are only available for &#x60;type&#x3D;ZAR_EFT&#x60;; for other types, an error is returned. Fast withdrawals are not possible for Bank of Baroda, Deutsche Bank, Merrill Lynch South Africa, UBS, Postbank and Tyme Bank. The fee to be charged is the same as when withdrawing from the UI.
     * @param {string} [reference] For internal use.
     * @param {string} [externalId] Optional unique ID to associate with this withdrawal. Useful to prevent duplicate sends. This field supports all alphanumeric characters including \&quot;-\&quot; and \&quot;_\&quot;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    createWithdrawalRaw(requestParameters: CreateWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateWithdrawalResponse>>;

    /**
     * Creates a new withdrawal request to the specified beneficiary.  Permissions required: <code>Perm_W_Withdrawals</code>
     * Request a withdrawal
     */
    createWithdrawal(requestParameters: CreateWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateWithdrawalResponse>;

    /**
     * Returns the status of a particular withdrawal request.  Permissions required: <code>Perm_R_Withdrawals</code>
     * @summary Get withdrawal request
     * @param {number} id Withdrawal ID to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    getWithdrawalRaw(requestParameters: GetWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetWithdrawalResponse>>;

    /**
     * Returns the status of a particular withdrawal request.  Permissions required: <code>Perm_R_Withdrawals</code>
     * Get withdrawal request
     */
    getWithdrawal(requestParameters: GetWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWithdrawalResponse>;

    /**
     * Returns a list of the most recent confirmed transfers ordered from newest to oldest. This includes bank transfers, card payments, or on-chain transactions that have been reflected on your account available balance.  Note that the Transfer `amount` is always a positive value and you should use the `inbound` flag to determine the direction of the transfer.  If you need to paginate the results you can set the `before` parameter to the last returned transfer `created_at` field value and repeat the request until you have all the transfers you need. This endpoint will list up to 100 transfers at a time by default.  This endpoint is in BETA, behaviour and specification may change without any previous notice.  Permissions required: <Code>Perm_R_Transfers</Code>
     * @summary List transfers (BETA)
     * @param {number} accountId Unique identifier of the account to list the transfers from.
     * @param {number} [limit] Limit to this many transfers.
     * @param {number} [before] Filter to transfers created before this timestamp (Unix milliseconds). The default value (0) will return the latest transfers on the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    listTransfersRaw(requestParameters: ListTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTransfersResponse>>;

    /**
     * Returns a list of the most recent confirmed transfers ordered from newest to oldest. This includes bank transfers, card payments, or on-chain transactions that have been reflected on your account available balance.  Note that the Transfer `amount` is always a positive value and you should use the `inbound` flag to determine the direction of the transfer.  If you need to paginate the results you can set the `before` parameter to the last returned transfer `created_at` field value and repeat the request until you have all the transfers you need. This endpoint will list up to 100 transfers at a time by default.  This endpoint is in BETA, behaviour and specification may change without any previous notice.  Permissions required: <Code>Perm_R_Transfers</Code>
     * List transfers (BETA)
     */
    listTransfers(requestParameters: ListTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTransfersResponse>;

    /**
     * Returns a list of withdrawal requests.  Permissions required: <code>Perm_R_Withdrawals</code>
     * @summary List withdrawal requests
     * @param {number} [beforeId] Filter to withdrawals requested on or before the withdrawal with this ID. Can be used for pagination.
     * @param {number} [limit] Limit to this many withdrawals
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    listWithdrawalsRaw(requestParameters: ListWithdrawalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWithdrawalsResponse>>;

    /**
     * Returns a list of withdrawal requests.  Permissions required: <code>Perm_R_Withdrawals</code>
     * List withdrawal requests
     */
    listWithdrawals(requestParameters: ListWithdrawalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWithdrawalsResponse>;

}

/**
 * 
 */
export class TransfersApi extends runtime.BaseAPI implements TransfersApiInterface {

    /**
     * Cancels a withdrawal request. This can only be done if the request is still in state <code>PENDING</code>.  Permissions required: <code>Perm_W_Withdrawals</code>
     * Cancel withdrawal request
     */
    async cancelWithdrawalRaw(requestParameters: CancelWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CancelWithdrawalResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling cancelWithdrawal.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/1/withdrawals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CancelWithdrawalResponseFromJSON(jsonValue));
    }

    /**
     * Cancels a withdrawal request. This can only be done if the request is still in state <code>PENDING</code>.  Permissions required: <code>Perm_W_Withdrawals</code>
     * Cancel withdrawal request
     */
    async cancelWithdrawal(requestParameters: CancelWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CancelWithdrawalResponse> {
        const response = await this.cancelWithdrawalRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new withdrawal request to the specified beneficiary.  Permissions required: <code>Perm_W_Withdrawals</code>
     * Request a withdrawal
     */
    async createWithdrawalRaw(requestParameters: CreateWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateWithdrawalResponse>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling createWithdrawal.');
        }

        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling createWithdrawal.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.beneficiaryId !== undefined) {
            queryParameters['beneficiary_id'] = requestParameters.beneficiaryId;
        }

        if (requestParameters.fast !== undefined) {
            queryParameters['fast'] = requestParameters.fast;
        }

        if (requestParameters.reference !== undefined) {
            queryParameters['reference'] = requestParameters.reference;
        }

        if (requestParameters.externalId !== undefined) {
            queryParameters['external_id'] = requestParameters.externalId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/1/withdrawals`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateWithdrawalResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new withdrawal request to the specified beneficiary.  Permissions required: <code>Perm_W_Withdrawals</code>
     * Request a withdrawal
     */
    async createWithdrawal(requestParameters: CreateWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateWithdrawalResponse> {
        const response = await this.createWithdrawalRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the status of a particular withdrawal request.  Permissions required: <code>Perm_R_Withdrawals</code>
     * Get withdrawal request
     */
    async getWithdrawalRaw(requestParameters: GetWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetWithdrawalResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getWithdrawal.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/1/withdrawals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetWithdrawalResponseFromJSON(jsonValue));
    }

    /**
     * Returns the status of a particular withdrawal request.  Permissions required: <code>Perm_R_Withdrawals</code>
     * Get withdrawal request
     */
    async getWithdrawal(requestParameters: GetWithdrawalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWithdrawalResponse> {
        const response = await this.getWithdrawalRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of the most recent confirmed transfers ordered from newest to oldest. This includes bank transfers, card payments, or on-chain transactions that have been reflected on your account available balance.  Note that the Transfer `amount` is always a positive value and you should use the `inbound` flag to determine the direction of the transfer.  If you need to paginate the results you can set the `before` parameter to the last returned transfer `created_at` field value and repeat the request until you have all the transfers you need. This endpoint will list up to 100 transfers at a time by default.  This endpoint is in BETA, behaviour and specification may change without any previous notice.  Permissions required: <Code>Perm_R_Transfers</Code>
     * List transfers (BETA)
     */
    async listTransfersRaw(requestParameters: ListTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTransfersResponse>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling listTransfers.');
        }

        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.before !== undefined) {
            queryParameters['before'] = requestParameters.before;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/exchange/1/transfers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListTransfersResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of the most recent confirmed transfers ordered from newest to oldest. This includes bank transfers, card payments, or on-chain transactions that have been reflected on your account available balance.  Note that the Transfer `amount` is always a positive value and you should use the `inbound` flag to determine the direction of the transfer.  If you need to paginate the results you can set the `before` parameter to the last returned transfer `created_at` field value and repeat the request until you have all the transfers you need. This endpoint will list up to 100 transfers at a time by default.  This endpoint is in BETA, behaviour and specification may change without any previous notice.  Permissions required: <Code>Perm_R_Transfers</Code>
     * List transfers (BETA)
     */
    async listTransfers(requestParameters: ListTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTransfersResponse> {
        const response = await this.listTransfersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of withdrawal requests.  Permissions required: <code>Perm_R_Withdrawals</code>
     * List withdrawal requests
     */
    async listWithdrawalsRaw(requestParameters: ListWithdrawalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWithdrawalsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.beforeId !== undefined) {
            queryParameters['before_id'] = requestParameters.beforeId;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/1/withdrawals`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListWithdrawalsResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of withdrawal requests.  Permissions required: <code>Perm_R_Withdrawals</code>
     * List withdrawal requests
     */
    async listWithdrawals(requestParameters: ListWithdrawalsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWithdrawalsResponse> {
        const response = await this.listWithdrawalsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
