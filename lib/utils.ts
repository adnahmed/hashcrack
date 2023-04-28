import { scaleThreshold } from "d3-scale";

// Useful for Testing of Lazy Loading
// Add a fixed delay so you can see the loading state
export function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

/* palette generation utility */
/* Source: http://www.vis4.net/palettes/#/9|s|7bcffc,ff4299,ffffe0|ffffe0,ff005e,93003a|1|1 */
function palette(min: number, max: number) {
  const d = (max - min) / 9;
  return scaleThreshold<number, string>()
    .range([
      "#7bcffc",
      "#febac5",
      "#ffc4c9",
      "#ffcecc",
      "#ffd8d0",
      "#ffe2d4",
      "#ffecd8",
      "#fff5dc",
      "#ffffe0",
    ])
    .domain([
      min + d * 1,
      min + d * 2,
      min + d * 3,
      min + d * 4,
      min + d * 5,
      min + d * 6,
      min + d * 7,
      min + d * 8,
    ]);
}
