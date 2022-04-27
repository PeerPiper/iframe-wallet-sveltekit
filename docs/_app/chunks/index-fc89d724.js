import { identity } from "./index-4df20881.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
export { fade };
//# sourceMappingURL=index-fc89d724.js.map
