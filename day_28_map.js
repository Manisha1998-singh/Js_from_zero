//let maparr = ["aaaa", "bbb", "gggg"];
const map = new Map();
map.set("IN", "INdia");
map.set("uSA", "Unitred");
map.set("IN", "INdia");
map.set("fr", "France");
map.set("IN", "INdia");
console.log(map);

// for (const key of map) {
//   console.log(map);
// }
for (const [key, value] of map) {
  console.log(key, " - ", value); /// for partucularr dataa like disteuctere
}

const myobject = {
  gampe1: "NPS",
  gampe2: "NPS2",
};
for (const [key, value] of myobject) {
  console.log(key, " - ", value); /// for partucularr dataa like disteuctere
}
