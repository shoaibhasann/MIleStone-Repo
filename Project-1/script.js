document.addEventListener("DOMContentLoaded", function () {
  const createBlogButton = document.getElementById("createBlog");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close");
  const addBlogButton = document.getElementById("add__btn");
  const modalContentForm = document.querySelector(".modal__content");
  const blogContainer = document.getElementById("blog__container");

  // Function to show Modal
  function showModal() {
    modal.style.display = "block";
  }

  // Function to close Modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submission call");

    // Get form input values
    const url = document.getElementById("url").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const write = document.getElementById("write").value;

    const newBlog = {
      url: url,
      title: title,
      description: description,
      write: write
    };

    const storedBlogsLocal = localStorage.getItem("blogs")

    const existingBlogs = JSON.parse(storedBlogsLocal) || [];

    existingBlogs.push(newBlog);

    localStorage.setItem("blogs", JSON.stringify(existingBlogs));

    // update the display blogs

    displayBlogs();

    closeModal();
  }

  // Function to display blogs on the page
  function displayBlogs() {
    // Retrieve the blogs from local storage
    const storedBlogs = localStorage.getItem("blogs");

    if (storedBlogs) {
      const existingBlogs = JSON.parse(storedBlogs);

      // Clear the current content in the blog container
      blogContainer.innerHTML = "";

      // Loop through the blogs and create HTML content for each
      existingBlogs.forEach((blog, index) => {
        const blogContent = `
        <div class="blog__card" data-blog-id="${index}">
          <div class="image__wrapper">
            <img src="${blog.url}" alt="${blog.title}">
          </div>
          <h2 class="blog__title">${blog.title}</h2>
          <p class="blog__description">${
            blog.description.slice(0, 120) + " ..."
          }</p>
          <a href="blog.html?id=${index}" class="read__more">Read More</a>
        </div>
      `;

        // Append the blog content to the container
        blogContainer.innerHTML += blogContent;
      });
    } else {
      // Handle the case when there are no blogs in local storage
      blogContainer.innerHTML = "<p class='no__blogs'>No blogs available.</p>";
    }
  }

  createBlogButton.addEventListener("click", showModal);
  closeButton.addEventListener("click", closeModal);
  addBlogButton.addEventListener("click", handleFormSubmit);

  displayBlogs();
});
