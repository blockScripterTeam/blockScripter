import './styles.css'
import router from "./router/index.js";
import { createApp } from "vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
