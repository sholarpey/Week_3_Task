// function handler() {
//     alert("Working?");
// }
// handler()
// function handler() {
//     alert("Working?");
// }
// handler()

// Part 1
let input1 = document.getElementById("item");
let input2 = document.getElementById("quantity");
let input3 = document.getElementById("message");
let btn1 = document.getElementById("submit-button");
let divContainer = document.getElementById("div-container");

let obj = {
    input3: input3,
    input2: input2,
    input1: input1
}

function handler(e) {
    e.preventDefault()
    let h3Element = document.createElement("h3")
    h3Element.innerHTML = obj.input1.value

    let p = document.createElement("p")
    p.classList.add("space")
    p.innerHTML = obj.input3.value

    let p2 = document.createElement("p")
    p2.classList.add("bold")
    p2.innerHTML = obj.input2.value

    let button = document.createElement("button")
    let node = document.createTextNode("Done")
    button.appendChild(node)
    button.classList.add("done-button")

    let div = document.createElement("div")
    div.classList.add("item-container")

    let div2 = document.createElement("div")
    div2.appendChild(h3Element)
    div2.appendChild(p)
    div2.appendChild(p2)
    div.appendChild(div2)
    divContainer.appendChild(div)
    div.appendChild(button)

    shoppingListHandler()
}
btn1.addEventListener("click", handler);

// Part 2
function anotherHandler(e) {
    e.preventDefault()
    let btn = e.target
    btn.parentNode.remove()
}

function shoppingListHandler() {
    let btn2 = document.getElementsByClassName("done-button");

    for (let i = 0; i < btn2.length; i++) {
        let currentBtn = btn2[i]
        currentBtn.addEventListener("click", anotherHandler)
    }
}

shoppingListHandler();