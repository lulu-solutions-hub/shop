import type { DirectiveBinding } from "vue";
import {createVuetify} from "vuetify";

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';


export default defineNuxtPlugin((context) => {
  const locale = useCookie('locale');
  const vuetify = createVuetify({
    styles: {
      configFile: 'src/styles/settings.scss',
    },
    locale: {
      locale: locale.value as string,
      fallback: 'en',
    },
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: {
          colors: {
            background: '#1A1A1A',
            mainGray: '#373738',
            mainBlack: '#161618',
            mainViolet: '#6034BB',
            textGrey: '#9F9F9F',
          }
        }
      }
    },
    defaults: {
      global: {
        ripple: false,
      }
    }
  });

  context.vueApp.use(vuetify);
});