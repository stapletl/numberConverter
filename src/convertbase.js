const convertBase = (value, from_base, to_base) => {
    let range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split("");
    if (from_base < 2 || from_base > range.length)
        throw new RangeError(`convertBase() from_base argument must be between 2 and ${range.length}`);
    if (to_base < 2 || to_base > range.length)
        throw new RangeError(`convertBase() to_base argument must be between 2 and ${range.length}`);
    let from_range = range.slice(0, from_base);
    let to_range = range.slice(0, to_base);

    let dec_value = value.split("").reverse().reduce((carry, digit, index) => {
        let fromIndex = from_range.indexOf(digit);
        if (fromIndex === -1)
            throw new Error(`Invalid digit ${digit} for base ${from_base}.`);
        return carry + fromIndex * Math.pow(from_base, index);
    }, 0);

    let new_value = "";
    while (dec_value > 0) {
        new_value = to_range[dec_value % to_base] + new_value;
        dec_value = (dec_value - dec_value % to_base) / to_base;
    }
    return new_value || "0";
};

export default convertBase;