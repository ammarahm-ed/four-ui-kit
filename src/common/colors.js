const isValidHex = (hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

const getChunksFromString = (st, chunkSize) =>
  st.match(new RegExp(`.{${chunkSize}}`, "g"));

const convertHexUnitTo256 = (hexStr) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);

const getAlphaFloat = (a, alpha) => {
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

const rgbRes = {
  color: "",
  result: "",
};

export const hex_to_rgba = (hex, alpha) => {
  if (rgbRes.color === hex) return rgbRes.result;

  if (!isValidHex(hex)) {
    return hex;
  }

  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);

  return `rgba(${r}, ${g}, ${b}, ${getAlphaFloat(a, alpha)})`;
};

const shadeRes = {
  color: "",
  alpha: 0,
  result: "",
};

export const rgba_linear_shade = (p, hex, opacity) => {
  if (!isValidHex(hex)) return hex;
  let rgba = hex_to_rgba(hex, opacity);

  if (shadeRes.color === rgba && shadeRes.alpha === p) return shadeRes.result;

  let i = parseInt,
    r = Math.round,
    P = p < 0,
    t = P ? 0 : 255 * p,
    [a, b, c, d] = rgba.split(",");
  P = P ? 1 + p : 1 - p;

  return (
    "rgb" +
    (d ? "a(" : "(") +
    r(i(a[3] === "a" ? a.slice(5) : a.slice(4)) * P + t) +
    "," +
    r(i(b) * P + t) +
    "," +
    r(i(c) * P + t) +
    (d ? "," + d : ")")
  );
};
