
let personer = [
    {navn: "Hans", alder: 30, mobile: "2345"},
    {navn: "Børge", alder: 35, mobile: "3456"},
    {navn: "Bent", alder: 40, mobile: "4567"},
    {navn: "Ole", alder: 25, mobile: "1234"}
]

let mobil = personer.find(p => p.mobile === "3456");

console.log(mobil.navn); // => Børge

let mindsteAlder = personer.reduce((min, p) => p.alder < min ? p.alder : min, personer[0].alder);

console.log(mindsteAlder.toString()); // => 25

let id = 0;
personer.forEach(p => p.id = id++);

console.log(personer); // => Rigtigt svar


console.log(personer.map(p => p.navn).sort().reduce((acc, p) => acc + ", " + p, "").substring(2)); // => Bent Børge Hans Ole

let sum = personer.filter(person => person.alder < 30).map(p => [p.navn, p.mobile])

console.log(sum); // => Ole, 1234


// 8.2 

let stringe = ["Hans", "Børge", "Bent", "Ole"];

let compareSort = (array) => (funcSort => array.sort(funcSort))

compareSort(stringe)((a, b) => a.localeCompare(b));

console.log(stringe);
