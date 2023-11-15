let green_button = document.querySelector(".greenbtn");
let text = document.querySelector(".new-task");
let ul = document.querySelector(".ul");
let error_span = document.querySelector(".error-span");
let delet = document.querySelector(".delete");

green_button.addEventListener("click", () => {
  let task = text.value;
  if (task.length === 0) {
    error_span.innerText = "Input Required!";
    error_span.classList.add("red");
  } else {
    error_span.innerText = "";
    let str = `<li>${task} <i class="fa-solid fa-circle-minus"></i></li>`;
    empty_box.innerText = "";
    ul.innerHTML += str;
    text.value = "";
  }
});

let empty_box = document.querySelector(".empty");
ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.classList.add("strike");
    e.target.parentElement.classList.add("fade");

    setTimeout(() => {
      e.target.parentElement.remove();
      if (ul.childElementCount === 0) {
        empty_box.innerText = "No Task Listed...";
      }
    }, 300);
  }
});
