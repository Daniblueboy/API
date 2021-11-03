"Use strict"

// let postTitle = document.getElementById("post-title");
// let postBody = document.getElementById("post-body");
// let postForm =document.querySelector("#post-form");
// postForm.addEventListener("submit", createPost);

function post(id) {
    localStorage.setItem("postId", id);
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById("post-layout");
        let html = "";
        data.forEach(e => {
            // console.log(e)
            html += `      <div class="col-md-4 mb-3">
                                <a href="post.html" class="text-decoration-none text-dark" onClick="post(${e.id})">
                                <div class="card h-100">
                                <div class="card-body">
                                        <div class="d-flex justify-content-end">
                                         <h6 class="text-danger">${e.id}</h6>
                                         </div>
                                        <h5 class="post-title mb-4">${e.title}</h5>
                                        <p class="post-body">${e.body}</p>
                                    </div>
                                </div>
                                </a>
                            </div>`
        postLayout.innerHTML = html
        });
    })
}

getPosts();

// function createPost(e){
//     e.preventDefault();
//     let pTitle = postTitle.value;
//     let pBody = postBody.value;
//     console.log("Post Title", pTitle)
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method:"POST",
//         body: JSON.stringify({
//             title: "pTitle",
//             body: "pBody",
//             userId: 5 
//         }),
//         headers: {
//             'Content-type': 'application/json:charset-UTF-8',
//         },    
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('post', data)
//     })
// }

