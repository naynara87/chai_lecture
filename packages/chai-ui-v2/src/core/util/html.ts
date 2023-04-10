export function getElementHeight(node: Element) {
  const list = [
    "margin-top",
    "margin-bottom",
    "border-top",
    "border-bottom",
    "padding-top",
    "padding-bottom",
    "height",
  ];

  const style = window.getComputedStyle(node);
  return list
    .map((k) => parseInt(style.getPropertyValue(k), 10))
    .reduce((prev, cur) => prev + cur);
}
