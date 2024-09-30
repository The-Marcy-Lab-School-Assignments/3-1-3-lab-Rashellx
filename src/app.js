import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);

  // Render the form!

  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks()
  // render out the books
  // Render the fetched books using renderBookList
  renderBookList(bookListEl, books);




  // Add a click event listener to bookListEl
  bookListEl.addEventListener("click", async (event) => {
    // Retrieve the element that triggered the click event
    const currButton = event.target;

    // Get the author data using the authorUrlKey stored in the dataset of the clicked button
    const author = await getAuthor(currButton.dataset.authorUrlKey);

    // Render the fetched author information into the authorInfoEl
    renderAuthorInfo(authorInfoEl, author);
  });

  newUserFormEl.addEventListener('submit', async (e) => {
    // stop the reload/redirect
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    const newUser = await createNewUser(formObj)
    // use the helper function, passing in the form's pokemon data
    renderNewUser(newUserEl, newUser)

    form.reset();
  })
}
