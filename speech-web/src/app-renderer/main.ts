// la logique voudrez que toute cette logique soit placée dans renderer/
// mais je reflechis encore à des trucs. 
import './assets/styles/theme.css'
import { createApp } from 'vue'
import { VuelidatePlugin } from '@vuelidate/core'
// import { gsap, TextPlugin } from 'gsap/all'
import { router } from './router'
import App from './App.vue'
import * as globalComponents from './global-registry'
// gsap.registerPlugin(TextPlugin/* SplitText */)

export default function ({ dataLayer }) {
  const app = createApp(App)
  app
    .use(router)
    .use(VuelidatePlugin)

  for (const [tag, component] of Object.entries(globalComponents)) {
    app.component(tag, component);
  }

  app.mount('#app')
  
  return app
}

