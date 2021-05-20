import Tooltip from "./xirade-ui/tooltip";
import Dropdown from "./xirade-ui/dropdown";
import Tabs from "./xirade-ui/tabs";
import Snackbar from "./xirade-ui/snackbar";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const inst = new Dropdown(dropdown);
  inst.init();
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me :)");
});
