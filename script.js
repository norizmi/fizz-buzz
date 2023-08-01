const btn = document.querySelector("button");
let result = document.getElementById("result");


btn.addEventListener("click", () => {
  const number = document.querySelector("input").value;
  const li = document.createElement("li");

  if (number === "0" || isNaN(number) || number === "") {
    li.setAttribute("style", "color:red; margin-top:20px");
    li.innerHTML = 'invalid input';
  } else if (number % 3 === 0 && number % 5 === 0) {
    li.textContent = "Fizz Buzz";
  } else if (number % 3 === 0) {
    li.textContent = "Fizz";
  } else if (number % 5 === 0) {
    li.textContent = "Buzz";
  } else {
    li.textContent = `${number}`;
  }
      result.appendChild(li);
});
