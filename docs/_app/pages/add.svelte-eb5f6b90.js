import { __vitePreload } from "../chunks/preload-helper-c37781a6.js";
import { SvelteComponent, init, safe_not_equal, element, claim_element, children, detach, insert_hydration, group_outros, transition_out, check_outros, transition_in, add_render_callback, create_bidirectional_transition, attr, onMount, src_url_equal, listen, noop, text, claim_text, append_hydration, set_data, svg_element, claim_svg_element, set_style, toggle_class, create_component, empty, claim_component, mount_component, destroy_component, create_slot, space, claim_space, update_slot_base, get_all_dirty_from_scope, get_slot_changes, createEventDispatcher, set_input_value, run_all, subscribe, destroy_each, is_function } from "../chunks/index-4df20881.js";
import { IconX, goto } from "../chunks/x-b1d924ae.js";
import { fade } from "../chunks/index-fc89d724.js";
import { DragOverlay, IconCloud } from "../chunks/DragOverlay-08e56bd7.js";
import "../chunks/singletons-cdabada9.js";
function create_if_block$3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_transition;
  let current;
  const if_block_creators = [create_if_block_1$2, create_if_block_2$2, create_if_block_3$1, create_if_block_4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[7])
      return 0;
    if (ctx2[1] == "loader")
      return 1;
    if (ctx2[6])
      return 2;
    if (ctx2[3])
      return 3;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_if_block_4(ctx) {
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", {
        alt: true,
        class: true,
        id: true,
        src: true
      });
      this.h();
    },
    h() {
      attr(img, "alt", "loaded");
      attr(img, "class", "img no-select svelte-vzgsc1");
      attr(img, "id", "iconData");
      if (!src_url_equal(img.src, img_src_value = ctx[1]))
        attr(img, "src", img_src_value);
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
      if (!mounted) {
        dispose = listen(img, "load", ctx[13]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && !src_url_equal(img.src, img_src_value = ctx2[1])) {
        attr(img, "src", img_src_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[1]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "symbol no-select svelte-vzgsc1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$2(ctx) {
  let svg;
  let circle0;
  let circle1;
  let mounted;
  let dispose;
  return {
    c() {
      svg = svg_element("svg");
      circle0 = svg_element("circle");
      circle1 = svg_element("circle");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        class: true,
        height: true,
        width: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      circle0 = claim_svg_element(svg_nodes, "circle", {
        stroke: true,
        "stroke-width": true,
        fill: true,
        r: true,
        cx: true,
        cy: true,
        class: true
      });
      children(circle0).forEach(detach);
      circle1 = claim_svg_element(svg_nodes, "circle", {
        stroke: true,
        "stroke-dasharray": true,
        style: true,
        "stroke-width": true,
        "stroke-linecap": true,
        fill: true,
        r: true,
        cx: true,
        cy: true,
        class: true
      });
      children(circle1).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(circle0, "stroke", "#ffffff22");
      attr(circle0, "stroke-width", thickness);
      attr(circle0, "fill", "transparent");
      attr(circle0, "r", ctx[8]);
      attr(circle0, "cx", "50");
      attr(circle0, "cy", "50");
      attr(circle0, "class", "svelte-vzgsc1");
      attr(circle1, "stroke", "currentColor");
      attr(circle1, "stroke-dasharray", ctx[9] + " " + ctx[9]);
      set_style(circle1, "strokeDashoffset", ctx[5]);
      attr(circle1, "stroke-width", thickness);
      attr(circle1, "stroke-linecap", "round");
      attr(circle1, "fill", "transparent");
      attr(circle1, "r", ctx[8]);
      attr(circle1, "cx", "50");
      attr(circle1, "cy", "50");
      attr(circle1, "class", "svelte-vzgsc1");
      toggle_class(circle1, "spin", ctx[10] == null || ctx[4]);
      attr(svg, "class", "loader svelte-vzgsc1");
      attr(svg, "height", "100");
      attr(svg, "width", "100");
      attr(svg, "viewBox", "0 0 100 100");
      toggle_class(svg, "spin", ctx[10] == null);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, circle0);
      append_hydration(svg, circle1);
      if (!mounted) {
        dispose = listen(circle1, "animationiteration", ctx[12]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 32) {
        set_style(circle1, "strokeDashoffset", ctx2[5]);
      }
      if (dirty & 1040) {
        toggle_class(circle1, "spin", ctx2[10] == null || ctx2[4]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[7];
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[7])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
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
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let span;
  let current;
  let if_block = ctx[2] && create_if_block$3(ctx);
  return {
    c() {
      span = element("span");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true, style: true });
      var span_nodes = children(span);
      if (if_block)
        if_block.l(span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "icon svelte-vzgsc1");
      attr(span, "style", ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (if_block)
        if_block.m(span, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(span, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 1) {
        attr(span, "style", ctx2[0]);
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
        detach(span);
      if (if_block)
        if_block.d();
    }
  };
}
const thickness = 5;
function instance$3($$self, $$props, $$invalidate) {
  let iconData;
  let component;
  let isSymbol;
  let strokeDashoffset;
  let { icon } = $$props;
  let { style } = $$props;
  let mounted;
  onMount(() => {
    $$invalidate(2, mounted = true);
  });
  const normalizedRadius = 50 - thickness / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  let progress;
  let loaded = false;
  let finishAnimation = false;
  const animationiteration_handler = () => $$invalidate(4, finishAnimation = false);
  const load_handler = () => $$invalidate(3, loaded = true);
  $$self.$$set = ($$props2) => {
    if ("icon" in $$props2)
      $$invalidate(11, icon = $$props2.icon);
    if ("style" in $$props2)
      $$invalidate(0, style = $$props2.style);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2048) {
      $$invalidate(1, iconData = icon ? icon : icon);
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(7, component = typeof iconData === "object" ? iconData : null);
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(6, isSymbol = typeof iconData === "string" && iconData.length <= 2);
    }
    if ($$self.$$.dirty & 2) {
      if (iconData)
        $$invalidate(3, loaded = false);
    }
  };
  $$invalidate(5, strokeDashoffset = circumference - 25 / 100 * circumference);
  return [
    style,
    iconData,
    mounted,
    loaded,
    finishAnimation,
    strokeDashoffset,
    isSymbol,
    component,
    normalizedRadius,
    circumference,
    progress,
    icon,
    animationiteration_handler,
    load_handler
  ];
}
class Icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { icon: 11, style: 0 });
  }
}
var Button_svelte_svelte_type_style_lang = "";
function create_if_block$2(ctx) {
  let icon_1;
  let current;
  icon_1 = new Icon({
    props: { icon: ctx[0], style: "" }
  });
  return {
    c() {
      create_component(icon_1.$$.fragment);
    },
    l(nodes) {
      claim_component(icon_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 1)
        icon_1_changes.icon = ctx2[0];
      icon_1.$set(icon_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon_1, detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let button;
  let t;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$2(ctx);
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true, type: true });
      var button_nodes = children(button);
      if (if_block)
        if_block.l(button_nodes);
      t = claim_space(button_nodes);
      if (default_slot)
        default_slot.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "button no-select svelte-vr3ar2");
      attr(button, "type", "button");
      button.disabled = ctx[1];
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      append_hydration(button, t);
      if (default_slot) {
        default_slot.m(button, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(button, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      if (!current || dirty & 2) {
        button.disabled = ctx2[1];
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { icon } = $$props;
  let { disabled } = $$props;
  const dispatch = createEventDispatcher();
  const click_handler = () => dispatch("click", "click");
  $$self.$$set = ($$props2) => {
    if ("icon" in $$props2)
      $$invalidate(0, icon = $$props2.icon);
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [icon, disabled, dispatch, $$scope, slots, click_handler];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { icon: 0, disabled: 1 });
  }
}
var LogoArweave = "/iframe-wallet-sveltekit/_app/assets/arweave-b1986487.svg";
var IconText = "/iframe-wallet-sveltekit/_app/assets/text-d6562c29.svg";
var IconDrop = "/iframe-wallet-sveltekit/_app/assets/drop-a962c628.svg";
var InputData_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let textarea;
  let t0;
  let current_block_type_index;
  let if_block;
  let t1;
  let dragoverlay;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_1$1, create_if_block_2$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[0] && !ctx2[7])
      return 0;
    if (ctx2[6])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  dragoverlay = new DragOverlay({});
  return {
    c() {
      textarea = element("textarea");
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      create_component(dragoverlay.$$.fragment);
      this.h();
    },
    l(nodes) {
      textarea = claim_element(nodes, "TEXTAREA", { id: true, placeholder: true, class: true });
      children(textarea).forEach(detach);
      t0 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      t1 = claim_space(nodes);
      claim_component(dragoverlay.$$.fragment, nodes);
      this.h();
    },
    h() {
      textarea.disabled = ctx[2];
      attr(textarea, "id", ctx[3]);
      attr(textarea, "placeholder", ctx[4]);
      attr(textarea, "class", "svelte-16htx7s");
    },
    m(target, anchor) {
      insert_hydration(target, textarea, anchor);
      set_input_value(textarea, ctx[0]);
      insert_hydration(target, t0, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      mount_component(dragoverlay, target, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(textarea, "focus", ctx[10]),
          listen(textarea, "blur", ctx[11]),
          listen(textarea, "input", ctx[12])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & 4) {
        textarea.disabled = ctx2[2];
      }
      if (!current || dirty & 8) {
        attr(textarea, "id", ctx2[3]);
      }
      if (!current || dirty & 16) {
        attr(textarea, "placeholder", ctx2[4]);
      }
      if (dirty & 1) {
        set_input_value(textarea, ctx2[0]);
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(t1.parentNode, t1);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(dragoverlay.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(dragoverlay.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(textarea);
      if (detaching)
        detach(t0);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(t1);
      destroy_component(dragoverlay, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$1(ctx) {
  let div2;
  let div0;
  let img0;
  let img0_src_value;
  let t;
  let button;
  let div1;
  let img1;
  let img1_src_value;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      img0 = element("img");
      t = space();
      button = element("button");
      div1 = element("div");
      img1 = element("img");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", { src: true, class: true, alt: true });
      div0_nodes.forEach(detach);
      t = claim_space(div2_nodes);
      button = claim_element(div2_nodes, "BUTTON", { class: true, type: true });
      var button_nodes = children(button);
      div1 = claim_element(button_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img1 = claim_element(div1_nodes, "IMG", { src: true, class: true, alt: true });
      div1_nodes.forEach(detach);
      button_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = IconCloud))
        attr(img0, "src", img0_src_value);
      attr(img0, "class", "img svelte-16htx7s");
      attr(img0, "alt", "icon cloud");
      attr(div0, "class", "big-icon-container focus svelte-16htx7s");
      if (!src_url_equal(img1.src, img1_src_value = IconX))
        attr(img1, "src", img1_src_value);
      attr(img1, "class", "icon no-select svelte-16htx7s");
      attr(img1, "alt", "x");
      attr(div1, "class", "icon-container svelte-16htx7s");
      attr(button, "class", "clear svelte-16htx7s");
      attr(button, "type", "button");
      attr(div2, "class", "overlay svelte-16htx7s");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, img0);
      append_hydration(div2, t);
      append_hydration(div2, button);
      append_hydration(button, div1);
      append_hydration(div1, img1);
      if (!mounted) {
        dispose = listen(button, "click", ctx[14]);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$1(ctx) {
  let div3;
  let div0;
  let img0;
  let img0_src_value;
  let t0;
  let div1;
  let t1;
  let div2;
  let label;
  let img1;
  let img1_src_value;
  let t2;
  let input;
  let div3_transition;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      img0 = element("img");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      label = element("label");
      img1 = element("img");
      t2 = space();
      input = element("input");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", { src: true, class: true, alt: true });
      div0_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      img1 = claim_element(label_nodes, "IMG", { src: true, class: true, alt: true });
      label_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", { type: true, id: true, class: true });
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = IconText))
        attr(img0, "src", img0_src_value);
      attr(img0, "class", "img svelte-16htx7s");
      attr(img0, "alt", "icon");
      attr(div0, "class", "big-icon-container svelte-16htx7s");
      attr(div1, "class", "spacer svelte-16htx7s");
      if (!src_url_equal(img1.src, img1_src_value = IconDrop))
        attr(img1, "src", img1_src_value);
      attr(img1, "class", "img svelte-16htx7s");
      attr(img1, "alt", "drop file");
      attr(label, "for", "file-picker");
      attr(label, "class", "file-picker-label svelte-16htx7s");
      attr(input, "type", "file");
      attr(input, "id", "file-picker");
      attr(input, "class", "file-input svelte-16htx7s");
      input.disabled = ctx[2];
      attr(div2, "class", "big-icon-container not-passthrough svelte-16htx7s");
      attr(div3, "class", "overlay passthrough svelte-16htx7s");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, img0);
      append_hydration(div3, t0);
      append_hydration(div3, div1);
      append_hydration(div3, t1);
      append_hydration(div3, div2);
      append_hydration(div2, label);
      append_hydration(label, img1);
      append_hydration(div2, t2);
      append_hydration(div2, input);
      current = true;
      if (!mounted) {
        dispose = listen(input, "change", ctx[13]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & 4) {
        input.disabled = ctx2[2];
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!div3_transition)
          div3_transition = create_bidirectional_transition(div3, fade, {}, true);
        div3_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!div3_transition)
        div3_transition = create_bidirectional_transition(div3, fade, {}, false);
      div3_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      if (detaching && div3_transition)
        div3_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  let if_block = !ctx[6] && create_if_block$1(ctx);
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
      attr(div, "class", "input-data input-box svelte-16htx7s");
      toggle_class(div, "focus", ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
      if (!mounted) {
        dispose = listen(div, "drop", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!ctx2[6]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 64) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
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
      if (dirty & 2) {
        toggle_class(div, "focus", ctx2[1]);
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
function instance$1($$self, $$props, $$invalidate) {
  let isFile;
  let $dragOverlay, $$unsubscribe_dragOverlay = noop, $$subscribe_dragOverlay = () => ($$unsubscribe_dragOverlay(), $$unsubscribe_dragOverlay = subscribe(dragOverlay, ($$value) => $$invalidate(7, $dragOverlay = $$value)), dragOverlay);
  $$self.$$.on_destroy.push(() => $$unsubscribe_dragOverlay());
  let { passphraseInput } = $$props;
  let { disabled, id, placeholder, focus } = $$props;
  let model, emit;
  let dragOverlay;
  onMount(async () => {
    $$subscribe_dragOverlay($$invalidate(5, { dragOverlay } = await __vitePreload(() => import("../chunks/InterfaceStore-5914e925.js"), true ? ["chunks/InterfaceStore-5914e925.js","chunks/utils-d62053b9.js","chunks/index-5327d83b.js","chunks/index-4df20881.js"] : void 0), dragOverlay));
  });
  const handleFiles = (e) => {
    var _a, _b;
    if (disabled) {
      return;
    }
    if ((_a = e.dataTransfer) == null ? void 0 : _a.files) {
      return emit("files", e.dataTransfer.files);
    }
    if ((_b = e.target) == null ? void 0 : _b.files) {
      return emit("files", e.target.files);
    }
  };
  const clearFiles = () => {
    emit("files", null);
  };
  const focus_handler = (_) => $$invalidate(1, focus = 1);
  const blur_handler = (_) => $$invalidate(1, focus = 0);
  function textarea_input_handler() {
    passphraseInput = this.value;
    $$invalidate(0, passphraseInput);
  }
  const change_handler = (_) => handleFiles;
  const click_handler = (_) => clearFiles;
  $$self.$$set = ($$props2) => {
    if ("passphraseInput" in $$props2)
      $$invalidate(0, passphraseInput = $$props2.passphraseInput);
    if ("disabled" in $$props2)
      $$invalidate(2, disabled = $$props2.disabled);
    if ("id" in $$props2)
      $$invalidate(3, id = $$props2.id);
    if ("placeholder" in $$props2)
      $$invalidate(4, placeholder = $$props2.placeholder);
    if ("focus" in $$props2)
      $$invalidate(1, focus = $$props2.focus);
  };
  $$invalidate(6, isFile = typeof model === "object");
  return [
    passphraseInput,
    focus,
    disabled,
    id,
    placeholder,
    dragOverlay,
    isFile,
    $dragOverlay,
    handleFiles,
    clearFiles,
    focus_handler,
    blur_handler,
    textarea_input_handler,
    change_handler,
    click_handler
  ];
}
class InputData extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      passphraseInput: 0,
      disabled: 2,
      id: 3,
      placeholder: 4,
      focus: 1
    });
  }
}
var add_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      icon: "",
      disabled: !ctx[4] || ctx[3],
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[11]);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 24)
        button_changes.disabled = !ctx2[4] || ctx2[3];
      if (dirty & 4194304) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      disabled: ctx[2] == null,
      icon: ctx[2] == null ? "loader" : "",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[8]);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 4)
        button_changes.disabled = ctx2[2] == null;
      if (dirty & 4)
        button_changes.icon = ctx2[2] == null ? "loader" : "";
      if (dirty & 4194308) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  var _a;
  let button;
  let current;
  button = new Button({
    props: {
      disabled: ((_a = ctx[0]) == null ? void 0 : _a.length) && !ctx[4],
      icon: LogoArweave,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[12]);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2;
      const button_changes = {};
      if (dirty & 17)
        button_changes.disabled = ((_a2 = ctx2[0]) == null ? void 0 : _a2.length) && !ctx2[4];
      if (dirty & 4194304) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Import passphrase");
    },
    l(nodes) {
      t = claim_text(nodes, "Import passphrase");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3(ctx) {
  let t_value = ctx[2] == null ? "Generating, write down the passphrase" : "Passphrase saved? Click here to proceed";
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
      if (dirty & 4 && t_value !== (t_value = ctx2[2] == null ? "Generating, write down the passphrase" : "Passphrase saved? Click here to proceed"))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("Create New Wallet");
    },
    l(nodes) {
      t = claim_text(nodes, "Create New Wallet");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[5].message + "";
  let t1;
  let t2;
  let div1;
  let div2_transition;
  let current;
  let if_block = ctx[5].icon && create_if_block_1(ctx);
  let each_value_1 = ctx[5].actions;
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
      if (if_block)
        if_block.c();
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { style: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      t1 = claim_text(div0_nodes, t1_value);
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(div0, "flex", "1 1 auto");
      set_style(div0, "display", "flex");
      set_style(div0, "flex-direction", "column");
      set_style(div0, "align-items", "center");
      set_style(div0, "justify-content", "space-evenly");
      set_style(div0, "margin-bottom", "var(--spacing)");
      attr(div1, "class", "actions-container flex-row svelte-u2idrj");
      attr(div2, "class", "overlay flex-column svelte-u2idrj");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if (if_block)
        if_block.m(div0, null);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[5].icon) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div0, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if ((!current || dirty & 32) && t1_value !== (t1_value = ctx2[5].message + ""))
        set_data(t1, t1_value);
      if (dirty & 32) {
        each_value_1 = ctx2[5].actions;
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
            each_blocks[i].m(div1, null);
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
      transition_in(if_block);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      add_render_callback(() => {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, fade, {}, true);
        div2_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      if (!div2_transition)
        div2_transition = create_bidirectional_transition(div2, fade, {}, false);
      div2_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      if (detaching && div2_transition)
        div2_transition.end();
    }
  };
}
function create_if_block_1(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      icon: ctx[5].icon,
      style: "font-size: 2em;"
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_changes = {};
      if (dirty & 32)
        icon_changes.icon = ctx2[5].icon;
      icon.$set(icon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t_value = ctx[19].name + "";
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
      if (dirty & 32 && t_value !== (t_value = ctx2[19].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      icon: "",
      disabled: false,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  button.$on("click", function() {
    if (is_function(ctx[19].action))
      ctx[19].action.apply(this, arguments);
  });
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const button_changes = {};
      if (dirty & 4194336) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t0_value = ctx[16].name + "";
  let t0;
  let t1;
  let t2_value = !ctx[16].isSupported ? " not supported for this browser" : "";
  let t2;
  let t3;
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      t3 = space();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      t2 = claim_text(nodes, t2_value);
      t3 = claim_space(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
    }
  };
}
function create_each_block(ctx) {
  let button;
  let current;
  function click_handler_1() {
    return ctx[13](ctx[16]);
  }
  button = new Button({
    props: {
      disabled: !ctx[16].isSupported,
      icon: ctx[16].icon,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  button.$on("click", click_handler_1);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const button_changes = {};
      if (dirty & 4194304) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div4;
  let div2;
  let h20;
  let span0;
  let t0;
  let t1;
  let span1;
  let t2;
  let t3;
  let div1;
  let inputdata;
  let t4;
  let div0;
  let t5;
  let current_block_type_index;
  let if_block0;
  let t6;
  let t7;
  let div3;
  let h21;
  let t8;
  let t9;
  let current;
  inputdata = new InputData({
    props: {
      passphraseInput: ctx[0],
      disabled: ctx[1],
      placeholder: "Import passphrase or key file",
      id: "",
      focus: ""
    }
  });
  inputdata.$on("files", ctx[10]);
  const if_block_creators = [create_if_block_2, create_if_block_3, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    var _a;
    if (!ctx2[1] && !((_a = ctx2[0]) == null ? void 0 : _a.length))
      return 0;
    if (ctx2[1])
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = ctx[5].enabled && create_if_block(ctx);
  let each_value = ctx[6];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div4 = element("div");
      div2 = element("div");
      h20 = element("h2");
      span0 = element("span");
      t0 = text("Passphrase");
      t1 = space();
      span1 = element("span");
      t2 = text("Key file");
      t3 = space();
      div1 = element("div");
      create_component(inputdata.$$.fragment);
      t4 = space();
      div0 = element("div");
      t5 = space();
      if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      t7 = space();
      div3 = element("div");
      h21 = element("h2");
      t8 = text("Hardware");
      t9 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h20 = claim_element(div2_nodes, "H2", { style: true });
      var h20_nodes = children(h20);
      span0 = claim_element(h20_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "Passphrase");
      span0_nodes.forEach(detach);
      t1 = claim_space(h20_nodes);
      span1 = claim_element(h20_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "Key file");
      span1_nodes.forEach(detach);
      h20_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(inputdata.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      children(div0).forEach(detach);
      t5 = claim_space(div1_nodes);
      if_block0.l(div1_nodes);
      div1_nodes.forEach(detach);
      t6 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      div2_nodes.forEach(detach);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h21 = claim_element(div3_nodes, "H2", {});
      var h21_nodes = children(h21);
      t8 = claim_text(h21_nodes, "Hardware");
      h21_nodes.forEach(detach);
      t9 = claim_space(div3_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div3_nodes);
      }
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(h20, "display", "flex");
      set_style(h20, "justify-content", "space-between");
      attr(div1, "class", "flex-column");
      attr(div2, "class", "card svelte-u2idrj");
      attr(div3, "class", "card svelte-u2idrj");
      attr(div4, "class", "add-wallet flex-column svelte-u2idrj");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div2);
      append_hydration(div2, h20);
      append_hydration(h20, span0);
      append_hydration(span0, t0);
      append_hydration(h20, t1);
      append_hydration(h20, span1);
      append_hydration(span1, t2);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      mount_component(inputdata, div1, null);
      append_hydration(div1, t4);
      append_hydration(div1, div0);
      append_hydration(div1, t5);
      if_blocks[current_block_type_index].m(div1, null);
      append_hydration(div2, t6);
      if (if_block1)
        if_block1.m(div2, null);
      append_hydration(div4, t7);
      append_hydration(div4, div3);
      append_hydration(div3, h21);
      append_hydration(h21, t8);
      append_hydration(div3, t9);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div3, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const inputdata_changes = {};
      if (dirty & 1)
        inputdata_changes.passphraseInput = ctx2[0];
      if (dirty & 2)
        inputdata_changes.disabled = ctx2[1];
      inputdata.$set(inputdata_changes);
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(div1, null);
      }
      if (ctx2[5].enabled) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (dirty & 192) {
        each_value = ctx2[6];
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
            each_blocks[i].m(div3, null);
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
      transition_in(inputdata.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(inputdata.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(inputdata);
      if_blocks[current_block_type_index].d();
      if (if_block1)
        if_block1.d();
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let Wallets;
  onMount(async () => {
    ({ Wallets } = await __vitePreload(() => import("../chunks/index-7a951cd6.js"), true ? [] : void 0));
    console.log({ Wallets });
  });
  const hardwareProviders = [LedgerProviderData];
  let isCreatingWallet, passphraseInput, createdWallet, isGeneratingWallet, isPassphrase;
  let popup = {};
  const importProvider = async (provider) => {
    const id = await addProvider(provider);
    await goto(`/edit?wallet=${id}`);
  };
  async function goToCreatedWallet() {
    await goto(`/edit?wallet=${createdWallet}`);
  }
  const create = async () => {
    $$invalidate(1, isCreatingWallet = true);
    $$invalidate(0, passphraseInput = await Wallets.generateMnemonic());
    console.log({ passphraseInput });
    await Wallets.mnemonic_to_seed(passphraseInput);
    const masterKey = Wallets.mnemonicToMaster(passphraseInput);
    $$invalidate(2, createdWallet = masterKey);
  };
  const importPassphrase = async () => {
    $$invalidate(3, isGeneratingWallet = true);
    const id = Wallets.addMnemonic(passphraseInput);
    $$invalidate(5, popup.enabled = true, popup);
    $$invalidate(5, popup.icon = "loader", popup);
    $$invalidate(5, popup.message = "Importing", popup);
    $$invalidate(5, popup.actions = [], popup);
    await id;
    goto(`/edit?wallet=${id}`);
  };
  const importFile = async (file) => {
    if (!file) {
      return;
    }
    const id = await Wallets.addWallet(JSON.parse(await file[0].text()));
    goto(`/edit?wallet=${id}`);
  };
  const confirmPassphrase = async () => {
    if (await Wallets.validateMnemonic(passphraseInput)) {
      return importPassphrase();
    }
    $$invalidate(5, popup.enabled = true, popup);
    $$invalidate(5, popup.icon = "", popup);
    $$invalidate(5, popup.message = "This passphrase is not valid, do you want to import it anyway?", popup);
    $$invalidate(5, popup.actions = [
      {
        name: "Back",
        action: () => $$invalidate(5, popup.enabled = false, popup)
      },
      {
        name: "Import Passphrase",
        action: () => importPassphrase()
      }
    ], popup);
  };
  const click_handler = () => create();
  const click_handler_1 = (provider) => importProvider(provider);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (passphraseInput)
        $$invalidate(4, isPassphrase = passphraseInput.trim().split(/\s+/g).length >= 12);
    }
  };
  return [
    passphraseInput,
    isCreatingWallet,
    createdWallet,
    isGeneratingWallet,
    isPassphrase,
    popup,
    hardwareProviders,
    importProvider,
    goToCreatedWallet,
    create,
    importFile,
    confirmPassphrase,
    click_handler,
    click_handler_1
  ];
}
class Add extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Add as default };
//# sourceMappingURL=add.svelte-eb5f6b90.js.map
