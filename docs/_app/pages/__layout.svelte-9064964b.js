import { __vitePreload } from "../chunks/preload-helper-c37781a6.js";
import { getContext, SvelteComponent, init, safe_not_equal, svg_element, text, claim_svg_element, children, claim_text, detach, set_style, attr, insert_hydration, append_hydration, set_data, destroy_each, element, claim_element, noop, onMount, group_outros, transition_out, check_outros, transition_in, src_url_equal, create_component, claim_component, mount_component, destroy_component, empty, space, claim_space, toggle_class, listen, is_function, add_render_callback, create_bidirectional_transition, component_subscribe, subscribe, query_selector_all, create_slot, update_slot_base, get_all_dirty_from_scope, get_slot_changes } from "../chunks/index-4df20881.js";
import { fade } from "../chunks/index-fc89d724.js";
import { IconCloud, DragOverlay } from "../chunks/DragOverlay-08e56bd7.js";
import { reactive } from "../chunks/utils-d62053b9.js";
import "../chunks/index-5327d83b.js";
var style = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_if_block$3(ctx) {
  let svg;
  let title;
  let t;
  let g;
  let svg_viewBox_value;
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      svg = svg_element("svg");
      title = svg_element("title");
      t = text(ctx[0]);
      g = svg_element("g");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", { xmlns: true, viewBox: true, style: true });
      var svg_nodes = children(svg);
      title = claim_svg_element(svg_nodes, "title", {});
      var title_nodes = children(title);
      t = claim_text(title_nodes, ctx[0]);
      title_nodes.forEach(detach);
      g = claim_svg_element(svg_nodes, "g", { style: true, "stroke-linejoin": true });
      var g_nodes = children(g);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(g_nodes);
      }
      g_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(g, "fill", "currentColor");
      set_style(g, "stroke", "currentColor");
      set_style(g, "strokeWidth", ctx[2]);
      attr(g, "stroke-linejoin", "round");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", svg_viewBox_value = `0 0 ${ctx[1] + ctx[2] * 2} ${ctx[1] + ctx[2] * 2}`);
      attr(svg, "style", ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, title);
      append_hydration(title, t);
      append_hydration(svg, g);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(g, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
      if (dirty & 8) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(g, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 4) {
        set_style(g, "strokeWidth", ctx2[2]);
      }
      if (dirty & 6 && svg_viewBox_value !== (svg_viewBox_value = `0 0 ${ctx2[1] + ctx2[2] * 2} ${ctx2[1] + ctx2[2] * 2}`)) {
        attr(svg, "viewBox", svg_viewBox_value);
      }
      if (dirty & 16) {
        attr(svg, "style", ctx2[4]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block$1(ctx) {
  let rect;
  let rect_x_value;
  let rect_y_value;
  let rect_width_value;
  let rect_height_value;
  return {
    c() {
      rect = svg_element("rect");
      this.h();
    },
    l(nodes) {
      rect = claim_svg_element(nodes, "rect", {
        x: true,
        y: true,
        width: true,
        height: true
      });
      children(rect).forEach(detach);
      this.h();
    },
    h() {
      attr(rect, "x", rect_x_value = ctx[8].x);
      attr(rect, "y", rect_y_value = ctx[8].y);
      attr(rect, "width", rect_width_value = ctx[8].w);
      attr(rect, "height", rect_height_value = ctx[8].h);
    },
    m(target, anchor) {
      insert_hydration(target, rect, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 8 && rect_x_value !== (rect_x_value = ctx2[8].x)) {
        attr(rect, "x", rect_x_value);
      }
      if (dirty & 8 && rect_y_value !== (rect_y_value = ctx2[8].y)) {
        attr(rect, "y", rect_y_value);
      }
      if (dirty & 8 && rect_width_value !== (rect_width_value = ctx2[8].w)) {
        attr(rect, "width", rect_width_value);
      }
      if (dirty & 8 && rect_height_value !== (rect_height_value = ctx2[8].h)) {
        attr(rect, "height", rect_height_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(rect);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let if_block = ctx[1] && ctx[2] && ctx[4] && ctx[3] && create_if_block$3(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1] && ctx2[2] && ctx2[4] && ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let Utils;
  onMount(async () => {
    ({ Utils } = await __vitePreload(() => import("../chunks/index-7a951cd6.js"), true ? [] : void 0));
  });
  let { address } = $$props;
  let { alt = "Wallet Icon" } = $$props;
  let size, stroke, rects, style2;
  async function setup(address2) {
    const size2 = 5;
    const cell = size2 / 5;
    const stroke2 = size2 * 0.04;
    const addressHash = await Utils.addressToHash(address2);
    const style3 = `color: rgb(${Utils.addressHashToColor(addressHash).join(",")})`;
    const rects2 = () => {
      const result = [];
      if (!addressHash) {
        return result;
      }
      for (let i = 0; i < 15; i++) {
        if (parseInt(addressHash.charAt(i), 16) % 2) {
          continue;
        }
        if (i < 5) {
          result.push({
            x: 2 * cell + stroke2,
            y: i * cell + stroke2,
            w: cell,
            h: cell
          });
        } else if (i < 10) {
          result.push({
            x: 1 * cell + stroke2,
            y: (i - 5) * cell + stroke2,
            w: cell,
            h: cell
          });
          result.push({
            x: 3 * cell + stroke2,
            y: (i - 5) * cell + stroke2,
            w: cell,
            h: cell
          });
        } else if (i < 15) {
          result.push({
            x: 0 * cell + stroke2,
            y: (i - 10) * cell + stroke2,
            w: cell,
            h: cell
          });
          result.push({
            x: 4 * cell + stroke2,
            y: (i - 10) * cell + stroke2,
            w: cell,
            h: cell
          });
        }
      }
      return result;
    };
    return { size: size2, stroke: stroke2, rects: rects2, style: style3 };
  }
  (async () => {
    const promise = await setup(address)($$invalidate(1, { size, stroke, rects, style: style2 } = promise, size, $$invalidate(2, stroke), $$invalidate(3, rects), $$invalidate(4, style2)));
  })();
  $$self.$$set = ($$props2) => {
    if ("address" in $$props2)
      $$invalidate(5, address = $$props2.address);
    if ("alt" in $$props2)
      $$invalidate(0, alt = $$props2.alt);
  };
  return [alt, size, stroke, rects, style2, address];
}
class Identicon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { address: 5, alt: 0 });
  }
}
var AddressIcon_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = IconCloud))
        attr(img, "src", img_src_value);
      attr(img, "class", "identicon cloud svelte-13il2li");
      attr(img, "alt", "bookmark");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let identicon;
  let current;
  identicon = new Identicon({
    props: {
      address: ctx[0],
      alt: "wallet logo"
    }
  });
  return {
    c() {
      div = element("div");
      create_component(identicon.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { name: true, class: true });
      var div_nodes = children(div);
      claim_component(identicon.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "name", "fade-fast");
      attr(div, "class", "identicon svelte-13il2li");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(identicon, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const identicon_changes = {};
      if (dirty & 1)
        identicon_changes.address = ctx2[0];
      identicon.$set(identicon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(identicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(identicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(identicon);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1] && ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "address-icon no-select svelte-13il2li");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
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
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { address } = $$props;
  const isValid = !!address && (address == null ? void 0 : address.match(/^[a-z0-9_-]{43}$/i)) || false;
  $$self.$$set = ($$props2) => {
    if ("address" in $$props2)
      $$invalidate(0, address = $$props2.address);
  };
  return [address, isValid];
}
class AddressIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { address: 0 });
  }
}
var IconConnection = "/iframe-wallet-sveltekit/_app/assets/connection-d7433066.svg";
var IconAddBox = "/iframe-wallet-sveltekit/_app/assets/add_box-273f628a.svg";
var IconSettings = "/iframe-wallet-sveltekit/_app/assets/settings-dbcf810b.svg";
var logo = "/iframe-wallet-sveltekit/_app/assets/p-036ad820.svg";
const ArweaveStore = reactive({
  gatewayURL: null,
  wallets: {},
  txs: {},
  uploads: {}
});
var Toolbar_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  child_ctx[16] = i;
  return child_ctx;
}
function create_if_block_2(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[8];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 871) {
        each_value = ctx2[8];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(ctx) {
  let a;
  let button;
  let div;
  let addressicon;
  let t;
  let a_href_value;
  let current;
  let mounted;
  let dispose;
  addressicon = new AddressIcon({
    props: { address: ctx[14].key }
  });
  return {
    c() {
      a = element("a");
      button = element("button");
      div = element("div");
      create_component(addressicon.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      button = claim_element(a_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      div = claim_element(button_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(addressicon.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      button_nodes.forEach(detach);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "profile svelte-1m4dvx3");
      attr(button, "type", "button");
      attr(button, "class", "icon wallet svelte-1m4dvx3");
      toggle_class(button, "verticalLayout", ctx[1]);
      toggle_class(button, "router-link-active", ctx[14].id == ctx[6] && ctx[0]);
      toggle_class(button, "accent", !ctx[0]);
      toggle_class(button, "active", ctx[14].id == ctx[6] && ctx[0]);
      attr(a, "href", a_href_value = "./" + ctx[9] + "/" + ctx[14].id + "/" + ctx[2].url.search);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, button);
      append_hydration(button, div);
      mount_component(addressicon, div, null);
      append_hydration(a, t);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(ctx[5](ctx[14])))
            ctx[5](ctx[14]).apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 2) {
        toggle_class(button, "verticalLayout", ctx[1]);
      }
      if (dirty & 321) {
        toggle_class(button, "router-link-active", ctx[14].id == ctx[6] && ctx[0]);
      }
      if (dirty & 1) {
        toggle_class(button, "accent", !ctx[0]);
      }
      if (dirty & 321) {
        toggle_class(button, "active", ctx[14].id == ctx[6] && ctx[0]);
      }
      if (!current || dirty & 4 && a_href_value !== (a_href_value = "./" + ctx[9] + "/" + ctx[14].id + "/" + ctx[2].url.search)) {
        attr(a, "href", a_href_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(addressicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(addressicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      destroy_component(addressicon);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$1(ctx) {
  var _a, _b;
  let div;
  let t0;
  let a0;
  let img0;
  let img0_src_value;
  let t1;
  let a1;
  let img1;
  let img1_src_value;
  let div_transition;
  let current;
  let if_block = ((_b = (_a = ctx[7]) == null ? void 0 : _a.connectors) == null ? void 0 : _b.length) && create_if_block_1$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      a0 = element("a");
      img0 = element("img");
      t1 = space();
      a1 = element("a");
      img1 = element("img");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t0 = claim_space(div_nodes);
      a0 = claim_element(div_nodes, "A", {
        href: true,
        class: true,
        "aria-label": true
      });
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", { src: true, class: true, alt: true });
      a0_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", {
        href: true,
        class: true,
        "aria-label": true
      });
      var a1_nodes = children(a1);
      img1 = claim_element(a1_nodes, "IMG", { src: true, class: true, alt: true });
      a1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = IconAddBox))
        attr(img0, "src", img0_src_value);
      attr(img0, "class", "small svelte-1m4dvx3");
      attr(img0, "alt", "Add Wallet");
      attr(a0, "href", "./add");
      attr(a0, "class", "icon control svelte-1m4dvx3");
      attr(a0, "aria-label", "Add Wallet");
      toggle_class(a0, "verticalLayout", ctx[1]);
      if (!src_url_equal(img1.src, img1_src_value = IconSettings))
        attr(img1, "src", img1_src_value);
      attr(img1, "class", "small svelte-1m4dvx3");
      attr(img1, "alt", "Settings");
      attr(a1, "href", "./settings");
      attr(a1, "class", "icon control svelte-1m4dvx3");
      attr(a1, "aria-label", "Settings");
      toggle_class(a1, "verticalLayout", ctx[1]);
      attr(div, "class", "controls svelte-1m4dvx3");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_hydration(div, t0);
      append_hydration(div, a0);
      append_hydration(a0, img0);
      append_hydration(div, t1);
      append_hydration(div, a1);
      append_hydration(a1, img1);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2, _b2;
      if ((_b2 = (_a2 = ctx2[7]) == null ? void 0 : _a2.connectors) == null ? void 0 : _b2.length)
        if_block.p(ctx2, dirty);
      if (dirty & 2) {
        toggle_class(a0, "verticalLayout", ctx2[1]);
      }
      if (dirty & 2) {
        toggle_class(a1, "verticalLayout", ctx2[1]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fade, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_if_block_1$1(ctx) {
  let div;
  let a;
  let img;
  let img_src_value;
  let div_transition;
  let current;
  return {
    c() {
      div = element("div");
      a = element("a");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { name: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        href: true,
        class: true,
        "aria-label": true
      });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = IconConnection))
        attr(img, "src", img_src_value);
      attr(img, "class", "small svelte-1m4dvx3");
      attr(img, "alt", "Connections");
      attr(a, "href", "./connect");
      attr(a, "class", "icon control svelte-1m4dvx3");
      attr(a, "aria-label", "Add Wallet");
      toggle_class(a, "verticalLayout", ctx[1]);
      attr(div, "name", "fade-fast");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, img);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 2) {
        toggle_class(a, "verticalLayout", ctx2[1]);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fade, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_fragment$1(ctx) {
  var _a;
  let nav;
  let div0;
  let a;
  let img;
  let img_src_value;
  let t0;
  let div1;
  let t1;
  let t2;
  let dragoverlay;
  let current;
  let if_block0 = ((_a = ctx[8]) == null ? void 0 : _a.length) > 0 && create_if_block_2(ctx);
  let if_block1 = ctx[0] && create_if_block$1(ctx);
  dragoverlay = new DragOverlay({});
  return {
    c() {
      nav = element("nav");
      div0 = element("div");
      a = element("a");
      img = element("img");
      t0 = space();
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      create_component(dragoverlay.$$.fragment);
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true, id: true });
      var nav_nodes = children(nav);
      div0 = claim_element(nav_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t0 = claim_space(nav_nodes);
      div1 = claim_element(nav_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      div1_nodes.forEach(detach);
      t1 = claim_space(nav_nodes);
      if (if_block1)
        if_block1.l(nav_nodes);
      t2 = claim_space(nav_nodes);
      claim_component(dragoverlay.$$.fragment, nav_nodes);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = logo))
        attr(img, "src", img_src_value);
      attr(img, "class", "shadow svelte-1m4dvx3");
      attr(img, "alt", "PeerPiper Home");
      attr(a, "href", "./");
      attr(div0, "class", "icon controls svelte-1m4dvx3");
      attr(div1, "class", "wallets svelte-1m4dvx3");
      attr(nav, "class", "toolbar box no-scrollbar svelte-1m4dvx3");
      attr(nav, "id", "nav");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, div0);
      append_hydration(div0, a);
      append_hydration(a, img);
      append_hydration(nav, t0);
      append_hydration(nav, div1);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(nav, t1);
      if (if_block1)
        if_block1.m(nav, null);
      append_hydration(nav, t2);
      mount_component(dragoverlay, nav, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2;
      if (((_a2 = ctx2[8]) == null ? void 0 : _a2.length) > 0)
        if_block0.p(ctx2, dirty);
      if (ctx2[0]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(nav, t2);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(dragoverlay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(dragoverlay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(nav);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_component(dragoverlay);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let selected;
  let $verticalLayout, $$unsubscribe_verticalLayout = noop, $$subscribe_verticalLayout = () => ($$unsubscribe_verticalLayout(), $$unsubscribe_verticalLayout = subscribe(verticalLayout, ($$value) => $$invalidate(1, $verticalLayout = $$value)), verticalLayout);
  let $interfaceStore, $$unsubscribe_interfaceStore = noop, $$subscribe_interfaceStore = () => ($$unsubscribe_interfaceStore(), $$unsubscribe_interfaceStore = subscribe(interfaceStore, ($$value) => $$invalidate(10, $interfaceStore = $$value)), interfaceStore);
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(2, $page = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_verticalLayout());
  $$self.$$.on_destroy.push(() => $$unsubscribe_interfaceStore());
  let Connect, Wallets;
  let verticalLayout, interfaceStore, emitter, select;
  onMount(async () => {
    $$subscribe_verticalLayout($$invalidate(3, { verticalLayout, interfaceStore, emitter } = await __vitePreload(() => import("../chunks/InterfaceStore-5914e925.js"), true ? ["chunks/InterfaceStore-5914e925.js","chunks/utils-d62053b9.js","chunks/index-5327d83b.js","chunks/index-4df20881.js"] : void 0), verticalLayout, $$subscribe_interfaceStore($$invalidate(4, interfaceStore))));
    $$invalidate(5, select = (wallet, navigate) => {
      emitter.emit("selectWallet", wallet == null ? void 0 : wallet.key);
      if (links) {
        return navigate();
      }
    });
  });
  let links;
  const navTo = $page.url.pathname === "wallet" ? "wallet" : "tx-list";
  $$self.$$.update = () => {
    var _a, _b;
    if ($$self.$$.dirty & 1024) {
      if ((_a = $interfaceStore == null ? void 0 : $interfaceStore.toolbar) == null ? void 0 : _a.links)
        $$invalidate(0, links = $interfaceStore.toolbar.links);
    }
    if ($$self.$$.dirty & 5) {
      $$invalidate(6, selected = links ? $page.params.walletId : (_b = ArweaveStore.currentWallet) == null ? void 0 : _b.id);
    }
    if ($$self.$$.dirty & 2)
      ;
  };
  return [
    links,
    $verticalLayout,
    $page,
    verticalLayout,
    interfaceStore,
    select,
    selected,
    Connect,
    Wallets,
    navTo,
    $interfaceStore
  ];
}
class Toolbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
var __layout_svelte_svelte_type_style_lang = "";
function create_if_block_1(ctx) {
  let toolbar;
  let current;
  toolbar = new Toolbar({});
  return {
    c() {
      create_component(toolbar.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbar, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbar, detaching);
    }
  };
}
function create_else_block(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading...");
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
function create_if_block(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "router svelte-tf8yjw");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let div;
  let t1;
  let current_block_type_index;
  let if_block1;
  let current;
  let if_block0 = ctx[1] && create_if_block_1();
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      t0 = space();
      div = element("div");
      if (if_block0)
        if_block0.c();
      t1 = space();
      if_block1.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-1c2thki"]', document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t1 = claim_space(div_nodes);
      if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "PeerPiper Web3 Wallet";
      attr(div, "class", "app svelte-tf8yjw");
      toggle_class(div, "verticalLayout", ctx[4]);
      toggle_class(div, "verticalContent", ctx[5]);
      toggle_class(div, "hasToolbar", ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t1);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block0) {
          if (dirty & 2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1();
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div, null);
      }
      if (dirty & 16) {
        toggle_class(div, "verticalLayout", ctx2[4]);
      }
      if (dirty & 32) {
        toggle_class(div, "verticalContent", ctx2[5]);
      }
      if (dirty & 2) {
        toggle_class(div, "hasToolbar", ctx2[1]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $verticalLayout, $$unsubscribe_verticalLayout = noop, $$subscribe_verticalLayout = () => ($$unsubscribe_verticalLayout(), $$unsubscribe_verticalLayout = subscribe(verticalLayout, ($$value) => $$invalidate(4, $verticalLayout = $$value)), verticalLayout);
  let $verticalContent, $$unsubscribe_verticalContent = noop, $$subscribe_verticalContent = () => ($$unsubscribe_verticalContent(), $$unsubscribe_verticalContent = subscribe(verticalContent, ($$value) => $$invalidate(5, $verticalContent = $$value)), verticalContent);
  $$self.$$.on_destroy.push(() => $$unsubscribe_verticalLayout());
  $$self.$$.on_destroy.push(() => $$unsubscribe_verticalContent());
  let { $$slots: slots = {}, $$scope } = $$props;
  let mounted;
  let hasToolbar;
  let verticalLayout, verticalContent;
  onMount(async () => {
    $$subscribe_verticalLayout($$invalidate(2, { verticalLayout, verticalContent } = await __vitePreload(() => import("../chunks/InterfaceStore-5914e925.js"), true ? ["chunks/InterfaceStore-5914e925.js","chunks/utils-d62053b9.js","chunks/index-5327d83b.js","chunks/index-4df20881.js"] : void 0), verticalLayout, $$subscribe_verticalContent($$invalidate(3, verticalContent))));
    $$invalidate(0, mounted = true);
  });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (mounted)
        $$invalidate(1, hasToolbar = window == window.top);
    }
  };
  return [
    mounted,
    hasToolbar,
    verticalLayout,
    verticalContent,
    $verticalLayout,
    $verticalContent,
    $$scope,
    slots
  ];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
//# sourceMappingURL=__layout.svelte-9064964b.js.map
