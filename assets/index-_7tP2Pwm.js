import{_ as r}from"./index-pE6eCjD0.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-XnO1gckB.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./SizeUpdater-XnO1gckB.js","./index-pE6eCjD0.js","./index-MMuwAwv3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}