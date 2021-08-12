// console.log(33);
const blogTitles = document.getElementsByTagName("h3");
// console.log(blogTitles);
for (const h3 of blogTitles){
    console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName("p");
for (const p of blogDetails){
    console.log(p.innerHTML);
}
const firstTitle = document.getElementById("first-title");
firstTitle.style.backgroundColor = "rgba(255, 166, 0, 0.452)";

const secondTitle = document.getElementById("second-title");
secondTitle.style.backgroundColor = "rgba(165, 42, 42, 0.356)";

const thirdTitle = document.getElementById("third-title");
thirdTitle.style.backgroundColor = "rgba(255, 68, 0, 0.411)";