export const truncateText = (value, size) => {
  if (
    value === undefined ||
    value === "undefined" ||
    value === "" ||
    size === undefined ||
    size === "undefined" ||
    size === ""
  ) {
    return value;
  }

  let shortText = value;
  if (value.length >= size + 3) {
    shortText = value.substring(0, size).concat("...");
  }
  return shortText;
};
