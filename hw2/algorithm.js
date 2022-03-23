let raNums = []
let total = 0 
let p1 = document.createElement("p")
p1.textContent = ".";
document.body.appendChild(p1)
for (let x=1; x <= 100; x++) {
    let rndNum = parseInt(Math.random() * (1000 -1) +1)
    let p = documet.createElement("p")
    p.textContent = rndNum


    //document.getElementbyId("numbers").appendChild(p)
    document.body.appendChild(p)
}