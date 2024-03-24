import{_ as i}from"./index-C2vclE8M.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Dp5SXuCs.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-Dp5SXuCs.js","./ValueWithRandom-CTvhkjCi.js","./index-C2vclE8M.js","./index-BjwgXG6W.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
