import{_ as r}from"./index-C4qdpkIr.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./PolygonDrawer-CFF8kLNL.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./TriangleDrawer-CCFqAh-A.js"),__vite__mapDeps([4,1,2,3]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PolygonDrawer-CFF8kLNL.js","./PolygonDrawerBase-ChOr0V82.js","./index-C4qdpkIr.js","./index-MMuwAwv3.css","./TriangleDrawer-CCFqAh-A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
