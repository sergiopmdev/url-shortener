import App from "./App.vue";
import { createApp } from "vue";

import { RiScissorsFill, BiGithub } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import "./style.css";

addIcons(RiScissorsFill, BiGithub);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");
