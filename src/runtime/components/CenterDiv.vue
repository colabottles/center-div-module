<script setup lang="ts">
import { computed } from 'vue'

type CenterAxis = 'horizontal' | 'vertical' | 'both'

const props = withDefaults(defineProps<{
  axis?: CenterAxis
  as?: keyof HTMLElementTagNameMap
  minBlockSize?: string
}>(), {
  as: 'section',
  axis: 'both',
  minBlockSize: undefined,
})

const computedStyle = computed(() => {
  const baseStyle: Record<string, string> = { display: 'grid' }

  switch (props.axis) {
    case 'horizontal':
      baseStyle.justifyItems = 'center'
      break
    case 'vertical':
      baseStyle.alignItems = 'center'
      break
    default:
      baseStyle.placeItems = 'center'
  }

  if (props.minBlockSize) {
    baseStyle.minBlockSize = props.minBlockSize
  }

  return baseStyle
})
</script>

<template>
  <component
    :is="as"
    class="nuxt-center-div"
    :style="computedStyle"
  >
    <slot />
  </component>
</template>
