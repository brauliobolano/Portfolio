import{_ as i}from"./index-BfaVXQne.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-C1yIhhH3.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-C1yIhhH3.js","assets/ValueWithRandom-3AHEwLYy.js","assets/index-BfaVXQne.js","assets/index-MMuwAwv3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}