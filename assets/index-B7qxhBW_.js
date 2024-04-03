import{_ as i}from"./index-DyuCDehS.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CS8akYhg.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-CS8akYhg.js","./ValueWithRandom-Dwp2fQWH.js","./index-DyuCDehS.js","./index-BKRvJZqX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
