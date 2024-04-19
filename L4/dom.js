const lande = [
    {name: "Danmark", hovedstad:"København"},
    {name: "Norge", hovedstad:"Oslo"},
    {name: "Sverige", hovedstad:"Stockholm"},

];
;;;
const bodyNode = document.body;
bodyNode.style.backgroundColor = "lightblue";

const tabelNode = document.createElement("table");

for (land of lande) {
    const trNode = document.createElement("tr");
    const tdCountry = document.createElement("td");
    const tdCity = document.createElement("td");
    tdCountry.textContent = land.name;
    tdCity.textContent = land.hovedstad;
    trNode.appendChild(tdCountry);
    trNode.appendChild(tdCity);
    tabelNode.appendChild(trNode);

    tdCity.style.backgroundColor = "lightgreen";
    tdCountry.style.backgroundColor = "lightyellow";
    trNode.style.backgroundColor = "red";
}

bodyNode.appendChild(tabelNode);

const pNode = document.getElementsByClassName("comment")[0];

pNode.classList.add("alert");

const listeNode = document.querySelector("div.liste")

const olNode = document.createElement("ol");

listeNode.appendChild(olNode);

for (land of lande) {
    const liNode = document.createElement("li");
    liNode.innerHTML = land.name;
    olNode.appendChild(liNode);
}

olNode.style.backgroundColor = "lightyellow";

const myPicNode = document.createElement("img");

myPicNode.src = "https://media1.tenor.com/m/Xj64jbXsq0YAAAAd/spy.gif";
myPicNode.style.width = "100px";
bodyNode.appendChild(myPicNode);