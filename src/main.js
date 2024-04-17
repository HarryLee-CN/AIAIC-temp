import {createSSRApp} from "vue";
import * as Pinia from 'pinia'
import App from "./App.vue";
import "@/static/normalize.css";
import "@/static/font.css";
import "animate.css"
import "uview-plus/index.scss";
import uviewPlus from "uview-plus";
// import VConsole from 'vconsole'

// if(process.env.NODE_ENV === "development") new VConsole
// new VConsole
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia())
  app.use(uviewPlus)
  return {
    app,
  };
}
