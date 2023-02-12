async function users(URL) {
  try {
    const result = [];
    const responce = await fetch(URL);
    const data = await responce.json();
    data.data.forEach((element) => {
      result.push(element);
    });
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const container = document.querySelector(".container");
let index = 0;
function handler(arg) {
  let html = "";
  html += `<div class="block">id: ${arg[index].id}, <br/>first_name: ${arg[index].first_name}, <br/>last_name: ${arg[index].last_name}, <br/>email: ${arg[index].email}, <br/> <img src=${arg[index].avatar} alt="avatar"></div>`;
  container.innerHTML += html;
}
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  users("https://reqres.in/api/users?page=2").then((result) => {
    if (index < result.length) {
      handler(result);
      index++;
    } else {
      alert("Все элементы добавлены");
    }
  });
});