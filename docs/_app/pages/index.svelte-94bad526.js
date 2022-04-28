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
import { __vitePreload } from "../chunks/preload-helper-c37781a6.js";
import { SvelteComponent, init, safe_not_equal, empty, insert_hydration, group_outros, transition_out, check_outros, transition_in, detach, element, claim_element, children, attr, listen, is_function, component_subscribe, onMount, set_store_value, globals, text, claim_text, append_hydration, prevent_default, set_data, noop, create_slot, update_slot_base, get_all_dirty_from_scope, get_slot_changes, space, claim_space, binding_callbacks, svg_element, claim_svg_element, add_render_callback, create_in_transition, create_out_transition, create_component, claim_component, mount_component, destroy_component, destroy_each, createEventDispatcher, HtmlTagHydration, claim_html_tag, set_style, add_resize_listener, run_all, bubble, null_to_empty } from "../chunks/index-4df20881.js";
import { CONSTANTS, internals as index, handlers } from "../chunks/index-7a951cd6.js";
import { writable } from "../chunks/index-5327d83b.js";
import { fade } from "../chunks/index-fc89d724.js";
const storedValue = writable();
var Connector_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block$8(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$2, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[4])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
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
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block$3(ctx) {
  let div;
  let button;
  let t_value = ctx[3] ? "Authorize from Main Wallet Window" : "Connect";
  let t;
  let button_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, t_value);
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      button.disabled = ctx[3];
      attr(button, "class", button_class_value = ctx[3] ? "yellow" : "ready");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", prevent_default(function() {
          if (is_function(ctx[1]))
            ctx[1].apply(this, arguments);
        }));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 8 && t_value !== (t_value = ctx[3] ? "Authorize from Main Wallet Window" : "Connect"))
        set_data(t, t_value);
      if (dirty & 8) {
        button.disabled = ctx[3];
      }
      if (dirty & 8 && button_class_value !== (button_class_value = ctx[3] ? "yellow" : "ready")) {
        attr(button, "class", button_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$2(ctx) {
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$d(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$8(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "connector svelte-1p2rrhv");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
      if (!mounted) {
        dispose = listen(window_1, "message", function() {
          if (is_function(ctx[2]))
            ctx[2].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$8(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
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
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let $storedValue;
  component_subscribe($$self, storedValue, ($$value) => $$invalidate(4, $storedValue = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { mounted } = $$props;
  let openTwinWindow;
  let handleMessage;
  let connecting;
  let openedWindow;
  let topUrl;
  onMount(async () => {
    topUrl = self === top ? document.URL : document.referrer;
    $$invalidate(1, openTwinWindow = () => {
      $$invalidate(3, connecting = true);
      openedWindow = window.open(window.location.href, "_blank");
    });
    $$invalidate(2, handleMessage = async (event) => {
      if (event.data == CONSTANTS.OPENED_SIGNAL) {
        event.ports[0].postMessage(topUrl);
        return;
      }
      if (event.data.key == CONSTANTS.WINDOW_SYNC) {
        console.log("Sync received ");
        set_store_value(storedValue, $storedValue = event.data.storedValue, $storedValue);
        event.ports[0].postMessage("Imported");
        $$invalidate(3, connecting = false);
        openedWindow.close();
        window.focus();
      }
      if (event.data == CONSTANTS.CLOSING) {
        $$invalidate(3, connecting = false);
      }
    });
  });
  $$self.$$set = ($$props2) => {
    if ("mounted" in $$props2)
      $$invalidate(0, mounted = $$props2.mounted);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [
    mounted,
    openTwinWindow,
    handleMessage,
    connecting,
    $storedValue,
    $$scope,
    slots
  ];
}
class Connector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { mounted: 0 });
  }
}
const shorten = (key, start = 6, end = 6) => {
  if (key.length < start + end + 3)
    return key;
  return key.slice(0, start) + "..." + key.slice(key.length - end, key.length);
};
var Clipboard_svelte_svelte_type_style_lang = "";
const get_default_slot_changes$2 = (dirty) => ({});
const get_default_slot_context$2 = (ctx) => ({ copy: ctx[2] });
function create_else_block$2(ctx) {
  let div;
  let svg;
  let title;
  let t;
  let path;
  let div_intro;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      title = svg_element("title");
      t = text("Copy to clipboard");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", {
        class: true,
        viewBox: true,
        version: true,
        width: true,
        height: true,
        "aria-hidden": true
      });
      var svg_nodes = children(svg);
      title = claim_svg_element(svg_nodes, "title", {});
      var title_nodes = children(title);
      t = claim_text(title_nodes, "Copy to clipboard");
      title_nodes.forEach(detach);
      path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z");
      attr(svg, "class", "octicon octicon-clippy svelte-1viqyyk");
      attr(svg, "viewBox", "0 0 14 16");
      attr(svg, "version", "1.1");
      attr(svg, "width", "14");
      attr(svg, "height", "16");
      attr(svg, "aria-hidden", "true");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, title);
      append_hydration(title, t);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(svg, "click", ctx[2]);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, { duration: 0, delay: duration });
          div_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$7(ctx) {
  let div;
  let t;
  let div_outro;
  let current;
  return {
    c() {
      div = element("div");
      t = text("\u2714\uFE0FCopied");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, "\u2714\uFE0FCopied");
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
      current = true;
    },
    p(new_ctx, dirty) {
    },
    i(local) {
      if (current)
        return;
      if (div_outro)
        div_outro.end(1);
      current = true;
    },
    o(local) {
      div_outro = create_out_transition(div, fade, { duration });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_outro)
        div_outro.end();
    }
  };
}
function create_fragment$c(ctx) {
  let div1;
  let div0;
  let t;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], get_default_slot_context$2);
  const if_block_creators = [create_if_block$7, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      t = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "Clipboard svelte-1viqyyk");
      attr(div1, "class", "Clipboard-Container svelte-1viqyyk");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      ctx[6](div0);
      append_hydration(div1, t);
      if_blocks[current_block_type_index].m(div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(div1, "click", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, get_default_slot_changes$2), get_default_slot_context$2);
        }
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
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div1, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
      ctx[6](null);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }
  };
}
let duration = 2e3;
function instance$c($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { value = null } = $$props;
  let clip;
  let copied;
  async function copy() {
    var promise = navigator.clipboard.writeText(clip.innerHTML);
    await promise;
    $$invalidate(3, value = promise);
    $$invalidate(1, copied = true);
    setTimeout(() => $$invalidate(1, copied = false), 1);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      clip = $$value;
      $$invalidate(0, clip);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [clip, copied, copy, value, $$scope, slots, div0_binding];
}
class Clipboard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { value: 3 });
  }
}
var ListKeys_svelte_svelte_type_style_lang = "";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_if_block$6(ctx) {
  let div;
  let show_if_1 = ctx[0].filter(func_1).length;
  let t;
  let show_if = ctx[0].filter(func);
  let current;
  let if_block0 = show_if_1 && create_if_block_2$1(ctx);
  let if_block1 = show_if && create_if_block_1$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card svelte-1sckwml");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        show_if_1 = ctx2[0].filter(func_1).length;
      if (show_if_1) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (dirty & 1)
        show_if = ctx2[0].filter(func);
      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
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
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block_2$1(ctx) {
  let div2;
  let div0;
  let span;
  let t0;
  let t1;
  let div1;
  let ul;
  let current;
  let each_value_1 = ctx[0].filter(func_2);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      t0 = text("Arweave");
      t1 = space();
      div1 = element("div");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Arweave");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      ul = claim_element(div1_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "row left svelte-1sckwml");
      attr(ul, "class", "svelte-1sckwml");
      attr(div1, "class", "row list-group svelte-1sckwml");
      attr(div2, "class", "keylist svelte-1sckwml");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, span);
      append_hydration(span, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 7) {
        each_value_1 = ctx2[0].filter(func_2);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
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
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_3$1(ctx) {
  let t_value = ctx[6].publicKeyJWK.kid + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[6].publicKeyJWK.kid + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(ctx) {
  let li;
  let t0_value = ctx[6].name + "";
  let t0;
  let t1;
  let clipboard;
  let t2;
  let li_class_value;
  let current;
  clipboard = new Clipboard({
    props: {
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      create_component(clipboard.$$.fragment);
      t2 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_space(li_nodes);
      claim_component(clipboard.$$.fragment, li_nodes);
      t2 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", li_class_value = (ctx[2] && ctx[1] != ctx[6].kid ? "hide" : "") + " list-group-item list-group-item-action svelte-1sckwml");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      mount_component(clipboard, li, null);
      append_hydration(li, t2);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[6].name + ""))
        set_data(t0, t0_value);
      const clipboard_changes = {};
      if (dirty & 513) {
        clipboard_changes.$$scope = { dirty, ctx: ctx2 };
      }
      clipboard.$set(clipboard_changes);
      if (!current || dirty & 1 && li_class_value !== (li_class_value = (ctx2[2] && ctx2[1] != ctx2[6].kid ? "hide" : "") + " list-group-item list-group-item-action svelte-1sckwml")) {
        attr(li, "class", li_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(clipboard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(clipboard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(clipboard);
    }
  };
}
function create_if_block_1$1(ctx) {
  let div2;
  let div0;
  let span;
  let t0;
  let t1;
  let div1;
  let ul;
  let current;
  let each_value = ctx[0].filter(func_3);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      t0 = text("Ed25519");
      t1 = space();
      div1 = element("div");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Ed25519");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      ul = claim_element(div1_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "row left svelte-1sckwml");
      attr(ul, "class", "svelte-1sckwml");
      attr(div1, "class", "row list-group svelte-1sckwml");
      attr(div2, "class", "keylist svelte-1sckwml");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, span);
      append_hydration(span, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0].filter(func_3);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
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
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let t_value = ctx[3].publicKeyJWK.x + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[3].publicKeyJWK.x + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let t_value = ctx[3].publicKeyBase58 + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[3].publicKeyBase58 + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$2(ctx) {
  let t_value = ctx[3].publicKey + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[3].publicKey + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$2(ctx) {
  let li;
  let t0_value = shorten(ctx[3].name) + "";
  let t0;
  let t1;
  let div0;
  let clipboard0;
  let t2;
  let div1;
  let clipboard1;
  let t3;
  let div2;
  let clipboard2;
  let t4;
  let current;
  clipboard0 = new Clipboard({
    props: {
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  clipboard1 = new Clipboard({
    props: {
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  clipboard2 = new Clipboard({
    props: {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      div0 = element("div");
      create_component(clipboard0.$$.fragment);
      t2 = space();
      div1 = element("div");
      create_component(clipboard1.$$.fragment);
      t3 = space();
      div2 = element("div");
      create_component(clipboard2.$$.fragment);
      t4 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_space(li_nodes);
      div0 = claim_element(li_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(clipboard0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(li_nodes);
      div1 = claim_element(li_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(clipboard1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t3 = claim_space(li_nodes);
      div2 = claim_element(li_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(clipboard2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      li_nodes.forEach(detach);
      t4 = claim_space(nodes);
      this.h();
    },
    h() {
      attr(div0, "class", "full-pubKey svelte-1sckwml");
      attr(div1, "class", "full-pubKey svelte-1sckwml");
      attr(div2, "class", "full-pubKey svelte-1sckwml");
      attr(li, "class", "list-group-item list-group-item-action  svelte-1sckwml");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, div0);
      mount_component(clipboard0, div0, null);
      append_hydration(li, t2);
      append_hydration(li, div1);
      mount_component(clipboard1, div1, null);
      append_hydration(li, t3);
      append_hydration(li, div2);
      mount_component(clipboard2, div2, null);
      insert_hydration(target, t4, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = shorten(ctx2[3].name) + ""))
        set_data(t0, t0_value);
      const clipboard0_changes = {};
      if (dirty & 513) {
        clipboard0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      clipboard0.$set(clipboard0_changes);
      const clipboard1_changes = {};
      if (dirty & 513) {
        clipboard1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      clipboard1.$set(clipboard1_changes);
      const clipboard2_changes = {};
      if (dirty & 513) {
        clipboard2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      clipboard2.$set(clipboard2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(clipboard0.$$.fragment, local);
      transition_in(clipboard1.$$.fragment, local);
      transition_in(clipboard2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(clipboard0.$$.fragment, local);
      transition_out(clipboard1.$$.fragment, local);
      transition_out(clipboard2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(clipboard0);
      destroy_component(clipboard1);
      destroy_component(clipboard2);
      if (detaching)
        detach(t4);
    }
  };
}
function create_fragment$b(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && ctx[0].length > 0 && create_if_block$6(ctx);
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
      if (ctx2[0] && ctx2[0].length > 0) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$6(ctx2);
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
const func = (k) => k.publicKeyJWK.crv == "Ed25519";
const func_1 = (k) => k.publicKeyJWK.kty == "RSA";
const func_2 = (k) => k.publicKeyJWK.kty == "RSA";
const func_3 = (k) => k.publicKeyJWK.crv == "Ed25519";
function instance$b($$self, $$props, $$invalidate) {
  let { keys } = $$props;
  let selectedRSA;
  let collapsed;
  $$self.$$set = ($$props2) => {
    if ("keys" in $$props2)
      $$invalidate(0, keys = $$props2.keys);
  };
  return [keys, selectedRSA, collapsed];
}
class ListKeys extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { keys: 0 });
  }
}
var GetKeys_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let listkeys;
  let t;
  let current;
  listkeys = new ListKeys({ props: { keys: ctx[3] } });
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  return {
    c() {
      create_component(listkeys.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(listkeys.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(listkeys, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      const listkeys_changes = {};
      if (dirty & 8)
        listkeys_changes.keys = ctx2[3];
      listkeys.$set(listkeys_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(listkeys.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(listkeys.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(listkeys, detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$5(ctx) {
  let div;
  let t0;
  let button;
  let t1;
  let t2;
  let html_tag;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      t0 = text("No keypairs detected in this browser. Create or Import them:\r\n		");
      button = element("button");
      t1 = text("Create New Keypairs");
      t2 = space();
      html_tag = new HtmlTagHydration();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "No keypairs detected in this browser. Create or Import them:\r\n		");
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t1 = claim_text(button_nodes, "Create New Keypairs");
      button_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      html_tag = claim_html_tag(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "green");
      html_tag.a = null;
      attr(div, "class", "submit attention svelte-zdbzhg");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, button);
      append_hydration(button, t1);
      append_hydration(div, t2);
      html_tag.m(ctx[2], div);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(ctx[1]))
            ctx[1].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 4)
        html_tag.p(ctx[2]);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$a(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$5, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0] !== void 0 && ctx2[0] === null)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
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
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let $storedValue;
  component_subscribe($$self, storedValue, ($$value) => $$invalidate(0, $storedValue = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let handleGenerateKeypair;
  let creating = "";
  let keys;
  onMount(async () => {
    $$invalidate(1, handleGenerateKeypair = async () => {
      $$invalidate(2, creating = "Creating keypairs...");
      const mnemonic = await index.generateMnemonic();
      set_store_value(storedValue, $storedValue = __spreadProps(__spreadValues({}, $storedValue), { mnemonic }), $storedValue);
      $$invalidate(2, creating += "<br/>Created mnemonic.");
      $$invalidate(2, creating += `<br/>${mnemonic}`);
      $$invalidate(2, creating += "<br/>Creating master keypair (type ed25519)...");
    });
  });
  async function loadKeys() {
    await index.loadMnemonicInProxcryptor($storedValue.mnemonic);
    dispatch("loadedKeys", "details");
    $$invalidate(3, keys = getLoadedKeys());
  }
  function getLoadedKeys() {
    return index.getLoadedKeys();
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if ($storedValue && $storedValue.mnemonic)
        loadKeys();
    }
  };
  return [$storedValue, handleGenerateKeypair, creating, keys, $$scope, slots];
}
class GetKeys extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {});
  }
}
var AutoSizer_svelte_svelte_type_style_lang = "";
const get_default_slot_changes$1 = (dirty) => ({ walletReady: dirty & 8 });
const get_default_slot_context$1 = (ctx) => ({
  walletReady: ctx[3],
  show: ctx[4],
  hide: ctx[5]
});
function create_if_block$4(ctx) {
  let current;
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], get_default_slot_context$1);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 136)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, get_default_slot_changes$1), get_default_slot_context$1);
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$9(ctx) {
  let div;
  let div_resize_listener;
  let current;
  let if_block = ctx[3] && create_if_block$4(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "autosizer svelte-e8uan9");
      set_style(div, "max-width", ctx[2] + "px");
      add_render_callback(() => ctx[9].call(div));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      div_resize_listener = add_resize_listener(div, ctx[9].bind(div));
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 4) {
        set_style(div, "max-width", ctx2[2] + "px");
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
      if (if_block)
        if_block.d();
      div_resize_listener();
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let offsetHeight;
  let offsetWidth;
  let width;
  let Connection;
  let connector;
  let walletReady;
  let optionalHandlers = {
    setWidth: (w) => $$invalidate(2, width = w)
  };
  onMount(async () => {
    ({ Connection } = await __vitePreload(() => import("../chunks/index-7a951cd6.js"), true ? [] : void 0));
    const connection = new Connection();
    $$invalidate(6, connector = await connection.init(optionalHandlers));
    $$invalidate(3, walletReady = async () => {
      connector.walletReady();
    });
  });
  function show() {
    connector.show();
  }
  function hide() {
    connector.hide();
  }
  function setHeight(height) {
    connector.setIframeParentHeight(height);
  }
  function setWidth(width2) {
    connector.setIframeParentWidth(width2);
  }
  function div_elementresize_handler() {
    offsetHeight = this.offsetHeight;
    offsetWidth = this.offsetWidth;
    $$invalidate(0, offsetHeight);
    $$invalidate(1, offsetWidth);
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 65) {
      connector && offsetHeight && setHeight(offsetHeight);
    }
    if ($$self.$$.dirty & 66) {
      connector && offsetWidth && setWidth(offsetWidth);
    }
  };
  return [
    offsetHeight,
    offsetWidth,
    width,
    walletReady,
    show,
    hide,
    connector,
    $$scope,
    slots,
    div_elementresize_handler
  ];
}
class AutoSizer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
  }
}
function create_fragment$8(ctx) {
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Manager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
const get_default_slot_changes = (dirty) => ({ syncKeys: dirty & 2 });
const get_default_slot_context = (ctx) => ({ syncKeys: ctx[1] });
function create_if_block$3(ctx) {
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 10)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes), get_default_slot_context);
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$7(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && !ctx[2] && create_if_block$3(ctx);
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
      if (ctx2[0] && !ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 5) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx2);
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
function navigateBack() {
  if (!window.opener) {
    return;
  }
  try {
    window.history.back();
  } catch (e) {
    console.log(e);
  }
}
function instance$7($$self, $$props, $$invalidate) {
  let $storedValue;
  component_subscribe($$self, storedValue, ($$value) => $$invalidate(5, $storedValue = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let mounted;
  let syncKeys;
  let pending = true;
  onMount(() => {
    var _a;
    try {
      if (window.location.origin === ((_a = window.opener) == null ? void 0 : _a.origin)) {
        sendOpenerMsg(CONSTANTS.OPENED_SIGNAL, (event) => {
          console.log("iframe confirmed loaded by opener");
          $$invalidate(2, pending = false);
        });
      }
    } catch (error) {
      console.warn("Origins didn't match");
    }
    function sendOpenerMsg(msg, callback = (_) => {
    }) {
      var _a2;
      const channel = new MessageChannel();
      channel.port1.onmessage = callback;
      try {
        if (((_a2 = window.opener) == null ? void 0 : _a2.origin) === window.location.origin)
          window.opener.postMessage(msg, window.location.origin, [channel.port2]);
      } catch (error) {
        console.log("Origins didn't match");
      }
    }
    $$invalidate(1, syncKeys = () => {
      sendOpenerMsg({
        key: CONSTANTS.WINDOW_SYNC,
        storedValue: $storedValue
      }, (event) => {
        console.log("onComplete", event.data);
        $$invalidate(2, pending = null);
        navigateBack();
      });
    });
    window.addEventListener("beforeunload", () => {
      var _a2, _b;
      try {
        console.log((_a2 = window.opener) == null ? void 0 : _a2.origin);
        console.log(window.location.origin);
        if (((_b = window.opener) == null ? void 0 : _b.origin) === window.location.origin)
          window.opener.postMessage(CONSTANTS.CLOSING);
        navigateBack();
      } catch (error) {
        console.log("Origins didn't match");
      }
    });
    $$invalidate(0, mounted = true);
  });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [mounted, syncKeys, pending, $$scope, slots];
}
class Opened extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
  }
}
var DefaultConfirmation_svelte_svelte_type_style_lang = "";
function fallback_block(ctx) {
  let div3;
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[0].method + "";
  let t1;
  let t2;
  let t3;
  let div1;
  let button0;
  let t4;
  let t5;
  let button1;
  let t6;
  let mounted;
  let dispose;
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Authorize ");
      t1 = text(t1_value);
      t2 = text(" from your wallet?");
      t3 = space();
      div1 = element("div");
      button0 = element("button");
      t4 = text("Yes");
      t5 = space();
      button1 = element("button");
      t6 = text("No");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Authorize ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " from your wallet?");
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t4 = claim_text(button0_nodes, "Yes");
      button0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t6 = claim_text(button1_nodes, "No");
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-14rsard");
      attr(button0, "class", "green svelte-14rsard");
      attr(button1, "class", "yellow svelte-14rsard");
      attr(div1, "class", "submit svelte-14rsard");
      attr(div2, "class", "attention svelte-14rsard");
      attr(div3, "class", "svelte-14rsard");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, t4);
      append_hydration(div1, t5);
      append_hydration(div1, button1);
      append_hydration(button1, t6);
      if (!mounted) {
        dispose = [
          listen(button0, "click", function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
          }),
          listen(button1, "click", function() {
            if (is_function(ctx[2]))
              ctx[2].apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && t1_value !== (t1_value = ctx[0].method + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$6(ctx) {
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 7)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [props, handleConfirmed, handleDenied, $$scope, slots];
}
class DefaultConfirmation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
var Connect_svelte_svelte_type_style_lang = "";
function create_default_slot$1(ctx) {
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[4].params.origin + "";
  let t1;
  let t2;
  let b;
  let t3;
  let t4;
  let t5;
  let div1;
  let button;
  let t6;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Allow ");
      t1 = text(t1_value);
      t2 = text(" to see your ");
      b = element("b");
      t3 = text("Public");
      t4 = text(" Key?");
      t5 = space();
      div1 = element("div");
      button = element("button");
      t6 = text("Yes");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Allow ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " to see your ");
      b = claim_element(div0_nodes, "B", {});
      var b_nodes = children(b);
      t3 = claim_text(b_nodes, "Public");
      b_nodes.forEach(detach);
      t4 = claim_text(div0_nodes, " Key?");
      div0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button = claim_element(div1_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t6 = claim_text(button_nodes, "Yes");
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-ia4io4");
      attr(div1, "class", "submit svelte-ia4io4");
      attr(div2, "class", "attention svelte-ia4io4");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div0, b);
      append_hydration(b, t3);
      append_hydration(div0, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      append_hydration(div1, button);
      append_hydration(button, t6);
      if (!mounted) {
        dispose = listen(button, "click", prevent_default(function() {
          if (is_function(ctx[1].handleConfirm))
            ctx[1].handleConfirm.apply(this, arguments);
        }));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 16 && t1_value !== (t1_value = ctx[4].params.origin + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$5(ctx) {
  let defaultconfirmation;
  let current;
  let defaultconfirmation_props = {
    props: ctx[0],
    $$slots: {
      default: [
        create_default_slot$1,
        ({ props: p }) => ({ 4: p }),
        ({ props: p }) => p ? 16 : 0
      ]
    },
    $$scope: { ctx }
  };
  defaultconfirmation = new DefaultConfirmation({ props: defaultconfirmation_props });
  ctx[2](defaultconfirmation);
  defaultconfirmation.$on("confirmed", ctx[3]);
  return {
    c() {
      create_component(defaultconfirmation.$$.fragment);
    },
    l(nodes) {
      claim_component(defaultconfirmation.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(defaultconfirmation, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const defaultconfirmation_changes = {};
      if (dirty & 1)
        defaultconfirmation_changes.props = ctx2[0];
      if (dirty & 50) {
        defaultconfirmation_changes.$$scope = { dirty, ctx: ctx2 };
      }
      defaultconfirmation.$set(defaultconfirmation_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(defaultconfirmation.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(defaultconfirmation.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[2](null);
      destroy_component(defaultconfirmation, detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let defConf;
  function defaultconfirmation_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      defConf = $$value;
      $$invalidate(1, defConf);
    });
  }
  function confirmed_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
  };
  return [props, defConf, defaultconfirmation_binding, confirmed_handler];
}
class Connect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { props: 0 });
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var base64 = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(base64, "__esModule", { value: true });
var INVALID_BYTE = 256;
var Coder = function() {
  function Coder2(_paddingCharacter) {
    if (_paddingCharacter === void 0) {
      _paddingCharacter = "=";
    }
    this._paddingCharacter = _paddingCharacter;
  }
  Coder2.prototype.encodedLength = function(length) {
    if (!this._paddingCharacter) {
      return (length * 8 + 5) / 6 | 0;
    }
    return (length + 2) / 3 * 4 | 0;
  };
  Coder2.prototype.encode = function(data) {
    var out = "";
    var i = 0;
    for (; i < data.length - 2; i += 3) {
      var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      out += this._encodeByte(c >>> 1 * 6 & 63);
      out += this._encodeByte(c >>> 0 * 6 & 63);
    }
    var left = data.length - i;
    if (left > 0) {
      var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      if (left === 2) {
        out += this._encodeByte(c >>> 1 * 6 & 63);
      } else {
        out += this._paddingCharacter || "";
      }
      out += this._paddingCharacter || "";
    }
    return out;
  };
  Coder2.prototype.maxDecodedLength = function(length) {
    if (!this._paddingCharacter) {
      return (length * 6 + 7) / 8 | 0;
    }
    return length / 4 * 3 | 0;
  };
  Coder2.prototype.decodedLength = function(s) {
    return this.maxDecodedLength(s.length - this._getPaddingLength(s));
  };
  Coder2.prototype.decode = function(s) {
    if (s.length === 0) {
      return new Uint8Array(0);
    }
    var paddingLength = this._getPaddingLength(s);
    var length = s.length - paddingLength;
    var out = new Uint8Array(this.maxDecodedLength(length));
    var op = 0;
    var i = 0;
    var haveBad = 0;
    var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
    for (; i < length - 4; i += 4) {
      v0 = this._decodeChar(s.charCodeAt(i + 0));
      v1 = this._decodeChar(s.charCodeAt(i + 1));
      v2 = this._decodeChar(s.charCodeAt(i + 2));
      v3 = this._decodeChar(s.charCodeAt(i + 3));
      out[op++] = v0 << 2 | v1 >>> 4;
      out[op++] = v1 << 4 | v2 >>> 2;
      out[op++] = v2 << 6 | v3;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
      haveBad |= v2 & INVALID_BYTE;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (i < length - 1) {
      v0 = this._decodeChar(s.charCodeAt(i));
      v1 = this._decodeChar(s.charCodeAt(i + 1));
      out[op++] = v0 << 2 | v1 >>> 4;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
    }
    if (i < length - 2) {
      v2 = this._decodeChar(s.charCodeAt(i + 2));
      out[op++] = v1 << 4 | v2 >>> 2;
      haveBad |= v2 & INVALID_BYTE;
    }
    if (i < length - 3) {
      v3 = this._decodeChar(s.charCodeAt(i + 3));
      out[op++] = v2 << 6 | v3;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (haveBad !== 0) {
      throw new Error("Base64Coder: incorrect characters for decoding");
    }
    return out;
  };
  Coder2.prototype._encodeByte = function(b) {
    var result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
    result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
    return String.fromCharCode(result);
  };
  Coder2.prototype._decodeChar = function(c) {
    var result = INVALID_BYTE;
    result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
    result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  };
  Coder2.prototype._getPaddingLength = function(s) {
    var paddingLength = 0;
    if (this._paddingCharacter) {
      for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] !== this._paddingCharacter) {
          break;
        }
        paddingLength++;
      }
      if (s.length < 4 || paddingLength > 2) {
        throw new Error("Base64Coder: incorrect padding");
      }
    }
    return paddingLength;
  };
  return Coder2;
}();
base64.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
  return stdCoder.encode(data);
}
var encode_1 = base64.encode = encode;
function decode(s) {
  return stdCoder.decode(s);
}
var decode_1 = base64.decode = decode;
var URLSafeCoder = function(_super) {
  __extends(URLSafeCoder2, _super);
  function URLSafeCoder2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  URLSafeCoder2.prototype._encodeByte = function(b) {
    var result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
    result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
    return String.fromCharCode(result);
  };
  URLSafeCoder2.prototype._decodeChar = function(c) {
    var result = INVALID_BYTE;
    result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
    result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  };
  return URLSafeCoder2;
}(Coder);
base64.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
  return urlSafeCoder.encode(data);
}
base64.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
  return urlSafeCoder.decode(s);
}
base64.decodeURLSafe = decodeURLSafe;
base64.encodedLength = function(length) {
  return stdCoder.encodedLength(length);
};
base64.maxDecodedLength = function(length) {
  return stdCoder.maxDecodedLength(length);
};
base64.decodedLength = function(s) {
  return stdCoder.decodedLength(s);
};
async function deepHash(data) {
  if (Array.isArray(data)) {
    const tag2 = concatBuffers([
      stringToBuffer("list"),
      stringToBuffer(data.length.toString())
    ]);
    return await deepHashChunks(data, await crypto.subtle.digest("SHA-384", tag2));
  }
  const tag = concatBuffers([
    stringToBuffer("blob"),
    stringToBuffer(data.byteLength.toString())
  ]);
  const taggedHash = concatBuffers([
    await crypto.subtle.digest("SHA-384", tag),
    await crypto.subtle.digest("SHA-384", data)
  ]);
  return await crypto.subtle.digest("SHA-384", taggedHash);
}
async function deepHashChunks(chunks, acc) {
  if (chunks.length < 1) {
    return acc;
  }
  const hashPair = concatBuffers([acc, await deepHash(chunks[0])]);
  const newAcc = await crypto.subtle.digest("SHA-384", hashPair);
  return await deepHashChunks(chunks.slice(1), newAcc);
}
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
function clone(configObject) {
  var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: "\xA0",
    suffix: ""
  }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
  function BigNumber2(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
    if (!(x instanceof BigNumber2))
      return new BigNumber2(v, b);
    if (b == null) {
      if (v && v._isBigNumber === true) {
        x.s = v.s;
        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }
        return;
      }
      if ((isNum = typeof v == "number") && v * 0 == 0) {
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++)
            ;
          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }
          return;
        }
        str = String(v);
      } else {
        if (!isNumeric.test(str = String(v)))
          return parseNumeric(x, str, isNum);
        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0)
          e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
    } else {
      intCheck(b, 2, ALPHABET.length, "Base");
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber2(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }
      str = String(v);
      if (isNum = typeof v == "number") {
        if (v * 0 != 0)
          return parseNumeric(x, str, isNum, b);
        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
        if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
          throw Error(tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }
      alphabet = ALPHABET.slice(0, b);
      e = i = 0;
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == ".") {
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {
            if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }
          return parseNumeric(x, String(v), isNum, b);
        }
      }
      isNum = false;
      str = convertBase(str, b, 10, x.s);
      if ((e = str.indexOf(".")) > -1)
        str = str.replace(".", "");
      else
        e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; i++)
      ;
    for (len = str.length; str.charCodeAt(--len) === 48; )
      ;
    if (str = str.slice(i, ++len)) {
      len -= i;
      if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
        throw Error(tooManyDigits + x.s * v);
      }
      if ((e = e - i - 1) > MAX_EXP) {
        x.c = x.e = null;
      } else if (e < MIN_EXP) {
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0)
          i += LOG_BASE;
        if (i < len) {
          if (i)
            x.c.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }
          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }
        for (; i--; str += "0")
          ;
        x.c.push(+str);
      }
    } else {
      x.c = [x.e = 0];
    }
  }
  BigNumber2.clone = clone;
  BigNumber2.ROUND_UP = 0;
  BigNumber2.ROUND_DOWN = 1;
  BigNumber2.ROUND_CEIL = 2;
  BigNumber2.ROUND_FLOOR = 3;
  BigNumber2.ROUND_HALF_UP = 4;
  BigNumber2.ROUND_HALF_DOWN = 5;
  BigNumber2.ROUND_HALF_EVEN = 6;
  BigNumber2.ROUND_HALF_CEIL = 7;
  BigNumber2.ROUND_HALF_FLOOR = 8;
  BigNumber2.EUCLID = 9;
  BigNumber2.config = BigNumber2.set = function(obj) {
    var p, v;
    if (obj != null) {
      if (typeof obj == "object") {
        if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }
        if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }
        if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }
        if (obj.hasOwnProperty(p = "RANGE")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error(bignumberError + p + " cannot be zero: " + v);
            }
          }
        }
        if (obj.hasOwnProperty(p = "CRYPTO")) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error(bignumberError + "crypto unavailable");
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error(bignumberError + p + " not true or false: " + v);
          }
        }
        if (obj.hasOwnProperty(p = "MODULO_MODE")) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }
        if (obj.hasOwnProperty(p = "POW_PRECISION")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }
        if (obj.hasOwnProperty(p = "FORMAT")) {
          v = obj[p];
          if (typeof v == "object")
            FORMAT = v;
          else
            throw Error(bignumberError + p + " not an object: " + v);
        }
        if (obj.hasOwnProperty(p = "ALPHABET")) {
          v = obj[p];
          if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
            ALPHABET = v;
          } else {
            throw Error(bignumberError + p + " invalid: " + v);
          }
        }
      } else {
        throw Error(bignumberError + "Object expected: " + obj);
      }
    }
    return {
      DECIMAL_PLACES,
      ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO,
      MODULO_MODE,
      POW_PRECISION,
      FORMAT,
      ALPHABET
    };
  };
  BigNumber2.isBigNumber = function(v) {
    if (!v || v._isBigNumber !== true)
      return false;
    if (!BigNumber2.DEBUG)
      return true;
    var i, n, c = v.c, e = v.e, s = v.s;
    out:
      if ({}.toString.call(c) == "[object Array]") {
        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
          if (c[0] === 0) {
            if (e === 0 && c.length === 1)
              return true;
            break out;
          }
          i = (e + 1) % LOG_BASE;
          if (i < 1)
            i += LOG_BASE;
          if (String(c[0]).length == i) {
            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n))
                break out;
            }
            if (n !== 0)
              return true;
          }
        }
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }
    throw Error(bignumberError + "Invalid BigNumber: " + v);
  };
  BigNumber2.maximum = BigNumber2.max = function() {
    return maxOrMin(arguments, P.lt);
  };
  BigNumber2.minimum = BigNumber2.min = function() {
    return maxOrMin(arguments, P.gt);
  };
  BigNumber2.random = function() {
    var pow2_53 = 9007199254740992;
    var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
      return mathfloor(Math.random() * pow2_53);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(dp) {
      var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
      if (dp == null)
        dp = DECIMAL_PLACES;
      else
        intCheck(dp, 0, MAX);
      k = mathceil(dp / LOG_BASE);
      if (CRYPTO) {
        if (crypto.getRandomValues) {
          a = crypto.getRandomValues(new Uint32Array(k *= 2));
          for (; i < k; ) {
            v = a[i] * 131072 + (a[i + 1] >>> 11);
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;
        } else if (crypto.randomBytes) {
          a = crypto.randomBytes(k *= 7);
          for (; i < k; ) {
            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error(bignumberError + "crypto unavailable");
        }
      }
      if (!CRYPTO) {
        for (; i < k; ) {
          v = random53bitInt();
          if (v < 9e15)
            c[i++] = v % 1e14;
        }
      }
      k = c[--i];
      dp %= LOG_BASE;
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }
      for (; c[i] === 0; c.pop(), i--)
        ;
      if (i < 0) {
        c = [e = 0];
      } else {
        for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
          ;
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
          ;
        if (i < LOG_BASE)
          e -= LOG_BASE - i;
      }
      rand.e = e;
      rand.c = c;
      return rand;
    };
  }();
  BigNumber2.sum = function() {
    var i = 1, args = arguments, sum = new BigNumber2(args[0]);
    for (; i < args.length; )
      sum = sum.plus(args[i++]);
    return sum;
  };
  convertBase = function() {
    var decimal = "0123456789";
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j, arr = [0], arrL, i = 0, len = str.length;
      for (; i < len; ) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
          ;
        arr[0] += alphabet.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null)
              arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    return function(str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
      if (i >= 0) {
        k = POW_PRECISION;
        POW_PRECISION = 0;
        str = str.replace(".", "");
        y = new BigNumber2(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;
        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
        y.e = y.c.length;
      }
      xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
      e = k = xc.length;
      for (; xc[--k] == 0; xc.pop())
        ;
      if (!xc[0])
        return alphabet.charAt(0);
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }
      d = e + dp + 1;
      i = xc[d];
      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;
      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
      if (d < 1 || !xc[0]) {
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {
        xc.length = d;
        if (r) {
          for (--baseOut; ++xc[--d] > baseOut; ) {
            xc[d] = 0;
            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }
        for (k = xc.length; !xc[--k]; )
          ;
        for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
          ;
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }
      return str;
    };
  }();
  div = function() {
    function multiply(x, k, base) {
      var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
      for (x = x.slice(); i--; ) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }
      if (carry)
        x = [carry].concat(x);
      return x;
    }
    function compare2(a, b, aL, bL) {
      var i, cmp;
      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {
        for (i = cmp = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return cmp;
    }
    function subtract(a, b, aL, base) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }
      for (; !a[0] && a.length > 1; a.splice(0, 1))
        ;
    }
    return function(x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
      if (!xc || !xc[0] || !yc || !yc[0]) {
        return new BigNumber2(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
      }
      q = new BigNumber2(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;
      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }
      for (i = 0; yc[i] == (xc[i] || 0); i++)
        ;
      if (yc[i] > (xc[i] || 0))
        e--;
      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;
        n = mathfloor(base / (yc[0] + 1));
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }
        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; rem[remL++] = 0)
          ;
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2)
          yc0++;
        do {
          n = 0;
          cmp = compare2(yc, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            n = mathfloor(rem0 / yc0);
            if (n > 1) {
              if (n >= base)
                n = base - 1;
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;
              while (compare2(prod, rem, prodL, remL) == 1) {
                n--;
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {
              if (n == 0) {
                cmp = n = 1;
              }
              prod = yc.slice();
              prodL = prod.length;
            }
            if (prodL < remL)
              prod = [0].concat(prod);
            subtract(rem, prod, remL, base);
            remL = rem.length;
            if (cmp == -1) {
              while (compare2(yc, rem, yL, remL) < 1) {
                n++;
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          }
          qc[i++] = n;
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);
        more = rem[0] != null;
        if (!qc[0])
          qc.splice(0, 1);
      }
      if (base == BASE) {
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
          ;
        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
      } else {
        q.e = e;
        q.r = +more;
      }
      return q;
    };
  }();
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    if (!n.c)
      return n.toString();
    c0 = n.c[0];
    ne = n.e;
    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
    } else {
      n = round(new BigNumber2(n), i, rm);
      e = n.e;
      str = coeffToString(n.c);
      len = str.length;
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
        for (; len < i; str += "0", len++)
          ;
        str = toExponential(str, e);
      } else {
        i -= ne;
        str = toFixedPoint(str, e, "0");
        if (e + 1 > len) {
          if (--i > 0)
            for (str += "."; i--; str += "0")
              ;
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len)
              str += ".";
            for (; i--; str += "0")
              ;
          }
        }
      }
    }
    return n.s < 0 && c0 ? "-" + str : str;
  }
  function maxOrMin(args, method) {
    var n, i = 1, m = new BigNumber2(args[0]);
    for (; i < args.length; i++) {
      n = new BigNumber2(args[i]);
      if (!n.s) {
        m = n;
        break;
      } else if (method.call(m, n)) {
        m = n;
      }
    }
    return m;
  }
  function normalise(n, c, e) {
    var i = 1, j = c.length;
    for (; !c[--j]; c.pop())
      ;
    for (j = c[0]; j >= 10; j /= 10, i++)
      ;
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
      n.c = n.e = null;
    } else if (e < MIN_EXP) {
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }
    return n;
  }
  parseNumeric = function() {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(x, str, isNum, b) {
      var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {
          s = s.replace(basePrefix, function(m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
            return !b || b == base ? p1 : m;
          });
          if (b) {
            base = b;
            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
          }
          if (str != s)
            return new BigNumber2(s, base);
        }
        if (BigNumber2.DEBUG) {
          throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
        }
        x.s = null;
      }
      x.c = x.e = null;
    };
  }();
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
    if (xc) {
      out: {
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
          ;
        i = sd - d;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];
          rd = n / pows10[d - j - 1] % 10 | 0;
        } else {
          ni = mathceil((i + 1) / LOG_BASE);
          if (ni >= xc.length) {
            if (r) {
              for (; xc.length <= ni; xc.push(0))
                ;
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];
            for (d = 1; k >= 10; k /= 10, d++)
              ;
            i %= LOG_BASE;
            j = i - LOG_BASE + d;
            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
          }
        }
        r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
        r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xc[0]) {
          xc.length = 0;
          if (r) {
            sd -= x.e + 1;
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {
            xc[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }
        if (r) {
          for (; ; ) {
            if (ni == 0) {
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                ;
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++)
                ;
              if (i != k) {
                x.e++;
                if (xc[0] == BASE)
                  xc[0] = 1;
              }
              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE)
                break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }
        for (i = xc.length; xc[--i] === 0; xc.pop())
          ;
      }
      if (x.e > MAX_EXP) {
        x.c = x.e = null;
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }
    return x;
  }
  function valueOf(n) {
    var str, e = n.e;
    if (e === null)
      return n.toString();
    str = coeffToString(n.c);
    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
    return n.s < 0 ? "-" + str : str;
  }
  P.absoluteValue = P.abs = function() {
    var x = new BigNumber2(this);
    if (x.s < 0)
      x.s = 1;
    return x;
  };
  P.comparedTo = function(y, b) {
    return compare(this, new BigNumber2(y, b));
  };
  P.decimalPlaces = P.dp = function(dp, rm) {
    var c, n, v, x = this;
    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), dp + x.e + 1, rm);
    }
    if (!(c = x.c))
      return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    if (v = c[v])
      for (; v % 10 == 0; v /= 10, n--)
        ;
    if (n < 0)
      n = 0;
    return n;
  };
  P.dividedBy = P.div = function(y, b) {
    return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };
  P.dividedToIntegerBy = P.idiv = function(y, b) {
    return div(this, new BigNumber2(y, b), 0, 1);
  };
  P.exponentiatedBy = P.pow = function(n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
    n = new BigNumber2(n);
    if (n.c && !n.isInteger()) {
      throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
    }
    if (m != null)
      m = new BigNumber2(m);
    nIsBig = n.e > 14;
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
      y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }
    nIsNeg = n.s < 0;
    if (m) {
      if (m.c ? !m.c[0] : !m.s)
        return new BigNumber2(NaN);
      isModExp = !nIsNeg && x.isInteger() && m.isInteger();
      if (isModExp)
        x = x.mod(m);
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
      k = x.s < 0 && isOdd(n) ? -0 : 0;
      if (x.e > -1)
        k = 1 / k;
      return new BigNumber2(nIsNeg ? 1 / k : k);
    } else if (POW_PRECISION) {
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }
    if (nIsBig) {
      half = new BigNumber2(0.5);
      if (nIsNeg)
        n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }
    y = new BigNumber2(ONE);
    for (; ; ) {
      if (nIsOdd) {
        y = y.times(x);
        if (!y.c)
          break;
        if (k) {
          if (y.c.length > k)
            y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);
        }
      }
      if (i) {
        i = mathfloor(i / 2);
        if (i === 0)
          break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);
        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0)
            break;
          nIsOdd = i % 2;
        }
      }
      x = x.times(x);
      if (k) {
        if (x.c && x.c.length > k)
          x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);
      }
    }
    if (isModExp)
      return y;
    if (nIsNeg)
      y = ONE.div(y);
    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };
  P.integerValue = function(rm) {
    var n = new BigNumber2(this);
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };
  P.isEqualTo = P.eq = function(y, b) {
    return compare(this, new BigNumber2(y, b)) === 0;
  };
  P.isFinite = function() {
    return !!this.c;
  };
  P.isGreaterThan = P.gt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) > 0;
  };
  P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
  };
  P.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };
  P.isLessThan = P.lt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) < 0;
  };
  P.isLessThanOrEqualTo = P.lte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = function() {
    return this.s < 0;
  };
  P.isPositive = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.c && this.c[0] == 0;
  };
  P.minus = function(y, b) {
    var i, j, t, xLTy, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
      if (!xc[0] || !yc[0]) {
        return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
      }
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }
      t.reverse();
      for (b = a; b--; t.push(0))
        ;
      t.reverse();
    } else {
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }
    if (xLTy)
      t = xc, xc = yc, yc = t, y.s = -y.s;
    b = (j = yc.length) - (i = xc.length);
    if (b > 0)
      for (; b--; xc[i++] = 0)
        ;
    b = BASE - 1;
    for (; j > a; ) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b)
          ;
        --xc[i];
        xc[j] += BASE;
      }
      xc[j] -= yc[j];
    }
    for (; xc[0] == 0; xc.splice(0, 1), --ye)
      ;
    if (!xc[0]) {
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }
    return normalise(y, xc, ye);
  };
  P.modulo = P.mod = function(y, b) {
    var q, s, x = this;
    y = new BigNumber2(y, b);
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber2(NaN);
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber2(x);
    }
    if (MODULO_MODE == 9) {
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }
    y = x.minus(q.times(y));
    if (!y.c[0] && MODULO_MODE == 1)
      y.s = x.s;
    return y;
  };
  P.multipliedBy = P.times = function(y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
    if (!xc || !yc || !xc[0] || !yc[0]) {
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;
        if (!xc || !yc) {
          y.c = y.e = null;
        } else {
          y.c = [0];
          y.e = 0;
        }
      }
      return y;
    }
    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;
    if (xcL < ycL)
      zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
    for (i = xcL + ycL, zc = []; i--; zc.push(0))
      ;
    base = BASE;
    sqrtBase = SQRT_BASE;
    for (i = ycL; --i >= 0; ) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;
      for (k = xcL, j = i + k; j > i; ) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }
      zc[j] = c;
    }
    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }
    return normalise(y, zc, e);
  };
  P.negated = function() {
    var x = new BigNumber2(this);
    x.s = -x.s || null;
    return x;
  };
  P.plus = function(y, b) {
    var t, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return new BigNumber2(a / 0);
      if (!xc[0] || !yc[0])
        return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--; t.push(0))
        ;
      t.reverse();
    }
    a = xc.length;
    b = yc.length;
    if (a - b < 0)
      t = yc, yc = xc, xc = t, b = a;
    for (a = 0; b; ) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }
    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }
    return normalise(y, xc, ye);
  };
  P.precision = P.sd = function(sd, rm) {
    var c, n, v, x = this;
    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), sd, rm);
    }
    if (!(c = x.c))
      return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;
    if (v = c[v]) {
      for (; v % 10 == 0; v /= 10, n--)
        ;
      for (v = c[0]; v >= 10; v /= 10, n++)
        ;
    }
    if (sd && x.e + 1 > n)
      n = x.e + 1;
    return n;
  };
  P.shiftedBy = function(k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times("1e" + k);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }
    s = Math.sqrt(+valueOf(x));
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0)
        n += "0";
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new BigNumber2(n);
    } else {
      r = new BigNumber2(s + "");
    }
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3)
        s = 0;
      for (; ; ) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));
        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
          if (r.e < e)
            --s;
          n = n.slice(s - 3, s + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            dp += 4;
            s += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
    }
    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };
  P.toExponential = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };
  P.toFixed = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };
  P.toFormat = function(dp, rm, format2) {
    var str, x = this;
    if (format2 == null) {
      if (dp != null && rm && typeof rm == "object") {
        format2 = rm;
        rm = null;
      } else if (dp && typeof dp == "object") {
        format2 = dp;
        dp = rm = null;
      } else {
        format2 = FORMAT;
      }
    } else if (typeof format2 != "object") {
      throw Error(bignumberError + "Argument not an object: " + format2);
    }
    str = x.toFixed(dp, rm);
    if (x.c) {
      var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
      if (g2)
        i = g1, g1 = g2, g2 = i, len -= i;
      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1)
          intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0)
          intPart += groupSeparator + intDigits.slice(i);
        if (isNeg)
          intPart = "-" + intPart;
      }
      str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format2.fractionGroupSeparator || "")) : fractionPart) : intPart;
    }
    return (format2.prefix || "") + str + (format2.suffix || "");
  };
  P.toFraction = function(md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
    if (md != null) {
      n = new BigNumber2(md);
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
      }
    }
    if (!xc)
      return new BigNumber2(x);
    d = new BigNumber2(ONE);
    n1 = d0 = new BigNumber2(ONE);
    d1 = n0 = new BigNumber2(ONE);
    s = coeffToString(xc);
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber2(s);
    n0.c[0] = 0;
    for (; ; ) {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1)
        break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }
    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
    MAX_EXP = exp;
    return r;
  };
  P.toNumber = function() {
    return +valueOf(this);
  };
  P.toPrecision = function(sd, rm) {
    if (sd != null)
      intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };
  P.toString = function(b) {
    var str, n = this, s = n.s, e = n.e;
    if (e === null) {
      if (s) {
        str = "Infinity";
        if (s < 0)
          str = "-" + str;
      } else {
        str = "NaN";
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, "0");
      } else {
        intCheck(b, 2, ALPHABET.length, "Base");
        str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
      }
      if (s < 0 && n.c[0])
        str = "-" + str;
    }
    return str;
  };
  P.valueOf = P.toJSON = function() {
    return valueOf(this);
  };
  P._isBigNumber = true;
  P[Symbol.toStringTag] = "BigNumber";
  P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf;
  if (configObject != null)
    BigNumber2.set(configObject);
  return BigNumber2;
}
function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}
function coeffToString(a) {
  var s, z, i = 1, j = a.length, r = a[0] + "";
  for (; i < j; ) {
    s = a[i++] + "";
    z = LOG_BASE - s.length;
    for (; z--; s = "0" + s)
      ;
    r += s;
  }
  for (j = r.length; r.charCodeAt(--j) === 48; )
    ;
  return r.slice(0, j + 1 || 1);
}
function compare(x, y) {
  var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!i || !j)
    return null;
  a = xc && !xc[0];
  b = yc && !yc[0];
  if (a || b)
    return a ? b ? 0 : -j : i;
  if (i != j)
    return i;
  a = i < 0;
  b = k == l;
  if (!xc || !yc)
    return b ? 0 : !xc ^ a ? 1 : -1;
  if (!b)
    return k > l ^ a ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = 0; i < j; i++)
    if (xc[i] != yc[i])
      return xc[i] > yc[i] ^ a ? 1 : -1;
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
  }
}
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str, e, z) {
  var len, zs;
  if (e < 0) {
    for (zs = z + "."; ++e; zs += z)
      ;
    str = zs + str;
  } else {
    len = str.length;
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z)
        ;
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + "." + str.slice(e);
    }
  }
  return str;
}
var BigNumber = clone();
function concatBuffers(buffers) {
  let total_length = 0;
  for (let i = 0; i < buffers.length; i++) {
    total_length += buffers[i].byteLength;
  }
  let temp = new Uint8Array(total_length);
  let offset = 0;
  temp.set(new Uint8Array(buffers[0]), offset);
  offset += buffers[0].byteLength;
  for (let i = 1; i < buffers.length; i++) {
    temp.set(new Uint8Array(buffers[i]), offset);
    offset += buffers[i].byteLength;
  }
  return temp;
}
function b64UrlToString(b64UrlString) {
  let buffer = b64UrlToBuffer(b64UrlString);
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = require("util").TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
function bufferToString(buffer) {
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = require("util").TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
function stringToBuffer(string) {
  if (typeof TextEncoder == "undefined") {
    const TextEncoder2 = require("util").TextEncoder;
    return new TextEncoder2().encode(string);
  }
  return new TextEncoder().encode(string);
}
function stringToB64Url(string) {
  return bufferTob64Url(stringToBuffer(string));
}
function b64UrlToBuffer(b64UrlString) {
  return new Uint8Array(decode_1(b64UrlDecode(b64UrlString)));
}
function bufferTob64(buffer) {
  return encode_1(new Uint8Array(buffer));
}
function bufferTob64Url(buffer) {
  return b64UrlEncode(bufferTob64(buffer));
}
function b64UrlEncode(b64UrlString) {
  return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
function b64UrlDecode(b64UrlString) {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  let padding;
  b64UrlString.length % 4 == 0 ? padding = 0 : padding = 4 - b64UrlString.length % 4;
  return b64UrlString.concat("=".repeat(padding));
}
class BaseObject {
  get(field, options) {
    if (!Object.getOwnPropertyNames(this).includes(field)) {
      throw new Error(`Field "${field}" is not a property of the Arweave Transaction class.`);
    }
    if (this[field] instanceof Uint8Array) {
      if (options && options.decode && options.string) {
        return bufferToString(this[field]);
      }
      if (options && options.decode && !options.string) {
        return this[field];
      }
      return bufferTob64Url(this[field]);
    }
    if (options && options.decode == true) {
      if (options && options.string) {
        return b64UrlToString(this[field]);
      }
      return b64UrlToBuffer(this[field]);
    }
    return this[field];
  }
}
class Tag extends BaseObject {
  constructor(name, value, decode2 = false) {
    super();
    this.name = name;
    this.value = value;
  }
}
class Transaction extends BaseObject {
  constructor(attributes = {}) {
    super();
    this.format = 2;
    this.id = "";
    this.last_tx = "";
    this.owner = "";
    this.tags = [];
    this.target = "";
    this.quantity = "0";
    this.data_size = "0";
    this.data = new Uint8Array();
    this.data_root = "";
    this.reward = "0";
    this.signature = "";
    Object.assign(this, attributes);
    if (typeof this.data === "string") {
      this.data = b64UrlToBuffer(this.data);
    }
    if (attributes.tags) {
      this.tags = attributes.tags.map((tag) => {
        return new Tag(tag.name, tag.value);
      });
    }
  }
  addTag(name, value) {
    this.tags.push(new Tag(stringToB64Url(name), stringToB64Url(value)));
  }
  toJSON() {
    return {
      format: this.format,
      id: this.id,
      last_tx: this.last_tx,
      owner: this.owner,
      tags: this.tags,
      target: this.target,
      quantity: this.quantity,
      data: bufferTob64Url(this.data),
      data_size: this.data_size,
      data_root: this.data_root,
      data_tree: this.data_tree,
      reward: this.reward,
      signature: this.signature
    };
  }
  setOwner(owner) {
    this.owner = owner;
  }
  setSignature({
    id,
    owner,
    reward,
    tags,
    signature
  }) {
    this.id = id;
    this.owner = owner;
    if (reward)
      this.reward = reward;
    if (tags)
      this.tags = tags;
    this.signature = signature;
  }
  async prepareChunks(data) {
    if (!this.chunks && data.byteLength > 0) {
      this.chunks = await generateTransactionChunks(data);
      this.data_root = bufferTob64Url(this.chunks.data_root);
    }
    if (!this.chunks && data.byteLength === 0) {
      this.chunks = {
        chunks: [],
        data_root: new Uint8Array(),
        proofs: []
      };
      this.data_root = "";
    }
  }
  getChunk(idx, data) {
    if (!this.chunks) {
      throw new Error(`Chunks have not been prepared`);
    }
    const proof = this.chunks.proofs[idx];
    const chunk = this.chunks.chunks[idx];
    return {
      data_root: this.data_root,
      data_size: this.data_size,
      data_path: bufferTob64Url(proof.proof),
      offset: proof.offset.toString(),
      chunk: bufferTob64Url(data.slice(chunk.minByteRange, chunk.maxByteRange))
    };
  }
  async getSignatureData() {
    switch (this.format) {
      case 1:
        let tags = this.tags.reduce((accumulator, tag) => {
          return concatBuffers([
            accumulator,
            tag.get("name", { decode: true, string: false }),
            tag.get("value", { decode: true, string: false })
          ]);
        }, new Uint8Array());
        return concatBuffers([
          this.get("owner", { decode: true, string: false }),
          this.get("target", { decode: true, string: false }),
          this.get("data", { decode: true, string: false }),
          stringToBuffer(this.quantity),
          stringToBuffer(this.reward),
          this.get("last_tx", { decode: true, string: false }),
          tags
        ]);
      case 2:
        if (!this.data_root) {
          await this.prepareChunks(this.data);
        }
        const tagList = this.tags.map((tag) => [
          tag.get("name", { decode: true, string: false }),
          tag.get("value", { decode: true, string: false })
        ]);
        return await deepHash([
          stringToBuffer(this.format.toString()),
          this.get("owner", { decode: true, string: false }),
          this.get("target", { decode: true, string: false }),
          stringToBuffer(this.quantity),
          stringToBuffer(this.reward),
          this.get("last_tx", { decode: true, string: false }),
          tagList,
          stringToBuffer(this.data_size),
          this.get("data_root", { decode: true, string: false })
        ]);
      default:
        throw new Error(`Unexpected transaction format: ${this.format}`);
    }
  }
}
function winstonToAr(winstonString, { formatted = false, decimals = 12, trim = true } = {}) {
  let number = stringToBigNum(winstonString, decimals).shiftedBy(-12);
  return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
}
function stringToBigNum(stringValue, decimalPlaces = 12) {
  return BigNum(stringValue, decimalPlaces);
}
const BigNum = (value, decimals) => {
  let instance2;
  try {
    instance2 = BigNumber.clone({ DECIMAL_PLACES: decimals });
  } catch (error) {
    console.warn("Caught big num issues, try default", error);
    instance2 = BigNumber.default.clone({ DECIMAL_PLACES: decimals });
  }
  return new instance2(value);
};
var ArweaveSign_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i].name;
  child_ctx[8] = list[i].val;
  return child_ctx;
}
function create_if_block$2(ctx) {
  let div3;
  let div0;
  let t0;
  let t1_value = ctx[0].method + "";
  let t1;
  let t2;
  let t3;
  let div1;
  let t4;
  let br0;
  let t5;
  let t6;
  let t7_value = ctx[3].quantity + "";
  let t7;
  let br1;
  let t8;
  let t9_value = ctx[3].reward + "";
  let t9;
  let t10;
  let t11_value = (winstonToAr(ctx[3].reward) * 100).toFixed(5) + "";
  let t11;
  let t12;
  let br2;
  let t13;
  let div2;
  let button0;
  let t14;
  let t15;
  let button1;
  let t16;
  let mounted;
  let dispose;
  let each_value = ctx[4];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Attention! You are about to sign (");
      t1 = text(t1_value);
      t2 = text(") this Arweave transaction. Authorize to\r\n			proceed?");
      t3 = space();
      div1 = element("div");
      t4 = text("Tags:");
      br0 = element("br");
      t5 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t6 = text("\r\n			Token transfer: ");
      t7 = text(t7_value);
      br1 = element("br");
      t8 = text("\r\n			Gas fees: ");
      t9 = text(t9_value);
      t10 = text(" (~$");
      t11 = text(t11_value);
      t12 = text(")");
      br2 = element("br");
      t13 = space();
      div2 = element("div");
      button0 = element("button");
      t14 = text("Yes");
      t15 = space();
      button1 = element("button");
      t16 = text("Cancel");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Attention! You are about to sign (");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, ") this Arweave transaction. Authorize to\r\n			proceed?");
      div0_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "Tags:");
      br0 = claim_element(div1_nodes, "BR", {});
      t5 = claim_space(div1_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      t6 = claim_text(div1_nodes, "\r\n			Token transfer: ");
      t7 = claim_text(div1_nodes, t7_value);
      br1 = claim_element(div1_nodes, "BR", {});
      t8 = claim_text(div1_nodes, "\r\n			Gas fees: ");
      t9 = claim_text(div1_nodes, t9_value);
      t10 = claim_text(div1_nodes, " (~$");
      t11 = claim_text(div1_nodes, t11_value);
      t12 = claim_text(div1_nodes, ")");
      br2 = claim_element(div1_nodes, "BR", {});
      div1_nodes.forEach(detach);
      t13 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      button0 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t14 = claim_text(button0_nodes, "Yes");
      button0_nodes.forEach(detach);
      t15 = claim_space(div2_nodes);
      button1 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t16 = claim_text(button1_nodes, "Cancel");
      button1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-qk18rg");
      attr(div1, "class", "svelte-qk18rg");
      attr(button0, "class", "green svelte-qk18rg");
      attr(button1, "class", "yellow svelte-qk18rg");
      attr(div2, "class", "submit svelte-qk18rg");
      attr(div3, "class", "attention svelte-qk18rg");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div1);
      append_hydration(div1, t4);
      append_hydration(div1, br0);
      append_hydration(div1, t5);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      append_hydration(div1, t6);
      append_hydration(div1, t7);
      append_hydration(div1, br1);
      append_hydration(div1, t8);
      append_hydration(div1, t9);
      append_hydration(div1, t10);
      append_hydration(div1, t11);
      append_hydration(div1, t12);
      append_hydration(div1, br2);
      append_hydration(div3, t13);
      append_hydration(div3, div2);
      append_hydration(div2, button0);
      append_hydration(button0, t14);
      append_hydration(div2, t15);
      append_hydration(div2, button1);
      append_hydration(button1, t16);
      if (!mounted) {
        dispose = [
          listen(button0, "click", prevent_default(function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
          })),
          listen(button1, "click", prevent_default(function() {
            if (is_function(ctx[2]))
              ctx[2].apply(this, arguments);
          }))
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && t1_value !== (t1_value = ctx[0].method + ""))
        set_data(t1, t1_value);
      if (dirty & 16) {
        each_value = ctx[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div1, t6);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block$1(ctx) {
  let li;
  let t0_value = ctx[7] + "";
  let t0;
  let t1;
  let t2_value = ctx[8] + "";
  let t2;
  let li_class_value;
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = text(":\r\n					");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_text(li_nodes, ":\r\n					");
      t2 = claim_text(li_nodes, t2_value);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", li_class_value = null_to_empty(ctx[7].includes("App-Name") ? "bold" : "") + " svelte-qk18rg");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment$4(ctx) {
  let if_block_anchor;
  let if_block = ctx[3] && create_if_block$2(ctx);
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
    },
    p(ctx2, [dirty]) {
      if (ctx2[3])
        if_block.p(ctx2, dirty);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  console.log("Signing ", { params: props.params });
  const transaction = props.params;
  let tx = new Transaction(transaction);
  let tags = tx.tags.map((tag) => ({
    name: tag.get("name", { decode: true, string: true }),
    val: tag.get("value", { decode: true, string: true })
  }));
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
  };
  return [props, handleConfirmed, handleDenied, transaction, tags];
}
class ArweaveSign extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
var Sign_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let button0;
  let t2;
  let t3;
  let button1;
  let t4;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Sign this transaction?");
      t1 = space();
      div1 = element("div");
      button0 = element("button");
      t2 = text("No");
      t3 = space();
      button1 = element("button");
      t4 = text("Yes");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Sign this transaction?");
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t2 = claim_text(button0_nodes, "No");
      button0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t4 = claim_text(button1_nodes, "Yes");
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-rd2cdl");
      attr(button0, "class", "yellow");
      attr(button1, "class", "green");
      attr(div1, "class", "submit svelte-rd2cdl");
      attr(div2, "class", "attention svelte-rd2cdl");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, t2);
      append_hydration(div1, t3);
      append_hydration(div1, button1);
      append_hydration(button1, t4);
      if (!mounted) {
        dispose = [
          listen(button0, "click", prevent_default(function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
          })),
          listen(button1, "click", prevent_default(function() {
            if (is_function(ctx[0]))
              ctx[0].apply(this, arguments);
          }))
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  new TextDecoder();
  console.log({ props });
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(2, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(0, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(1, handleDenied = $$props2.handleDenied);
  };
  return [handleConfirmed, handleDenied, props];
}
class Sign extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      props: 2,
      handleConfirmed: 0,
      handleDenied: 1
    });
  }
}
var Decrypt_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[3].decode(ctx[0].params.tag) + "";
  let t1;
  let t2;
  let t3;
  let div1;
  let button0;
  let t4;
  let t5;
  let button1;
  let t6;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Decrypt ");
      t1 = text(t1_value);
      t2 = text("?");
      t3 = space();
      div1 = element("div");
      button0 = element("button");
      t4 = text("Yes");
      t5 = space();
      button1 = element("button");
      t6 = text("No");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Decrypt ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, "?");
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t4 = claim_text(button0_nodes, "Yes");
      button0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t6 = claim_text(button1_nodes, "No");
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-rd2cdl");
      attr(button0, "class", "green");
      attr(button1, "class", "yellow");
      attr(div1, "class", "submit svelte-rd2cdl");
      attr(div2, "class", "attention svelte-rd2cdl");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, t4);
      append_hydration(div1, t5);
      append_hydration(div1, button1);
      append_hydration(button1, t6);
      if (!mounted) {
        dispose = [
          listen(button0, "click", prevent_default(function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
          })),
          listen(button1, "click", prevent_default(function() {
            if (is_function(ctx[2]))
              ctx[2].apply(this, arguments);
          }))
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 1 && t1_value !== (t1_value = ctx[3].decode(ctx[0].params.tag) + ""))
        set_data(t1, t1_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  const decoder = new TextDecoder();
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
  };
  return [props, handleConfirmed, handleDenied, decoder];
}
class Decrypt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
let confirmationComponents = {
  Default: { component: DefaultConfirmation }
};
for (const [key, value] of Object.entries(handlers)) {
  confirmationComponents[key] = { component: DefaultConfirmation };
}
let customizedComponents = {
  connect: { component: Connect },
  ed25519: {
    sign: {
      component: Sign
    }
  },
  arweaveWalletAPI: {
    sign: {
      component: ArweaveSign
    }
  },
  proxcryptor: {
    selfDecrypt: {
      component: Decrypt
    }
  }
};
confirmationComponents = __spreadValues(__spreadValues({}, confirmationComponents), customizedComponents);
var Confirmer_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i].component;
  child_ctx[6] = list[i].confirmSection;
  child_ctx[7] = list[i].params;
  child_ctx[8] = list[i].handleConfirmed;
  child_ctx[9] = list[i].handleDenied;
  return child_ctx;
}
function create_if_block$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
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
      if (dirty & 1) {
        each_value = ctx2[0];
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
  let div;
  let switch_instance;
  let t;
  let current;
  var switch_value = ctx[5].component;
  function switch_props(ctx2) {
    return {
      props: {
        props: {
          method: ctx2[6],
          params: ctx2[7]
        },
        handleConfirmed: ctx2[8],
        handleDenied: ctx2[9]
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      div = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "active svelte-97zfr5");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (switch_instance) {
        mount_component(switch_instance, div, null);
      }
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = {};
      if (dirty & 1)
        switch_instance_changes.props = {
          method: ctx2[6],
          params: ctx2[7]
        };
      if (dirty & 1)
        switch_instance_changes.handleConfirmed = ctx2[8];
      if (dirty & 1)
        switch_instance_changes.handleDenied = ctx2[9];
      if (switch_value !== (switch_value = ctx2[5].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, t);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block$1(ctx);
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
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
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
function instance$1($$self, $$props, $$invalidate) {
  let { show } = $$props;
  let { hide } = $$props;
  const leaf = (obj, path) => path.split(".").reduce((value, el) => value && value[el], obj);
  let requests = [];
  const confirm = async (confirmSection, params) => {
    const component = confirmSection ? leaf(confirmationComponents, confirmSection) || confirmationComponents.Default : false;
    return new Promise((resolve, reject) => {
      const handleConfirmed = () => {
        common();
        resolve(true);
      };
      const handleDenied = () => {
        common();
        resolve(false);
      };
      const thisRequest = {
        component,
        confirmSection,
        params,
        handleConfirmed,
        handleDenied
      };
      function common() {
        $$invalidate(0, requests = requests.filter((req) => req !== thisRequest));
        if (requests.length == 0)
          hide();
      }
      $$invalidate(0, requests = [...requests, thisRequest]);
      show();
    });
  };
  handlers.setConfig("confirm", confirm);
  $$self.$$set = ($$props2) => {
    if ("show" in $$props2)
      $$invalidate(1, show = $$props2.show);
    if ("hide" in $$props2)
      $$invalidate(2, hide = $$props2.hide);
  };
  return [requests, show, hide];
}
class Confirmer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { show: 1, hide: 2 });
  }
}
var index_svelte_svelte_type_style_lang = "";
function create_else_block_1(ctx) {
  let autosizer;
  let current;
  autosizer = new AutoSizer({
    props: {
      $$slots: {
        default: [
          create_default_slot_3,
          ({ walletReady, show, hide }) => ({ 9: walletReady, 10: show, 11: hide }),
          ({ walletReady, show, hide }) => (walletReady ? 512 : 0) | (show ? 1024 : 0) | (hide ? 2048 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(autosizer.$$.fragment);
    },
    l(nodes) {
      claim_component(autosizer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(autosizer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const autosizer_changes = {};
      if (dirty & 7681) {
        autosizer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      autosizer.$set(autosizer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(autosizer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(autosizer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(autosizer, detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0] && ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
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
      attr(div, "class", "top-wrapper svelte-1ja847n");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
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
function create_if_block_3(ctx) {
  let getkeys;
  let current;
  getkeys = new GetKeys({});
  getkeys.$on("loadedKeys", function() {
    if (is_function(ctx[9]))
      ctx[9].apply(this, arguments);
  });
  return {
    c() {
      create_component(getkeys.$$.fragment);
    },
    l(nodes) {
      claim_component(getkeys.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(getkeys, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      transition_in(getkeys.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(getkeys.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(getkeys, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[9] && create_if_block_3(ctx);
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
    p(ctx2, dirty) {
      if (ctx2[9]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 512) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
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
function create_default_slot_4(ctx) {
  let confirmer;
  let t;
  let manager;
  let current;
  confirmer = new Confirmer({
    props: {
      show: ctx[10],
      hide: ctx[11]
    }
  });
  manager = new Manager({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(confirmer.$$.fragment);
      t = space();
      create_component(manager.$$.fragment);
    },
    l(nodes) {
      claim_component(confirmer.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(manager.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(confirmer, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(manager, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const confirmer_changes = {};
      if (dirty & 1024)
        confirmer_changes.show = ctx2[10];
      if (dirty & 2048)
        confirmer_changes.hide = ctx2[11];
      confirmer.$set(confirmer_changes);
      const manager_changes = {};
      if (dirty & 4608) {
        manager_changes.$$scope = { dirty, ctx: ctx2 };
      }
      manager.$set(manager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(confirmer.$$.fragment, local);
      transition_in(manager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(confirmer.$$.fragment, local);
      transition_out(manager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(confirmer, detaching);
      if (detaching)
        detach(t);
      destroy_component(manager, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let connector;
  let current;
  connector = new Connector({
    props: {
      mounted: ctx[0],
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(connector.$$.fragment);
    },
    l(nodes) {
      claim_component(connector.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(connector, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const connector_changes = {};
      if (dirty & 1)
        connector_changes.mounted = ctx2[0];
      if (dirty & 7680) {
        connector_changes.$$scope = { dirty, ctx: ctx2 };
      }
      connector.$set(connector_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(connector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(connector, detaching);
    }
  };
}
function create_else_block(ctx) {
  let manager;
  let current;
  manager = new Manager({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(manager.$$.fragment);
    },
    l(nodes) {
      claim_component(manager.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(manager, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const manager_changes = {};
      if (dirty & 4096) {
        manager_changes.$$scope = { dirty, ctx: ctx2 };
      }
      manager.$set(manager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(manager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(manager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(manager, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let opened;
  let current;
  opened = new Opened({
    props: {
      $$slots: {
        default: [
          create_default_slot,
          ({ syncKeys }) => ({ 8: syncKeys }),
          ({ syncKeys }) => syncKeys ? 256 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(opened.$$.fragment);
    },
    l(nodes) {
      claim_component(opened.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(opened, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const opened_changes = {};
      if (dirty & 4352) {
        opened_changes.$$scope = { dirty, ctx: ctx2 };
      }
      opened.$set(opened_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(opened.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(opened.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(opened, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let getkeys;
  let current;
  getkeys = new GetKeys({});
  getkeys.$on("loadedKeys", ctx[6]);
  return {
    c() {
      create_component(getkeys.$$.fragment);
    },
    l(nodes) {
      claim_component(getkeys.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(getkeys, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(getkeys.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(getkeys.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(getkeys, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let getkeys;
  let current;
  getkeys = new GetKeys({});
  getkeys.$on("loadedKeys", ctx[5]);
  getkeys.$on("loadedKeys", function() {
    if (is_function(ctx[8]))
      ctx[8].apply(this, arguments);
  });
  return {
    c() {
      create_component(getkeys.$$.fragment);
    },
    l(nodes) {
      claim_component(getkeys.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(getkeys, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      transition_in(getkeys.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(getkeys.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(getkeys, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[8] && create_if_block_2(ctx);
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
    p(ctx2, dirty) {
      if (ctx2[8]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 256) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
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
function create_default_slot(ctx) {
  let manager;
  let current;
  manager = new Manager({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(manager.$$.fragment);
    },
    l(nodes) {
      claim_component(manager.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(manager, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const manager_changes = {};
      if (dirty & 4352) {
        manager_changes.$$scope = { dirty, ctx: ctx2 };
      }
      manager.$set(manager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(manager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(manager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(manager, detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (window == window.top)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type();
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if_block.p(ctx2, dirty);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
const STORED_VALUE = "STORED_VALUE";
const def = null;
function instance($$self, $$props, $$invalidate) {
  let $storedValue;
  component_subscribe($$self, storedValue, ($$value) => $$invalidate(4, $storedValue = $$value));
  let ImmortalDB, save, mounted;
  let syncing;
  onMount(async () => {
    var _a;
    $$invalidate(2, { ImmortalDB } = await __vitePreload(() => import("../chunks/index-17ddc90e.js"), true ? [] : void 0), ImmortalDB);
    const storedString = await ImmortalDB.get(STORED_VALUE, def);
    set_store_value(storedValue, $storedValue = JSON.parse(storedString), $storedValue);
    $$invalidate(3, save = () => {
      ImmortalDB.set(STORED_VALUE, JSON.stringify($storedValue));
    });
    try {
      $$invalidate(1, syncing = window.opener && ((_a = window.opener) == null ? void 0 : _a.origin) === window.location.origin);
    } catch (error) {
    }
    $$invalidate(0, mounted = true);
  });
  function loadedKeys_handler(event) {
    bubble.call(this, $$self, event);
  }
  function loadedKeys_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 28) {
      if (ImmortalDB && $storedValue && save)
        save();
    }
  };
  return [
    mounted,
    syncing,
    ImmortalDB,
    save,
    $storedValue,
    loadedKeys_handler,
    loadedKeys_handler_1
  ];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes as default };
//# sourceMappingURL=index.svelte-94bad526.js.map
