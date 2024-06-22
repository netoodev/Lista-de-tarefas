const inputBoxDay = document.getElementById("input-box-day");
const listContainerDay = document.getElementById("list-container-day");
const inputBoxNight = document.getElementById("input-box-night");
const listContainerNight = document.getElementById("list-container-night");

function addTaskDay() {
    if (inputBoxDay.value === "") {
        alert("Escreva uma tarefa antes de adicionar.")
    } else {
        let li = document.createElement("li");
        li.innerHTML =inputBoxDay.value;
        listContainerDay.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBoxDay.value = "";
    saveData();
}

listContainerDay.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function addTaskNight() {
    if (inputBoxNight.value === "") {
        alert("Escreva uma tarefa antes de adicionar.")
    } else {
        let li = document.createElement("li");
        li.innerHTML =inputBoxNight.value;
        listContainerNight.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBoxNight.value = "";
    saveData();
}

listContainerNight.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("dataDay", listContainerDay.innerHTML);
    localStorage.setItem("dataNight", listContainerNight.innerHTML);
}

function showTask(){
    listContainerDay.innerHTML = localStorage.getItem("dataDay");
    listContainerNight.innerHTML = localStorage.getItem("dataNight");
}

showTask();