import{_ as o}from"./index-DyuCDehS.js";class a{constructor(){this.distance=200}load(t){t&&t.distance!==void 0&&(this.distance=t.distance)}}async function c(e,t=!0){await e.addInteractor("externalBounce",async n=>{const{Bouncer:r}=await o(()=>import("./Bouncer-_4LyJ_8K.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(n)},t)}export{a as Bounce,c as loadExternalBounceInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Bouncer-_4LyJ_8K.js","./index-DyuCDehS.js","./index-BKRvJZqX.css","./Ranges-D0nJFYTC.js","./ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
