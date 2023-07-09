import App from "./App.vue";
import { createApp } from "vue";

import { RiScissorsFill, BiGithub, RiLoader4Line } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { createPinia } from "pinia";

import "./style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.component("v-icon", OhVueIcon);

addIcons(RiScissorsFill, BiGithub, RiLoader4Line);

app.mount("#app");
