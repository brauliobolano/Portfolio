import{_ as i}from"./index-BpmK57id.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-9lAYsKEH.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-9lAYsKEH.js","assets/Ranges--1eM65G7.js","assets/index-BpmK57id.js","assets/index-MMuwAwv3.css","assets/index-CEa-Zt-X.js","assets/OptionsColor-DnDwUZ86.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}