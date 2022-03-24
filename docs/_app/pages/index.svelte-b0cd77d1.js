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
import { writable, SvelteComponent, init, safe_not_equal, empty, insert_hydration, group_outros, transition_out, check_outros, transition_in, detach, element, claim_element, children, attr, listen, is_function, component_subscribe, onMount, CONSTANTS, set_store_value, globals, text, claim_text, append_hydration, prevent_default, set_data, noop, create_slot, update_slot_base, get_all_dirty_from_scope, get_slot_changes, space, claim_space, binding_callbacks, svg_element, claim_svg_element, add_render_callback, create_in_transition, create_out_transition, fade, create_component, claim_component, mount_component, destroy_component, destroy_each, createEventDispatcher, generateMnemonic, loadMnemonicInProxcryptor, getLoadedKeys, HtmlTagHydration, claim_html_tag, set_style, add_resize_listener, run_all, bubble, handlers } from "../chunks/vendor-19fdf801.js";
const storedValue = writable();
var Connector_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_if_block$7(ctx) {
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
function create_fragment$c(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$7(ctx);
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
          if_block = create_if_block$7(ctx);
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
function instance$c($$self, $$props, $$invalidate) {
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
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { mounted: 0 });
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
function create_if_block$6(ctx) {
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
function create_fragment$b(ctx) {
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
  const if_block_creators = [create_if_block$6, create_else_block$2];
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
function instance$b($$self, $$props, $$invalidate) {
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
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { value: 3 });
  }
}
var ListKeys_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_if_block$5(ctx) {
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
function create_each_block_1(ctx) {
  let li;
  let clipboard;
  let t0;
  let t1_value = shorten(ctx[6].publicKeyJWK.kid) + "";
  let t1;
  let t2;
  let li_class_value;
  let current;
  clipboard = new Clipboard({});
  return {
    c() {
      li = element("li");
      create_component(clipboard.$$.fragment);
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      claim_component(clipboard.$$.fragment, li_nodes);
      t0 = claim_space(li_nodes);
      t1 = claim_text(li_nodes, t1_value);
      t2 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", li_class_value = (ctx[2] && ctx[1] != ctx[6].kid ? "hide" : "") + " list-group-item list-group-item-action svelte-1sckwml");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      mount_component(clipboard, li, null);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, t2);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = shorten(ctx2[6].publicKeyJWK.kid) + ""))
        set_data(t1, t1_value);
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
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
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
function create_each_block$1(ctx) {
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
function create_fragment$a(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && ctx[0].length > 0 && create_if_block$5(ctx);
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
          if_block = create_if_block$5(ctx2);
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
function instance$a($$self, $$props, $$invalidate) {
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
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { keys: 0 });
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
function create_if_block$4(ctx) {
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
function create_fragment$9(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$1];
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
function instance$9($$self, $$props, $$invalidate) {
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
      const mnemonic = await generateMnemonic();
      set_store_value(storedValue, $storedValue = __spreadProps(__spreadValues({}, $storedValue), { mnemonic }), $storedValue);
      $$invalidate(2, creating += "<br/>Created mnemonic.");
      $$invalidate(2, creating += `<br/>${mnemonic}`);
      $$invalidate(2, creating += "<br/>Creating master keypair (type ed25519)...");
    });
  });
  async function loadKeys() {
    await loadMnemonicInProxcryptor($storedValue.mnemonic);
    dispatch("loadedKeys", "details");
    $$invalidate(3, keys = getLoadedKeys$1());
  }
  function getLoadedKeys$1() {
    return getLoadedKeys();
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
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
  }
}
var AutoSizer_svelte_svelte_type_style_lang = "";
const get_default_slot_changes$1 = (dirty) => ({ walletReady: dirty & 8 });
const get_default_slot_context$1 = (ctx) => ({
  walletReady: ctx[3],
  show: ctx[4],
  hide: ctx[5]
});
function create_if_block$3(ctx) {
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
function create_fragment$8(ctx) {
  let div;
  let div_resize_listener;
  let current;
  let if_block = ctx[3] && create_if_block$3(ctx);
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
          if_block = create_if_block$3(ctx2);
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
function instance$8($$self, $$props, $$invalidate) {
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
    ({ Connection } = await __vitePreload(() => import("../chunks/vendor-19fdf801.js").then(function(n) {
      return n.index;
    }), true ? [] : void 0));
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
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
function create_fragment$7(ctx) {
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
function instance$7($$self, $$props, $$invalidate) {
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
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
  }
}
const get_default_slot_changes = (dirty) => ({ syncKeys: dirty & 2 });
const get_default_slot_context = (ctx) => ({ syncKeys: ctx[1] });
function create_if_block$2(ctx) {
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
function create_fragment$6(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && !ctx[2] && create_if_block$2(ctx);
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
          if_block = create_if_block$2(ctx2);
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
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
  }
}
var DefaultConfirmation_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
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
      t4 = text("No");
      t5 = space();
      button1 = element("button");
      t6 = text("Yes");
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
      t4 = claim_text(button0_nodes, "No");
      button0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t6 = claim_text(button1_nodes, "Yes");
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-14rsard");
      attr(button0, "class", "yellow svelte-14rsard");
      attr(button1, "class", "green svelte-14rsard");
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
            if (is_function(ctx[2]))
              ctx[2].apply(this, arguments);
          }),
          listen(button1, "click", function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 1 && t1_value !== (t1_value = ctx[0].method + ""))
        set_data(t1, t1_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
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
  };
  return [props, handleConfirmed, handleDenied];
}
class DefaultConfirmation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
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
function create_fragment$4(ctx) {
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
function instance$4($$self, $$props, $$invalidate) {
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
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { props: 0 });
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
      t4 = text("No");
      t5 = space();
      button1 = element("button");
      t6 = text("Yes");
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
      t4 = claim_text(button0_nodes, "No");
      button0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t6 = claim_text(button1_nodes, "Yes");
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
            if (is_function(ctx[2]))
              ctx[2].apply(this, arguments);
          })),
          listen(button1, "click", prevent_default(function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
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
    sign: {}
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
//# sourceMappingURL=index.svelte-b0cd77d1.js.map
