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

/* ...codes are after add article codes... */

// setAttribut along with nodeList, htmlCollection, parentNode, childNodes
secondTitle2 = document.getElementById("second-title");
// secondTitle2.getAttribute("style");
secondTitle2.setAttribute("title", "ToolTip using Javascript");

// create and add element using javascript

// step 1: create element
const li = document.createElement("li");
li.innerText = "Blog 4";

// step 2: where to add
const ul = document.getElementById("blog-list");

// step 3: append new element
ul.appendChild(li);

// add article
const article = document.createElement("article");
article.classList.add("blog");
const h3 = document.createElement("h3");
h3.classList.add("title");
h3.innerText = "My Blog-4";
const p = document.createElement("p");
p.innerText = "Optio, ad consequuntur eaque amet officiis ipsa dolores officia quaerat ut velit quibusdam vitae illo obcaecati libero temporibus! Unde odio beatae vitae voluptate quibusdam. Temporibus ad aut quaerat, in dolores quam blanditiis? Sapiente deserunt nam architecto quasi magni adipisci ex eveniet in, ipsum esse dolor consectetur reprehenderit culpa voluptates similique atque! In aliquid minima quis recusandae nihil dolorum omnis deleniti aut, impedit exercitationem. Rem nobis dolorum possimus dignissimos voluptatem eveniet accusantium ex delectus. Obcaecati velit recusandae, minima ex est voluptates aut dicta magni illo inventore, quaerat facilis nemo beatae autem quia vero eaque nisi dolores cum fuga esse culpa! Dolorem!";

article.appendChild(h3);
article.appendChild(p);

// parent of article
const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);

// another way to add an article/element
const article5 = document.createElement("article");
article.classList.add("blog");

article.innerHTML = `
<h3 class="title">My Blog-5</h3>
<p>Optio, ad consequuntur eaque amet officiis ipsa dolores officia quaerat ut velit quibusdam vitae illo obcaecati libero temporibus! Unde odio beatae vitae voluptate quibusdam. Temporibus ad aut quaerat, in dolores quam blanditiis? Sapiente deserunt nam architecto quasi magni adipisci ex eveniet in, ipsum esse dolor consectetur reprehenderit culpa voluptates similique atque! In aliquid minima quis recusandae nihil dolorum omnis deleniti aut, impedit exercitationem. Rem nobis dolorum possimus dignissimos voluptatem eveniet accusantium ex delectus. Obcaecati velit recusandae, minima ex est voluptates aut dicta magni illo inventore, quaerat facilis nemo beatae autem quia vero eaque nisi dolores cum fuga esse culpa! Dolorem!</p>
`;

// exploring getElementsByclass
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs){
    // console.log(blog);
    blog.style.border = "5px solid rgba(165, 42, 42, 0.356)";
    blog.style.borderRadius = "10px";
    blog.style.margin = "3%";
    blog.style.padding = "10px";
}

const titles = document.getElementsByClassName("title");
for (const title of titles){
    title.style.textAlign = "center";
    title.style.backgroundColor = "rgba(165, 42, 42, 0.356)";
}