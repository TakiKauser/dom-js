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