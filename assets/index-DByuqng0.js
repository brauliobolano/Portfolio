import{_ as i}from"./index-BpmK57id.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-I9RFo6AU.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-I9RFo6AU.js","assets/ValueWithRandom-R-PFMcCI.js","assets/index-BpmK57id.js","assets/index-MMuwAwv3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
