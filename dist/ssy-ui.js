import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const props = {
  // 颜色
  color: {
    type: String,
    default: "blue"
  },
  /**
   * 尺寸
   * @example 'small' | 'medium' | 'large'
   */
  size: {
    type: String,
    default: "medium"
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false
  },
  // 是否扁平
  plain: {
    type: Boolean,
    default: false
  },
  // 图标
  icon: {
    type: String,
    default: ""
  }
};
const SButton = /* @__PURE__ */ defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": ` mx-1
          hover:scale-105
          hover:text-white
          transition duration-300 ease-in-out transform
          py-${size[props2.size].y}
          px-${size[props2.size].x}
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? `${props2.color}-500` : "white"}
          text-${size[props2.size].text}`
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const TSXButton = /* @__PURE__ */ defineComponent({
  name: "TSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("TSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(TSXButton.name, TSXButton);
  }
};
export {
  SButton,
  SFCButton,
  TSXButton,
  entry as default
};
