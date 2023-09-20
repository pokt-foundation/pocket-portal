/* tslint:disable */
/* eslint-disable */
/**
 * Portal DWH Service API
 * Service that provides data from DWH to the Portal
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AnalyticsRelaysErrors,
    instanceOfAnalyticsRelaysErrors,
    AnalyticsRelaysErrorsFromJSON,
    AnalyticsRelaysErrorsFromJSONTyped,
    AnalyticsRelaysErrorsToJSON,
} from './AnalyticsRelaysErrors';
import {
    AnalyticsRelaysTransactions,
    instanceOfAnalyticsRelaysTransactions,
    AnalyticsRelaysTransactionsFromJSON,
    AnalyticsRelaysTransactionsFromJSONTyped,
    AnalyticsRelaysTransactionsToJSON,
} from './AnalyticsRelaysTransactions';

/**
 * @type ResponseDataInner
 * 
 * @export
 */
export type ResponseDataInner = AnalyticsRelaysErrors | AnalyticsRelaysTransactions;

export function ResponseDataInnerFromJSON(json: any): ResponseDataInner {
    return ResponseDataInnerFromJSONTyped(json, false);
}

export function ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AnalyticsRelaysErrorsFromJSONTyped(json, true), ...AnalyticsRelaysTransactionsFromJSONTyped(json, true) };
}

export function ResponseDataInnerToJSON(value?: ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAnalyticsRelaysErrors(value)) {
        return AnalyticsRelaysErrorsToJSON(value as AnalyticsRelaysErrors);
    }
    if (instanceOfAnalyticsRelaysTransactions(value)) {
        return AnalyticsRelaysTransactionsToJSON(value as AnalyticsRelaysTransactions);
    }

    return {};
}

