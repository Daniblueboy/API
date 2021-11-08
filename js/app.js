"Use strict"

let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
let postForm =document.querySelector("#post-form");
let userPost =[];

postForm.addEventListener("submit", createPost)
let postLayout = document.getElementById("post-layout");
function post(id) {
    localStorage.setItem("postId", id);
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        
        userPost = data
        console.log(userPost)
        let html = "";
        userPost.forEach(e => {
            // console.log(e)
            html += `      <div class="col-md-4 mb-3">
                                
                                <div class="card h-100">
                                <a href="post.html" class="text-decoration-none text-dark" onClick="post(${e.id})">
                                <div class="card-body">
                                        <div class="d-flex justify-content-end">
                                         <h6 class="text-danger">${e.id}</h6>
                                         </div>
                                        <h5 class="post-title  mb-4">${e.title}</h5>
                                        <p class="post-body">${e.body}</p>
                                    </div>
                                
                                    <div class ="d-flex justify-content-between m-3">
                                        <div>
                                        <button type="submit" id="click" onclick="post(${e.id})" class="btn btn-primary">Read More</button>
                                        </div>
                                        </a>
                                        <div>
                                        <button type="submit" id="click"  onclick = "updatePost(${e.id})" class="btn btn-warning text-white ">Update</button>
                                        </div>
                                        <div>
                                        <button type="submit" id="click" onclick = "deletePost(${e.id})" class="btn btn-danger text-white ">Delete</button>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>`
        postLayout.innerHTML = html
        });
    })
}

getPosts();



function createPost(e){
    e.preventDefault();
    let pTitle = postTitle.value;
    let pBody = postBody.value;
    console.log("Post Title", pTitle)
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: pTitle,
            body: pBody,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },    
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('post', data)
        console.log(userPost)
        userPost.push(data);
        let html = "";
        userPost.forEach(e => {
            // console.log(e)
            html += `      <div class="col-md-4 mb-3">
                                <div class="card h-100">
                                <a href="post.html" class="text-decoration-none text-dark" onClick="post(${e.id})">
                                <div class="card-body">
                                        <div class="d-flex justify-content-end">
                                         <h6 class="text-danger">${e.id}</h6>
                                         </div>
                                        <h5 class="post-title mb-4">${e.title}</h5>
                                        <p class="post-body">${e.body}</p>
                                    </div>
                                    <div class ="d-flex justify-content-between m-1">
                                        <div>
                                        <button type="submit" id="click" onclick="post(${e.id})" class="btn btn-primary">Read More</button>
                                        </div>
                                        </a>
                                        <div>
                                        <button type="submit" id="click" onclick = "updatePost(${e.id})" class="btn btn-warning text-white ">Update</button>
                                        </div>
                                        <div>
                                        <button type="submit" id="click" onclick = "deletePost(${e.id})" class="btn btn-danger text-white ">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>`
        postLayout.innerHTML = html
        });

        // userPost = data;
        console.log(userPost)
        alert("Post created successfully")
    })
}

function updatePost(postId) {
    console.log(postId)
    let pTitle = postTitle.value;
    let pBody = postBody.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
        id: postId,
        title: pTitle,
        body: pBody,
        userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let myPostTitle = document.querySelectorAll(".post-title");
    let myPostBody = document.querySelectorAll(".post-body");
    myPostTitle.forEach((title, index) => {
        if(index + 1 === postId) {
            title.textContent = data.title
        }
    })
    myPostBody.forEach((body, index) => {
        if (index + 1 === postId){
            body.textContent = data.body
        }
    })
  })
  .catch((e) => {
      console.log(e)
  })
  ;
}

function deletePost(postId) {
    console.log(postId)
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(userPost)
        // userPost.splice((postId - 1), 1)
        userPost = userPost.filter(post => post.id !== postId)
        console.log(userPost)

        // console.log(userPost)
        console.log(userPost)
        console.log('post', data)
        let postLayout = document.getElementById('post-layout');

        let html = "";
        userPost.forEach(e => {
            // console.log(e)
            html += `      <div class="col-md-4 mb-3">
            <div class="card h-100">
            <a href="post.html" class="text-decoration-none text-dark" onClick="post(${e.id})">
            <div class="card-body">
                    <div class="d-flex justify-content-end">
                     <h6 class="text-danger">${e.id}</h6>
                     </div>
                    <h5 class="post-title mb-4">${e.title}</h5>
                    <p class="post-body">${e.body}</p>
                </div>
                <div class ="d-flex justify-content-between m-1">
                    <div>
                    <button type="submit" id="click" onclick="post(${e.id})" class="btn btn-primary">Read More</button>
                    </div>
                    </a>
                    <div>
                    <button type="submit" id="click" onclick = "updatePost(${e.id})" class="btn btn-warning text-white ">Update</button>
                    </div>
                    <div>
                    <button type="submit" id="click" onclick = "deletePost(${e.id})" class="btn btn-danger text-white ">Delete</button>
                    </div>
                </div>
            </div>
            
        </div>`
postLayout.innerHTML = html
});
    })

}