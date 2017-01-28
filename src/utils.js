/**
 * Creates a new object describing the changed field in objNew.
 * Each field is compared against objOld:
 * - Only changed fields are included.
 * - Arrays are considered as a single entity (if one items differs, the entire array is considered changed).
 * - Objects are checked recusively.
 * - Primitives are checked by value.
 * @param  {Object} objOld
 * @param  {Object} objNew
 * @returns {Object}
 */
export function diff(objOld, objNew) {
    let result = {}
    for (let key of Object.keys(objNew)) {
        let valueOld = (objOld) ? objOld[key] : null,
            valueNew = objNew[key];

        // Arrays are considered as a single entity (if one items differs, the array is considered changed).
        if (Array.isArray(valueNew)) {
            let objDiff =  diff(valueNew, valueOld);

            // No items in object (inital value), discard this key.
            if (!Object.keys(objDiff).length) {
                continue;
            }

            result[key] = valueNew;
        }


        // Objects are checked recusively.
        else if (isObject(valueNew)) {
            let objDiff =  diff(valueOld, valueNew);

            // No items in object (inital value), discard this key.
            if (!Object.keys(objDiff).length) {
                continue;
            }

            result[key] = objDiff;
        }

        // Primitives are checked by value.
        else {
            // No difference beweteen valueNew and valueOld, discard this key.
            if (valueNew === valueOld) {
                continue;
            }

            result[key] = valueNew;
        }
    }
    return result;
}


/**
 * Returns whether object is an object
 * @param {*} object
 * @returns {Boolean}
 */
export function isObject(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
}
