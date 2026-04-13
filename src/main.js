import { mount } from "svelte";
import "./app.css";
import { initAnalytics } from "./lib/analytics.js";
import App from "./App.svelte";

mount(App, { target: document.getElementById("app") });
initAnalytics();
