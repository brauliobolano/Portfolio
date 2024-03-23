import{_ as n}from"./index-BpmK57id.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-C9K4kWkT.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-D8cj6NBV.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-C9K4kWkT.js","assets/PolygonDrawerBase-DbhQP8q_.js","assets/index-BpmK57id.js","assets/index-MMuwAwv3.css","assets/TriangleDrawer-D8cj6NBV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
