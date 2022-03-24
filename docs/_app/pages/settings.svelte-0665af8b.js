import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, noop, detach } from "../chunks/vendor-19fdf801.js";
function create_fragment(ctx) {
  let t;
  return {
    c() {
      t = text("Settings");
    },
    l(nodes) {
      t = claim_text(nodes, "Settings");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
class Settings extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export { Settings as default };
//# sourceMappingURL=settings.svelte-0665af8b.js.map
