//selectors
const timer = document.querySelector(".date");
const input = document.getElementById("text")
const btn = document.getElementById("btn")
const ulEl = document.querySelector(".all-list")
// const del = document.querySelectorAll('#delet')

//dates
const currentTime = new Date();
const day = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getFullYear();

const date = `${year}` + " " + `${month}` + " " + `${day}`;

timer.textContent = date;

//add eventlistner
btn.addEventListener('click', () => {
    if (input.value == "") {
        window.alert("Write something")
    }else{
        const Eldiv = document.createElement("div");
        Eldiv.setAttribute("class", 'list')
        ulEl.append(Eldiv)
        
        const ptext = document.createElement("p");
        ptext.textContent = input.value
        Eldiv.appendChild(ptext);
        
        
        const btnel = document.createElement('div')
        btnel.setAttribute("class", "btns")
        btn
        Eldiv.append(btnel)
        
        const imgdcheck = document.createElement("p")
        imgdcheck.setAttribute("class", "check")
        imgdcheck.textContent = 'done'
        btnel.append(imgdcheck)
        
        const imgdelete = document.createElement("p")
        imgdelete.setAttribute("class", "delete")
        imgdelete.textContent = 'delete'
        btnel.append(imgdelete)
        
        imgdelete.addEventListener("click",  (a) => {
            a.target.parentElement.parentElement.remove()
        })
        imgdcheck.addEventListener("click",  (a) => {
            a.target.parentElement.parentElement.firstChild.classList.toggle('done')
        })   
    }
})