//selectors
const timer = document.querySelector(".date");
const input = document.getElementById("text")
const btn = document.getElementById("btn")
const ulEl = document.querySelector(".all-list")
const del = document.querySelectorAll('#delet')

    //dates
const currentTime = new Date();
const day = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getFullYear();

const date = `${year}` + " " + `${month}` + " " + `${day}`;

//create element
const Eldiv = document.createElement("div");
const Elli = document.createElement("li");


//child and parents
const ElParentDiv = Eldiv.setAttribute("class", "test")
timer.textContent = date;

//add eventlistner
btn.addEventListener('click', () => {
    const test1 = input.parentElement;
    const copy = input.value;
    Elli.textContent = copy;
    const node = document.createTextNode("divs");

    // const test = copy.appendChild("Eldiv"); // error for value not hace element
    input.value = '';
    if (copy == "") {
        window.alert("Write something")
    };
})



del.forEach(e => {
    e.addEventListener('click', (a) => {
        console.log(a.target.parentElement.parentElement.parentElement.remove())
    })
});
