document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById('full__blog')
  const urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams)
  const blogId = urlParams.get("id");

  // Use the blogId to load and display the corresponding blog content
  loadBlogContent(blogId);

 function loadBlogContent(blogId){
    const blogs = localStorage.getItem('blogs');

    if(blogs){
        const blogsArray = JSON.parse(blogs);

        
        if(blogId >= 0 && blogId < blogsArray.length){
            const blog = blogsArray.at(blogId);
                        const blogContent = `
        <div class="blog__card">
          <div class="image__wrapper">
           <div class="blog__heading">
            <h2 class="blog__title">${blog.title}</h2>
           </div>
            <img src="${blog.url}" alt="${blog.title}">
          </div>
          <p class="blog__description">${blog.description}</p>
          <p class="blog__write">${blog.write}</p>
        </div>
      `;

                        // Append the blog content to the container
                        blogContainer.innerHTML += blogContent;
        
        }

    }
 }

})