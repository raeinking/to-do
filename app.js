const lists = document.querySelector(".all-list")
const text = document.querySelector(".text")
const btn = document.querySelector(".footer")


text.addEventListener("input", function (e) {
    const { value } = e.target;

    main.innerHTML = marked(value);
})