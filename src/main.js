import './styles.css'
import router from "./router/index.js";

import { createApp } from "vue";
import App from "./views/MainMenuView.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
