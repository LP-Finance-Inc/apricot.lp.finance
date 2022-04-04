export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

const isNumber = (value) => {
  const check = Number.isInteger(value);

  if (check) {
    return value;
  } else {
    value = value.toString();
    value = value.slice(0, value.indexOf(".") + 3);
    return Number(value);
  }
};

export const calc = (num) => {
  if (num !== undefined) {
    const calVolumn = isNumber(num);
    return calVolumn;
  } else {
    return 0;
  }
};

export const CalcOneDigit = (num) => {
  if (num !== undefined) {
    num = num.toString();
    num = num.slice(0, num.indexOf(".") + 2);
    return Number(num);
  } else {
    return 0;
  }
};

export const CalcTwoDigit = (num) => {
  if (num !== undefined) {
    num = num.toString();
    num = num.slice(0, num.indexOf(".") + 3);
    return Number(num);
  } else {
    return 0;
  }
};

export const numFormatter = (num) => {
  if (num !== undefined) {
    if (num >= 1000 && num < 1000000) {
      return isNumber(num / 1000) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num >= 1000000 && num < 1000000000) {
      return isNumber(num / 1000000) + "M"; // convert to M for number from > 1 million
    } else if (num >= 1000000000) {
      return isNumber(num / 1000000000) + "B";
    } else if (num < 1000) {
      return isNumber(num); // if value < 1000, nothing to do
    }
  } else {
    return 0;
  }
};
