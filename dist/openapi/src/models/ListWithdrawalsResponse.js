"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWithdrawalsResponseToJSON = exports.ListWithdrawalsResponseFromJSONTyped = exports.ListWithdrawalsResponseFromJSON = exports.instanceOfListWithdrawalsResponse = void 0;
const runtime_1 = require("../runtime");
const Withdrawal_1 = require("./Withdrawal");
/**
 * Check if a given object implements the ListWithdrawalsResponse interface.
 */
function instanceOfListWithdrawalsResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfListWithdrawalsResponse = instanceOfListWithdrawalsResponse;
function ListWithdrawalsResponseFromJSON(json) {
    return ListWithdrawalsResponseFromJSONTyped(json, false);
}
exports.ListWithdrawalsResponseFromJSON = ListWithdrawalsResponseFromJSON;
function ListWithdrawalsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'withdrawals': !(0, runtime_1.exists)(json, 'withdrawals') ? undefined : (json['withdrawals'].map(Withdrawal_1.WithdrawalFromJSON)),
    };
}
exports.ListWithdrawalsResponseFromJSONTyped = ListWithdrawalsResponseFromJSONTyped;
function ListWithdrawalsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'withdrawals': value.withdrawals === undefined ? undefined : (value.withdrawals.map(Withdrawal_1.WithdrawalToJSON)),
    };
}
exports.ListWithdrawalsResponseToJSON = ListWithdrawalsResponseToJSON;
//# sourceMappingURL=ListWithdrawalsResponse.js.map