"Use strict"

// let postTitle = document.getElementById("post-title");
// let postBody = document.getElementById("post-body");
// let postForm =document.querySelector("#post-form");
// postForm.addEventListener("submit", createPost);

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
                                <div class="card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-end">
                                         <h6 class="text-danger">${e.id}</h6>
                                         </div>
                                        <h5 class="post-title mb-4">${e.title}</h5>
                                        <p class="post-body">${e.body}</p>
                                    </div>
                                    <div class="text-center pb-3">
                                    <button type="submit" id="click" onclick="post(${e.id})" class="btn btn-primary">Read More</button>
                                </div>
                                </div>
                            </div>`
        postLayout.innerHTML = html
        });
    })
}

getPosts()

function post(id) {
    localStorage.setItem("postid", id);
    
    let postId = localStorage.getItem("postid");
    console.log(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((e) => {
        let postLayout = document.getElementById('post-layout')
        let contents = "";
            contents = `
            <div class="p-5">
                <div class="card bg-success" onclick="page()">
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 text-warning">${e.id}</h5>
                        </div>

                        <div class="d-flex justify-content-center bold">
                        <h5 class="post-title mb-4 text-white display-6">${e.title}</h5>
                        </div>
                        <p class="post-body text-white">${e.body}</p>
                    </div>
                    <div class="text-center py-2">
                        <a href="index.html"><button type="submit" class="btn btn-primary text-white text-center">All Posts</button></a>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML =  contents
           

        });
    
}

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

