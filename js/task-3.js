const inputEl = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputEl.addEventListener("input", createGreetingFoo);

function createGreetingFoo(event) {
    event.preventDefault();

    spanName.textContent = event.target.value.trim() || "Anonymus";

 
}
