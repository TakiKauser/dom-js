// console.log(33);

// exploring getElementsByTagName
const blogTitles = document.getElementsByTagName("h3");
// console.log(blogTitles);
for (const h3 of blogTitles){
    console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName("p");
for (const p of blogDetails){
    console.log(p.innerHTML);
}

// exploring getElementByID
const firstTitle = document.getElementById("first-title");
firstTitle.style.backgroundColor = "rgba(255, 166, 0, 0.452)";

const secondTitle = document.getElementById("second-title");
secondTitle.style.backgroundColor = "rgba(165, 42, 42, 0.356)";

const thirdTitle = document.getElementById("third-title");
thirdTitle.style.backgroundColor = "rgba(255, 68, 0, 0.411)";

// exploring getElementsByclass
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs){
    // console.log(blog);
    blog.style.border = "5px solid teal";
    blog.style.borderRadius = "10px";
    blog.style.margin = "3%";
    blog.style.padding = "10px";
}

const titles = document.getElementsByClassName("title");
for (const title of titles){
    title.style.textAlign = "center";
}