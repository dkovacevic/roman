/* tslint:disable */
/* eslint-disable */
/**
 * Roman Swagger
 * Roman - Wire Bots Proxy
 *
 * The version of the OpenAPI document: 1.14.0
 * Contact: dejan@wire.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Poll
 */
export interface Poll {
    /**
     * 
     * @type {string}
     * @memberof Poll
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Poll
     */
    type: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Poll
     */
    buttons?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Poll
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof Poll
     */
    userId?: string;
}

export function PollFromJSON(json: any): Poll {
    return PollFromJSONTyped(json, false);
}

export function PollFromJSONTyped(json: any, ignoreDiscriminator: boolean): Poll {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'buttons': !exists(json, 'buttons') ? undefined : json['buttons'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function PollToJSON(value?: Poll | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'buttons': value.buttons,
        'offset': value.offset,
        'userId': value.userId,
    };
}


