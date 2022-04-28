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
import { SvelteComponent, init, safe_not_equal, empty, insert_hydration, noop, detach, element, text, claim_element, children, claim_text, attr, set_style, toggle_class, append_hydration, listen, set_data, destroy_each, space, claim_space, transition_in, create_component, claim_component, mount_component, transition_out, destroy_component, group_outros, check_outros, add_render_callback, create_bidirectional_transition, onMount } from "../chunks/index-4df20881.js";
import { fade } from "../chunks/index-fc89d724.js";
import { IconX } from "../chunks/x-b1d924ae.js";
import "../chunks/singletons-cdabada9.js";
var Carousel_svelte_svelte_type_style_lang = "";
var Tabs_svelte_svelte_type_style_lang = "";
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function create_else_block(ctx) {
  let div;
  let each_value_1 = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "tabs svelte-8ydbff");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 13) {
        each_value_1 = ctx2[2];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "tabs svelte-8ydbff");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 22) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
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
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_1$1(ctx) {
  let button;
  let t_value = ctx[6].name + "";
  let t;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[5](ctx[6]);
  }
  return {
    c() {
      button = element("button");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, class: true, style: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, t_value);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "class", "tab svelte-8ydbff");
      set_style(button, "--color", ctx[6].color);
      button.disabled = ctx[3];
      toggle_class(button, "active", ctx[0] === ctx[6].name);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 4 && t_value !== (t_value = ctx[6].name + ""))
        set_data(t, t_value);
      if (dirty & 4) {
        set_style(button, "--color", ctx[6].color);
      }
      if (dirty & 8) {
        button.disabled = ctx[3];
      }
      if (dirty & 5) {
        toggle_class(button, "active", ctx[0] === ctx[6].name);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block$1(ctx) {
  let a;
  let div;
  let t0_value = ctx[6].name + "";
  let t0;
  let t1;
  let a_href_value;
  return {
    c() {
      a = element("a");
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      div = claim_element(a_nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      div_nodes.forEach(detach);
      t1 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "tab svelte-8ydbff");
      set_style(div, "--color", ctx[6].color);
      toggle_class(div, "active", ctx[4](ctx[6]));
      attr(a, "href", a_href_value = "#" + new URLSearchParams(__spreadProps(__spreadValues({}, new URL(window.location.href).searchParams), {
        [ctx[1]]: ctx[6].name.toLowerCase()
      })));
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, div);
      append_hydration(div, t0);
      append_hydration(a, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[6].name + ""))
        set_data(t0, t0_value);
      if (dirty & 4) {
        set_style(div, "--color", ctx2[6].color);
      }
      if (dirty & 20) {
        toggle_class(div, "active", ctx2[4](ctx2[6]));
      }
      if (dirty & 6 && a_href_value !== (a_href_value = "#" + new URLSearchParams(__spreadProps(__spreadValues({}, new URL(window.location.href).searchParams), {
        [ctx2[1]]: ctx2[6].name.toLowerCase()
      })))) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return create_if_block$2;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
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
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { queryName = null } = $$props;
  let { tabs } = $$props;
  let { disabled } = $$props;
  let { currentTab } = $$props;
  const isActive = (tab) => {
    const currentQuery = new URL(window.location.href).searchParams[queryName];
    return currentQuery ? currentQuery === tab.name.toLowerCase() : tabs.indexOf(tab) === 0;
  };
  const click_handler = (tab) => $$invalidate(0, currentTab = tab.name);
  $$self.$$set = ($$props2) => {
    if ("queryName" in $$props2)
      $$invalidate(1, queryName = $$props2.queryName);
    if ("tabs" in $$props2)
      $$invalidate(2, tabs = $$props2.tabs);
    if ("disabled" in $$props2)
      $$invalidate(3, disabled = $$props2.disabled);
    if ("currentTab" in $$props2)
      $$invalidate(0, currentTab = $$props2.currentTab);
  };
  return [currentTab, queryName, tabs, disabled, isActive, click_handler];
}
class Tabs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$2, safe_not_equal, {
      queryName: 1,
      tabs: 2,
      disabled: 3,
      currentTab: 0
    });
  }
}
var IconBackground_svelte_svelte_type_style_lang = "";
function instance$2($$self, $$props, $$invalidate) {
  let { data } = $$props;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data];
}
class Notification extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, null, safe_not_equal, { data: 0 });
  }
}
var IconY = "/iframe-wallet-sveltekit/_app/assets/y-229c7801.svg";
var ConnectionCard_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let div;
  let div_transition;
  let current;
  let if_block = ctx[4] && create_if_block_1$1(ctx);
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
      attr(div, "class", "svelte-1uykcud");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$1(ctx2);
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
  var _a;
  let div;
  let t;
  let div_transition;
  let current;
  let if_block0 = ((_a = ctx[2]) == null ? void 0 : _a.length) === 0 && ctx[0].walletId && ctx[0].walletId === ctx[1] && create_if_block_3();
  let if_block1 = ctx[1] !== ctx[0].walletId && create_if_block_2(ctx);
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
      attr(div, "class", "svelte-1uykcud");
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
      var _a2;
      if (((_a2 = ctx2[2]) == null ? void 0 : _a2.length) === 0 && ctx2[0].walletId && ctx2[0].walletId === ctx2[1]) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_3();
          if_block0.c();
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[1] !== ctx2[0].walletId) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 3) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx2);
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
      transition_in(if_block1);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block1);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fade, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_if_block_3(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text("Connected");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "Connected");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "box status fade-list-item svelte-1uykcud");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let notification;
  let current;
  notification = new Notification({
    props: {
      data: ctx[3],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(notification.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(notification.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "box fade-list-item");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(notification, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const notification_changes = {};
      if (dirty & 8)
        notification_changes.data = ctx2[3];
      if (dirty & 131080) {
        notification_changes.$$scope = { dirty, ctx: ctx2 };
      }
      notification.$set(notification_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(notification.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(notification.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(notification);
    }
  };
}
function create_default_slot(ctx) {
  let t_value = ctx[3].content + "";
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
      if (dirty & 8 && t_value !== (t_value = ctx2[3].content + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$1(ctx) {
  let div4;
  let div3;
  let tabs_1;
  let t;
  let div2;
  let div1;
  let div0;
  let current;
  tabs_1 = new Tabs({
    props: {
      tabs: ctx[6],
      currentTab: ctx[5],
      disabled: !ctx[1]
    }
  });
  let if_block = ctx[5] === "Requests" && create_if_block$1(ctx);
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      create_component(tabs_1.$$.fragment);
      t = space();
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true, style: true });
      var div3_nodes = children(div3);
      claim_component(tabs_1.$$.fragment, div3_nodes);
      t = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "content svelte-1uykcud");
      attr(div1, "class", "container-scroll svelte-1uykcud");
      attr(div2, "class", "container svelte-1uykcud");
      attr(div3, "class", "flex-column");
      set_style(div3, "flex", "1 1 0");
      attr(div4, "class", "connection-card flex-column no-scrollbar svelte-1uykcud");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      mount_component(tabs_1, div3, null);
      append_hydration(div3, t);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      if (if_block)
        if_block.m(div0, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const tabs_1_changes = {};
      if (dirty & 32)
        tabs_1_changes.currentTab = ctx2[5];
      if (dirty & 2)
        tabs_1_changes.disabled = !ctx2[1];
      tabs_1.$set(tabs_1_changes);
      if (ctx2[5] === "Requests") {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div0, null);
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
      transition_in(tabs_1.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(tabs_1.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(tabs_1);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let defaultId;
  let isSelectingWallet;
  let currentId;
  let currentTab;
  let connectData;
  let connectionFeed;
  let { state } = $$props;
  let Wallets, Connect, Channel;
  onMount(async () => {
    $$invalidate(7, { Connect, Wallets, Channel } = await __vitePreload(() => import("../chunks/index-7a951cd6.js"), true ? [] : void 0), Wallets);
  });
  const tabs = [{ name: "Requests", color: "var(--orange)" }];
  const connect = () => {
    $$invalidate(4, isSelectingWallet = false);
    $$invalidate(0, state.walletId = currentId + "", state);
  };
  const goBack = () => {
    if (!state.walletId) {
      return;
    }
    $$invalidate(4, isSelectingWallet = false);
    $$invalidate(1, currentId = state.walletId);
  };
  const selectWallet = () => {
    var _a;
    if (!isSelectingWallet) {
      $$invalidate(4, isSelectingWallet = true);
      return;
    }
    $$invalidate(1, currentId = state.walletId || ((_a = Wallets[0]) == null ? void 0 : _a.id));
    $$invalidate(4, isSelectingWallet = false);
  };
  const connectD = () => {
    var _a;
    const content = !state.walletId ? `Connect to ${((_a = state.appInfo) == null ? void 0 : _a.name) || state.origin} from the account ${currentId}` : `Switch to ${currentId}`;
    return {
      title: state.walletId ? "Switch" : "Connect",
      timestamp: Date.now(),
      actions: [
        {
          name: "Connect",
          icon: IconY,
          run: connect
        },
        {
          name: !state.walletId ? "Switch" : "Cancel",
          icon: IconX,
          run: !state.walletId ? selectWallet : goBack
        }
      ],
      expanded: true,
      content
    };
  };
  const getConnectionFeed = () => {
    var _a;
    return currentId === state.walletId ? (_a = state.messageQueue) == null ? void 0 : _a.filter((m) => !m.fulfilled) : [];
  };
  $$self.$$set = ($$props2) => {
    if ("state" in $$props2)
      $$invalidate(0, state = $$props2.state);
  };
  $$self.$$.update = () => {
    var _a;
    if ($$self.$$.dirty & 128) {
      $$invalidate(8, defaultId = Wallets ? (_a = Wallets[0]) == null ? void 0 : _a.id : 0);
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(4, isSelectingWallet = !state.walletId);
    }
    if ($$self.$$.dirty & 257) {
      $$invalidate(1, currentId = state.walletId || defaultId);
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(5, currentTab = currentId ? tabs[0].name : null);
    }
  };
  $$invalidate(3, connectData = connectD());
  $$invalidate(2, connectionFeed = getConnectionFeed());
  return [
    state,
    currentId,
    connectionFeed,
    connectData,
    isSelectingWallet,
    currentTab,
    tabs,
    Wallets,
    defaultId
  ];
}
class ConnectionCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { state: 0 });
  }
}
var connect_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  child_ctx[12] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  child_ctx[15] = i;
  return child_ctx;
}
function create_if_block_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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
        each_value_1 = ctx2[0];
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
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block_1(ctx) {
  let div1;
  let div0;
  let connectioncard;
  let t;
  let current;
  connectioncard = new ConnectionCard({ props: { state: ctx[13] } });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      create_component(connectioncard.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(connectioncard.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "box");
      attr(div1, "class", "connection-card-container fade-list-item svelte-1wz7ybk");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      mount_component(connectioncard, div0, null);
      append_hydration(div1, t);
      current = true;
    },
    p(ctx2, dirty) {
      const connectioncard_changes = {};
      if (dirty & 1)
        connectioncard_changes.state = ctx2[13];
      connectioncard.$set(connectioncard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(connectioncard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(connectioncard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(connectioncard);
    }
  };
}
function create_if_block(ctx) {
  var _a;
  let div1;
  let div0;
  let t0;
  let t1_value = Object.keys(ctx[1].states).length + "";
  let t1;
  let t2;
  let each_value = (_a = ctx[1]) == null ? void 0 : _a.states;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text("All Channels ");
      t1 = text(t1_value);
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "All Channels ");
      t1 = claim_text(div0_nodes, t1_value);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "bottom-info secondary-text svelte-1wz7ybk");
      set_style(div1, "opacity", "0.0");
      set_style(div1, "pointer-events", "none");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div1, t2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & 2 && t1_value !== (t1_value = Object.keys(ctx2[1].states).length + ""))
        set_data(t1, t1_value);
      if (dirty & 2) {
        each_value = (_a2 = ctx2[1]) == null ? void 0 : _a2.states;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div1, null);
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
        detach(div1);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let div;
  let t_value = { extState: ctx[10] } + "";
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = { extState: ctx2[10] } + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  var _a, _b, _c;
  let t0;
  let div1;
  let div0;
  let t1;
  let current;
  let if_block0 = ((_a = ctx[0]) == null ? void 0 : _a.length) && create_if_block_1(ctx);
  let if_block1 = ((_c = (_b = ctx[1]) == null ? void 0 : _b.states) == null ? void 0 : _c.length) && create_if_block(ctx);
  return {
    c() {
      t0 = text("CONNECT\r\n\r\n");
      div1 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "CONNECT\r\n\r\n");
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "connectors svelte-1wz7ybk");
      attr(div1, "class", "connect flex-column svelte-1wz7ybk");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div1, t1);
      if (if_block1)
        if_block1.m(div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2, _c2;
      if ((_a2 = ctx2[0]) == null ? void 0 : _a2.length) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if ((_c2 = (_b2 = ctx2[1]) == null ? void 0 : _b2.states) == null ? void 0 : _c2.length) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let Connect, Wallets, Channel;
  let state;
  let connectors;
  onMount(async () => {
    await __vitePreload(() => import("../chunks/InterfaceStore-5914e925.js"), true ? ["chunks/InterfaceStore-5914e925.js","chunks/utils-d62053b9.js","chunks/index-5327d83b.js","chunks/index-4df20881.js"] : void 0);
    $$invalidate(1, { Connect, Wallets, Channel } = await __vitePreload(() => import("../chunks/index-7a951cd6.js"), true ? [] : void 0), Channel);
    console.log({ Channel, Connect });
    $$invalidate(2, state = Connect.state);
    $$invalidate(0, connectors = Connect.connectors());
    console.log({ connectors });
  });
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 5) {
      connectors == null ? void 0 : connectors.findIndex((value) => value.origin === state.origin && value.session === state.session);
    }
  };
  return [connectors, Channel, state];
}
class Connect_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Connect_1 as default };
//# sourceMappingURL=connect.svelte-5b4ff70d.js.map
