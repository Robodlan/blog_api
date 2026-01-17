let html = []
const blogList = document.getElementById("blog-list")
const btn = document.getElementById("btn")
const blogTitle = document.getElementById("blog-title").value
const blogBody = document.getElementById("blog-body").value

function renderPosts() {
    postsArr = data.slice(0, 5)
        console.log(postsArr)
        
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        blogList.innerHTML= html
}

fetch("https://jsonplaceholder.typicode.com/posts")  
    .then(res => res.json())
    .then(data => {
        renderPosts(data)
        
    })

    const options ={
    method: "POST",
    body: JSON.stringify({
        title: blogTitle,
        body: blogBody,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",}
    }

btn.addEventListener("click", function(e) {
    e.preventDefault(e)
   fetch("https://jsonplaceholder.typicode.com/posts", options)
       .then(res => res.json())
       .then(post => {
           renderPosts(post)
       })   
})

