import{s as r,_ as o}from"./index-DyuCDehS.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function u(a,t=!0){await a.addInteractor("externalRemove",async e=>{const{Remover:n}=await o(()=>import("./Remover-Bvea5vzL.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new n(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Remover-Bvea5vzL.js","./ExternalInteractorBase-CIi3zRdK.js","./index-DyuCDehS.js","./index-BKRvJZqX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
