let postsArr = []
const blogList = document.getElementById("blog-list")
const form = document.getElementById("form")
const blogTitle = document.getElementById("blog-title")
const blogBody = document.getElementById("blog-body")


function renderPost() {
    let html = ''
    postsArr.forEach(post => {
        html += `
        <div class="blog-post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        <hr/>
        `
    })
    blogList.innerHTML = html
}



 fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => {
      postsArr = data.slice(0, 5) 
      renderPost()     
     })

     form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const post = {
        title: blogTitle.value,
        body: blogBody.value
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json',
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', options)
       .then(res => res.json())
       .then(post => {
          postsArr.unshift(post)
          renderPost()
          form.reset()
       })


     })

