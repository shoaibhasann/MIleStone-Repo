const createBlogButton = document.getElementById('createBlog');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('close');
const blogDescription = document.querySelectorAll('.blog__description');
const addBlogButton = document.getElementById('add__btn');
const modalContentForm = document.querySelector(".modal__content");
const blogContainer = document.getElementById('blog__container');

// function to show Modal
function showModal(){
    console.log('openning modal')
     modal.classList.add("open");
}

// function to close Modal
function closeModal(){
    console.log('closing modal');
      modal.classList.remove("open");
}


// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('form submission call')

  // Get form input values
  const url = document.getElementById("url").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const write = document.getElementById("write").value;

  // Create HTML content for the new blog post
  const blogContent = `
    <div class="blog__card">
      <div class='image__wrapper'>
      <img src=${url} alt=${title}/>
      </div>
      <h2 class='blog__title'>${title}</p>
      <p class='blog__description'>${description.split(" ").slice(0, 15)}</p>
    </div>
  `;

  // Append the new blog post content to the container
  blogContainer.innerHTML += blogContent;

   closeModal();

  // Clear the form inputs after the modal is closed
}
createBlogButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
addBlogButton.addEventListener("click", handleFormSubmit);