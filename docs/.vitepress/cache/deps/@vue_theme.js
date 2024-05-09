import {
  computed2 as computed,
  defineComponent,
  h,
  provide,
  ref
} from "./chunk-3C4OEVM2.js";
import "./chunk-LQ2VYIYD.js";

// node_modules/@vue/theme/src/core/index.ts
import { default as default2 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconAlignJustify.vue";
import { default as default3 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconAlignLeft.vue";
import { default as default4 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconAlignRight.vue";
import { default as default5 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconCode.vue";
import { default as default6 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconCodePen.vue";
import { default as default7 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconCommand.vue";
import { default as default8 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconChevronDown.vue";
import { default as default9 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconChevronLeft.vue";
import { default as default10 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconChevronRight.vue";
import { default as default11 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconChevronUp.vue";
import { default as default12 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconDiscord.vue";
import { default as default13 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconExternalLink.vue";
import { default as default14 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconFacebook.vue";
import { default as default15 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconGitHub.vue";
import { default as default16 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconGlobe.vue";
import { default as default17 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconHeart.vue";
import { default as default18 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconInstagram.vue";
import { default as default19 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconLanguages.vue";
import { default as default20 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconLink.vue";
import { default as default21 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconLinkedIn.vue";
import { default as default22 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconMail.vue";
import { default as default23 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconMapPin.vue";
import { default as default24 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconMoreHorizontal.vue";
import { default as default25 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconMoon.vue";
import { default as default26 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconPlus.vue";
import { default as default27 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconSearch.vue";
import { default as default28 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconSlack.vue";
import { default as default29 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconSun.vue";
import { default as default30 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconTwitter.vue";
import { default as default31 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconX.vue";
import { default as default32 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconYouTube.vue";
import { default as default33 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/icons/VTIconEdit.vue";
import { default as default34 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTBackdrop.vue";
import { default as default35 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTCodeGroup.vue";
import { default as default36 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTCodeGroupTab.vue";
import { default as default37 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTFlyout.vue";
import { default as default38 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTHamburger.vue";
import { default as default39 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTLink.vue";
import { default as default40 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTMenu.vue";
import { default as default41 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTSocialLink.vue";
import { default as default42 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTSocialLinks.vue";
import { default as default43 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTSwitch.vue";
import { default as default44 } from "E:/code-1/vite-doc/node_modules/@vue/theme/src/core/components/VTSwitchAppearance.vue";

// node_modules/@vue/theme/src/vitepress/index.ts
import "E:/code-1/vite-doc/node_modules/@vue/theme/src/vitepress/styles/index.css";
import VPApp from "E:/code-1/vite-doc/node_modules/@vue/theme/src/vitepress/components/VPApp.vue";

// node_modules/@vue/theme/src/vitepress/composables/config.ts
import { useData } from "vitepress";

// node_modules/@vue/theme/src/vitepress/support/utils.ts
import { withBase } from "vitepress";
var outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(
    pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`
  );
}
var inBrowser = typeof window !== "undefined";
var hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}

// node_modules/@vue/theme/src/vitepress/composables/config.ts
var configSymbol = Symbol("config");
function withConfigProvider(App) {
  return defineComponent({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = computed(() => resolveConfig(theme.value));
      provide(configSymbol, config);
      return () => h(App, null, slots);
    }
  });
}
function resolveConfig(config) {
  var _a;
  return Object.assign(
    {
      appearance: true
    },
    config,
    {
      nav: (_a = config.nav) == null ? void 0 : _a.map(normalizeMenuItem),
      sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    }
  );
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}

// node_modules/@vue/theme/src/vitepress/index.ts
var VPTheme = {
  Layout: withConfigProvider(VPApp)
};
export {
  VPTheme,
  default34 as VTBackdrop,
  default35 as VTCodeGroup,
  default36 as VTCodeGroupTab,
  default37 as VTFlyout,
  default38 as VTHamburger,
  default2 as VTIconAlignJustify,
  default3 as VTIconAlignLeft,
  default4 as VTIconAlignRight,
  default8 as VTIconChevronDown,
  default9 as VTIconChevronLeft,
  default10 as VTIconChevronRight,
  default11 as VTIconChevronUp,
  default5 as VTIconCode,
  default6 as VTIconCodePen,
  default7 as VTIconCommand,
  default12 as VTIconDiscord,
  default33 as VTIconEdit,
  default13 as VTIconExternalLink,
  default14 as VTIconFacebook,
  default15 as VTIconGitHub,
  default16 as VTIconGlobe,
  default17 as VTIconHeart,
  default18 as VTIconInstagram,
  default19 as VTIconLanguages,
  default20 as VTIconLink,
  default21 as VTIconLinkedIn,
  default22 as VTIconMail,
  default23 as VTIconMapPin,
  default25 as VTIconMoon,
  default24 as VTIconMoreHorizontal,
  default26 as VTIconPlus,
  default27 as VTIconSearch,
  default28 as VTIconSlack,
  default29 as VTIconSun,
  default30 as VTIconTwitter,
  default31 as VTIconX,
  default32 as VTIconYouTube,
  default39 as VTLink,
  default40 as VTMenu,
  default41 as VTSocialLink,
  default42 as VTSocialLinks,
  default43 as VTSwitch,
  default44 as VTSwitchAppearance
};
//# sourceMappingURL=@vue_theme.js.map
