﻿Array.prototype.compare = function (array) {

    if (!array) {
        return false;
    }

    if (this.length != array.length) {
        return false;
    }

    for (var i = 0; i < this.length; i++) {

        if (this[i] instanceof Array && array[i] instanceof Array) {

            if (!this[i].compare(array[i])) {
                return false;
            }
        } else if (this[i] != array[i]) {
            //warning, 2 different object instances will never be equal
            return false;
        }
    }
    return true;
}