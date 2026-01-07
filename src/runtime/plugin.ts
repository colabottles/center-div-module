import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('center', {
    beforeMount(el: HTMLElement) {
      el.style.display = 'grid'
      el.style.placeItems = 'center'
      el.style.height = '100dvh'
      el.style.width = '100%'
    },
  })
})
