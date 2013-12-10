// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

if (typeof Array.prototype.indexOf !== "function") {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        if (!this) {
            throw (typeof TypeError === "function" ? new TypeError() : new Error("TypeError"));
        }
    
        var pivot = fromIndex || 0,
            length = this.length,
            i;
    
        if (length > 0 && pivot < length) {
            if (pivot < 0) {
                pivot = length - Math.abs(pivot);
            }
        
            for (i = pivot; i < length; i++) {
                if (this[i] === searchElement) {
                    return i;
                }
            }
        }
    
        return -1;
    };
}
