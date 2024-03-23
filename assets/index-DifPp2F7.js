import{_ as o}from"./index-pE6eCjD0.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-Cj03o_aP.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-Cj03o_aP.js","./index-pE6eCjD0.js","./index-MMuwAwv3.css","./ValueWithRandom-D5_EqfcI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
