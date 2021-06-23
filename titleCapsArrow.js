var str = "a b c d e f";

console.log(
  str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(" ")
);
