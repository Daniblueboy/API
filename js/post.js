const getId = localStorage.getItem('postId')

fetch(`https://jsonplaceholder.typicode.com/posts/${getId}`)
    .then(response => response.json())
    .then((e) => {
        // console.log(data)
        let postLayout = document.getElementById('post-layout')
        let html = `
        <div class ="p-5">
            <div class="col-md-12 mb-3">
            <div class="card h-100 bg-success">
            <div class="card-body">
                    <div class="d-flex justify-content-end">
                    <h6 class="text-warning">${e.id}</h6>
                    </div>
                    <div class="d-flex justify-content-center ">
                    <h5 class="post-title mb-4 h2 text-white">${e.title}</h5>
                    </div>
                    <p class="post-body">${e.body}</p>
                    <div class="d-flex justify-content-center mt-3">
                    <a href="index.html"><button class="btn btn-primary" type="submit">Back</button></a>
                    </div>
                </div>
            </div>
        </div>


        </div>`
        postLayout.innerHTML = html

    })