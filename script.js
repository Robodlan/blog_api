let postsArr = []
const blogList = document.getElementById("blog-list")
const btn = document.getElementById("btn")
const blogTitle = document.getElementById("blog-title").value
const blogBody = document.getElementById("blog-body").value

function renderPosts() {

}

fetch("https://jsonplaceholder.typicode.com/posts")  
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        blogList.innerHTML= html
        console.log(html)
    })

// btn.addEventListener("click", function(e) {
//     e.preventDefault(e)
    
// }

