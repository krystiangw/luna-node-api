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
  ListBeneficiariesResponse,
} from '../models';
import {
    ListBeneficiariesResponseFromJSON,
    ListBeneficiariesResponseToJSON,
} from '../models';

/**
 * BeneficiariesApi - interface
 * 
 * @export
 * @interface BeneficiariesApiInterface
 */
export interface BeneficiariesApiInterface {
    /**
     * Returns a list of bank beneficiaries.  Permissions required: <code>Perm_R_Beneficiaries</code>
     * @summary List beneficiaries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BeneficiariesApiInterface
     */
    listBeneficiariesResponseRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListBeneficiariesResponse>>;

    /**
     * Returns a list of bank beneficiaries.  Permissions required: <code>Perm_R_Beneficiaries</code>
     * List beneficiaries
     */
    listBeneficiariesResponse(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListBeneficiariesResponse>;

}

/**
 * 
 */
export class BeneficiariesApi extends runtime.BaseAPI implements BeneficiariesApiInterface {

    /**
     * Returns a list of bank beneficiaries.  Permissions required: <code>Perm_R_Beneficiaries</code>
     * List beneficiaries
     */
    async listBeneficiariesResponseRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListBeneficiariesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/1/beneficiaries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListBeneficiariesResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of bank beneficiaries.  Permissions required: <code>Perm_R_Beneficiaries</code>
     * List beneficiaries
     */
    async listBeneficiariesResponse(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListBeneficiariesResponse> {
        const response = await this.listBeneficiariesResponseRaw(initOverrides);
        return await response.value();
    }

}
