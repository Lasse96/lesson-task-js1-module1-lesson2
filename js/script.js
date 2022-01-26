// Oppgave 1
const h3 = document.querySelector("h3");
h3.innerHTML = "Hello";

// Oppgave 2
const h4 = document.querySelectorAll("h4");
for (let i = 0; i < h4.length; i++) {
    h4[i].style.marginBottom = "-20px";
};

// Oppgave 3
const h4v2 = document.querySelectorAll("h4")[1];
h4v2.style.backgroundColor = "red";

// Oppgave 4
const p1 = document.querySelector("p");
p1.style.fontSize = "24px";
p1.style.color = "blue";

// Oppgave 5
const p3 = document.querySelectorAll("p")[2];
let p3old = p3.innerHTML;
let p3new = `<span>${p3old}</span>`;
p3.innerHTML = p3new;

// Oppgave 6
const cont = document.querySelector("div.content");
cont.innerHTML += `<p>Hei oog hå</p>`;

// Oppgave 7
const newcont = document.querySelector(".content p");
for (let b = 0; b < newcont.length; b++) {
    newcont[b].classlist.add("content-item");
};

// Oppgave 8
const ul = document.querySelector("#services");
ul.innerHTML = `<li>Heeeei</li>` + ul.innerHTML;

// Oppgave 9
ul.classList.remove("service-list");

// Oppgave 10
const hide = document.querySelector("#hide");
hide.style.display = "none";