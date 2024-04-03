import{_ as e}from"./index-DyuCDehS.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await e(()=>import("./Attractor-B0a2LxTW.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor-B0a2LxTW.js","./ParticlesInteractorBase-vfDeBun3.js","./index-DyuCDehS.js","./index-BKRvJZqX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
