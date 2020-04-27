import Main from "./main";

if(!window.main) window.main = new Main(document.body);
window.main.router.location = "default";
