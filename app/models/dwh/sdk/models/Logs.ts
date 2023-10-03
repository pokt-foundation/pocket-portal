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

import { exists, mapValues } from "../runtime"
/**
 *
 * @export
 * @interface Logs
 */
export interface Logs {
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  ts?: string
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  portalApplicationId?: string
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  chainId?: string
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  chainMethod?: string
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  errorType?: string
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  errorName?: string
  /**
   *
   * @type {string}
   * @memberof Logs
   */
  errorMessage?: string
}

/**
 * Check if a given object implements the Logs interface.
 */
export function instanceOfLogs(value: object): boolean {
  let isInstance = true

  return isInstance
}

export function LogsFromJSON(json: any): Logs {
  return LogsFromJSONTyped(json, false)
}

export function LogsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Logs {
  if (json === undefined || json === null) {
    return json
  }
  return {
    ts: !exists(json, "ts") ? undefined : json["ts"],
    portalApplicationId: !exists(json, "portal_application_id")
      ? undefined
      : json["portal_application_id"],
    chainId: !exists(json, "chain_id") ? undefined : json["chain_id"],
    chainMethod: !exists(json, "chain_method") ? undefined : json["chain_method"],
    errorType: !exists(json, "error_type") ? undefined : json["error_type"],
    errorName: !exists(json, "error_name") ? undefined : json["error_name"],
    errorMessage: !exists(json, "error_message") ? undefined : json["error_message"],
  }
}

export function LogsToJSON(value?: Logs | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    ts: value.ts,
    portal_application_id: value.portalApplicationId,
    chain_id: value.chainId,
    chain_method: value.chainMethod,
    error_type: value.errorType,
    error_name: value.errorName,
    error_message: value.errorMessage,
  }
}
