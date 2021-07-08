const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue;
    },
    inRange(number, start, end) {

        if (end === undefined) {
            end = start;
            start = 0;

        }

        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = (start <= number) && (number < end);
        return isInRange;
    },
    words(str) {
        let words = str.split(' ');
        return words;

    },
    pad(strg, len) {
        if (len <= strg.length) {
            return strg;
        }
        let startPaddingLength = Math.floor(((len - strg.length) / 2));
        let endPaddingLength = len - strg.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + strg + " ".repeat(endPaddingLength);
        return paddedString;
    }

    ,
    has(obj, key) {
        let hasValue = obj[key];
        if (hasValue != undefined) {
            return true;
        }
        return false


    },
    invert(object) {

        let invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            invertedObject = { originalValue: key };

        }
        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            };

        };
        undefined;
        return undefined;
    },
    drop(array, n) {
        if (n == undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size = 1) {
        let arrayChunks = [];
        for (let j = 0; j < array.length; j += size) {
            let arrayChunk = array.slice(j, j + size);
            arrayChunks.push(arrayChunk);

        }
        return arrayChunks;
    }

}

// Do not write or modify code below this line.
module.exports = _;