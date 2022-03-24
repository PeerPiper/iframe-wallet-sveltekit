var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { writable, derived } from "./vendor-19fdf801.js";
function reactive(initial) {
  const store = writable(initial);
  const callback = (s) => {
    return __spreadProps(__spreadValues({
      keys: Object.keys(s),
      values: Object.values(s),
      entries: Object.entries(s),
      set(k, v) {
        if (k.split(".").length > 1) {
          let spl = k.split(".");
          k = spl.shift();
          const reducer = (prev, curr) => ({ [curr]: prev });
          v = spl.reverse().reduce(reducer, v);
          v = __spreadValues(__spreadValues({}, s[k]), v);
        }
        store.update((s2) => Object.assign({}, s2, { [k]: v }));
      }
    }, s), {
      remove(k) {
        store.update((s2) => {
          delete s2[k];
          return s2;
        });
      }
    });
  };
  const results = derived(store, callback);
  return {
    subscribe: results.subscribe,
    set: store.set
  };
}
export { reactive };
//# sourceMappingURL=utils-66a08721.js.map
