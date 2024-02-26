import { type DirectiveBinding } from "vue/dist/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const handlePadding = (el: HTMLElement, binding: DirectiveBinding<string>) => {
    el.style.color = binding.value + "px"
  }

  nuxtApp.vueApp.directive('pa', {
    beforeMount: handlePadding,
    updated: handlePadding,
    getSSRProps: (binding) => {
      return {
        style: {
          pa: binding.value,
        },
      }
    },
  })
});




