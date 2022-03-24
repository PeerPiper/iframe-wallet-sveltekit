import { __vitePreload } from "./preload-helper-c37781a6.js";
import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, attr, insert_hydration, append_hydration, add_render_callback, create_bidirectional_transition, fade, empty, transition_in, group_outros, transition_out, check_outros, onMount, subscribe, noop } from "./vendor-19fdf801.js";
var IconCloud = "/iframe-wallet-sveltekit/_app/assets/cloud-5b13ee2b.svg";
var DragOverlay_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let div1;
  let div0;
  let div1_transition;
  let current;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "dragOverlay svelte-nf4x1h");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      current = true;
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(div1, fade, {}, true);
        div1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(div1, fade, {}, false);
      div1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (detaching && div1_transition)
        div1_transition.end();
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[1] && ctx[2] && create_if_block();
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1] && ctx2[2]) {
        if (if_block) {
          if (dirty & 6) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $dragOverlay, $$unsubscribe_dragOverlay = noop, $$subscribe_dragOverlay = () => ($$unsubscribe_dragOverlay(), $$unsubscribe_dragOverlay = subscribe(dragOverlay, ($$value) => $$invalidate(2, $dragOverlay = $$value)), dragOverlay);
  $$self.$$.on_destroy.push(() => $$unsubscribe_dragOverlay());
  let dragOverlay;
  let mounted;
  onMount(async () => {
    $$subscribe_dragOverlay($$invalidate(0, { dragOverlay } = await __vitePreload(() => import("./InterfaceStore-f27ee5ef.js"), true ? ["chunks/InterfaceStore-f27ee5ef.js","chunks/utils-66a08721.js","chunks/vendor-19fdf801.js"] : void 0), dragOverlay));
    $$invalidate(1, mounted = true);
  });
  return [dragOverlay, mounted, $dragOverlay];
}
class DragOverlay extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { DragOverlay, IconCloud };
//# sourceMappingURL=DragOverlay-75396dd8.js.map
