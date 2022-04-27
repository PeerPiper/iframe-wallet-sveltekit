import { reactive } from "./utils-d62053b9.js";
import { derived } from "./index-5327d83b.js";
import { get_store_value } from "./index-4df20881.js";
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
var peerpiper = "/iframe-wallet-sveltekit/_app/assets/p-036ad820.svg";
const interfaceStore = reactive({
  windowWidth: window == null ? void 0 : window.innerWidth,
  windowVisible: !document.hidden,
  toolbar: {
    enabled: true,
    links: true
  },
  breakpoints: {
    verticalLayout: (window == null ? void 0 : window.innerWidth) < 600,
    verticalContent: (window == null ? void 0 : window.innerWidth) < 1100
  },
  sticky: false,
  dragOverlay: false,
  wallet: {
    send: {
      target: "",
      quantity: "",
      data: "",
      tags: []
    }
  }
});
const verticalLayout = derived(interfaceStore, ($interfaceStore) => $interfaceStore.breakpoints.verticalLayout);
const verticalContent = derived(interfaceStore, ($interfaceStore) => $interfaceStore.breakpoints.verticalContent);
const dragOverlay = derived(interfaceStore, ($interfaceStore) => $interfaceStore.dragOverlay);
const emitter = mitt();
emitter.once = (eventName, handler) => {
  return new Promise((resolve) => {
    const wrapper = (e) => {
      emitter.off(eventName, wrapper);
      resolve(e);
      if (handler) {
        handler(e);
      }
    };
    emitter.on(eventName, wrapper);
  });
};
function updateWindowSize() {
  get_store_value(interfaceStore).set("windowWidth", window == null ? void 0 : window.innerWidth);
  get_store_value(interfaceStore).set("breakpoints.verticalLayout", (window == null ? void 0 : window.innerWidth) < 600);
  get_store_value(interfaceStore).set("breakpoints.verticalContent", (window == null ? void 0 : window.innerWidth) < 1100);
}
updateWindowSize();
window == null ? void 0 : window.addEventListener("resize", updateWindowSize);
document.addEventListener("visibilitychange", () => get_store_value(interfaceStore).set("windowVisible", !document.hidden));
let dragCount = 0;
document.addEventListener("dragenter", (e) => {
  e.preventDefault();
  if (e.dataTransfer.types[0] == "Files") {
    get_store_value(interfaceStore).set("dragOverlay", !!++dragCount);
  }
}, true);
document.addEventListener("dragleave", (e) => {
  e.preventDefault();
  if (e.dataTransfer.types[0] == "Files") {
    get_store_value(interfaceStore).set("dragOverlay", !!--dragCount);
  }
}, true);
document.addEventListener("dragend", (e) => {
  e.preventDefault();
  dragCount = 0;
  get_store_value(interfaceStore).set("dragOverlay", false);
}, true);
document.addEventListener("dragover", (e) => {
  e.preventDefault();
}, true);
document.addEventListener("drop", (e) => {
  e.preventDefault();
  dragCount = 0;
  get_store_value(interfaceStore).set("dragOverlay", false);
}, true);
if (navigator.appVersion.indexOf("Win") != -1) {
  document.documentElement.classList.add("styleScroll");
}
const faviconEl = document.createElement("link");
faviconEl.setAttribute("rel", "favicon icon");
const setFavicon = (e) => {
  faviconEl.remove();
  if (e.matches) {
    faviconEl.setAttribute("href", peerpiper);
  } else {
    faviconEl.setAttribute("href", peerpiper);
  }
  document.head.appendChild(faviconEl);
};
if (window == null ? void 0 : window.matchMedia) {
  const matchTheme = window == null ? void 0 : window.matchMedia("(prefers-color-scheme: light)");
  matchTheme.addEventListener("change", setFavicon);
  setFavicon(matchTheme);
} else {
  setFavicon({ matches: false });
}
export { dragOverlay, emitter, interfaceStore, verticalContent, verticalLayout };
//# sourceMappingURL=InterfaceStore-5914e925.js.map
