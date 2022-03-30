let raNums = []
let total = 0 
let p1 = document.createElement("p")
document.body.appendChild(p1)
for (let x = 1; x <= 100; x++) {
    let rndNum = parseInt(Math.random() * (1000 -1) + 1)
    let p = document.createElement("p")
    p.textContent = rndNum
    raNums.push(rndNum)
    total += rndNum
    //document.getElementbyId("numbers").appendChild(p)
    document.body.appendChild(p)
}
document.getElementById("maxi").textContent = "Max Number: " + Math.max(...raNums)
document.getElementById("sumof").textContent = "Grand Total: " + total