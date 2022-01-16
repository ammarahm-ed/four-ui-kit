var isValidHex = function (hex) { return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex); };
var getChunksFromString = function (st, chunkSize) {
    return st.match(new RegExp(".{".concat(chunkSize, "}"), "g"));
};
var convertHexUnitTo256 = function (hexStr) {
    return parseInt(hexStr.repeat(2 / hexStr.length), 16);
};
var getAlphaFloat = function (a, alpha) {
    if (typeof a !== "undefined") {
        return a / 256;
    }
    if (typeof alpha !== "undefined") {
        if (1 < alpha && alpha <= 100) {
            return alpha / 100;
        }
        if (0 <= alpha && alpha <= 1) {
            return alpha;
        }
    }
    return 1;
};
var rgbRes = {
    color: "",
    result: ""
};
export var hex_to_rgba = function (hex, alpha) {
    if (rgbRes.color === hex)
        return rgbRes.result;
    if (!isValidHex(hex)) {
        return hex;
    }
    var chunkSize = Math.floor((hex.length - 1) / 3);
    var hexArr = getChunksFromString(hex.slice(1), chunkSize);
    var _a = hexArr.map(convertHexUnitTo256), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(getAlphaFloat(a, alpha), ")");
};
var shadeRes = {
    color: "",
    alpha: 0,
    result: ""
};
export var rgba_linear_shade = function (p, hex, opacity) {
    if (!isValidHex(hex))
        return hex;
    var rgba = hex_to_rgba(hex, opacity);
    if (shadeRes.color === rgba && shadeRes.alpha === p)
        return shadeRes.result;
    var i = parseInt, r = Math.round, P = p < 0, t = P ? 0 : 255 * p, _a = rgba.split(","), a = _a[0], b = _a[1], c = _a[2], d = _a[3];
    P = P ? 1 + p : 1 - p;
    return ("rgb" +
        (d ? "a(" : "(") +
        r(i(a[3] === "a" ? a.slice(5) : a.slice(4)) * P + t) +
        "," +
        r(i(b) * P + t) +
        "," +
        r(i(c) * P + t) +
        (d ? "," + d : ")"));
};
