<script setup lang="ts">/**
 * Button.vue
 * Button.test.tsx
 * types.ts
 * style.css
 * constants.ts
 */
import type {ButtonProps} from "./types.ts";
import {ref} from "vue";

defineOptions({
  name: "EasyButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
})
const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
</script>

<template>
 <component
     :is="props.tag"
     ref="_ref"
     class="easy-button"
     :type="tag === 'button' ? nativeType : void 0"
     :disabled="disabled || loading ? true : void 0"
     :class="{
       [`easy-button--${type}`]: type,
       [`easy-button--${size}`]: size,
       'is-plain': plain,
       'is-round': round,
       'is-circle': circle,
       'is-disabled': disabled,
       'is-loading': loading,
     }"
 >
   <slot></slot>
 </component>
</template>

<style>
@import "./style.css";
</style>
