import { defineNuxtModule, addComponent, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'center-div',
    configKey: 'centerDiv',
  },

  defaults: {
    // Module options with defaults
  },

  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Add component
    addComponent({
      name: 'CenterDiv',
      filePath: resolver.resolve('./runtime/components/CenterDiv.vue'),
    })

    // Add plugin (directive)
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'client',
    })
  },
})
