export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = '';

  books.forEach(book => {
    const li = document.createElement('li');
    // li.setAttribute('class', "user-card");
    const img = document.createElement('img');

    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;

    const p = document.createElement('p');
    p.textContent = `Title: ${book.title}`

    const button = document.createElement('button')
    button.textContent = `View ${book.author.name}`;
    button.dataset.authorUrlKey = book.author.urlKey;

    li.append(img, p, button)
    bookListEl.append(li);
  });
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.textContent = author.name

  const img = document.createElement('img');
  img.src = author.pictureUrl
  img.alt = `A picture of ${author.name}`


  const p = document.createElement('p');
  p.textContent = `Born: ${author.birthDate}`

  const pBio = document.createElement('p');
  pBio.textContent = author.bio

  const a = document.createElement('a');
  a.href = author.wikipediaUrl;
  a.textContent = 'Wikipedia Link';

  // Append all elements to the authorDiv in the specified order
  authorInfoEl.append(h2, img, p, pBio, a);
}

export const renderNewUserForm = (newUserFormEl) => {

  const label1 = document.createElement('label');
  label1.textContent = "Username"
  label1.htmlFor = 'username'

  const input1 = document.createElement('input');
  input1.id = 'username'
  input1.name = 'username'

  const label2 = document.createElement('label');
  label2.textContent = "Is this user cool?"
  label2.htmlFor = 'is-cool'

  const input2 = document.createElement('input');
  input2.id = 'is-cool'
  input2.name = 'isCool'
  input2.type = 'checkbox'


  const label3 = document.createElement('label')
  label3.textContent = "Favorite Language"
  label3.htmlFor = 'favorite-language'

  const select = document.createElement('select')
  select.id = 'favorite-language'
  select.name = 'favoriteLanguage'

  const option1 = document.createElement('option')
  option1.value = "None"
  option1.textContent = "None"

  const option2 = document.createElement('option')
  option2.value = "JavaScript"
  option2.textContent = "JavaScript"



  const option3 = document.createElement('option')
  option3.value = "Python"
  option3.textContent = "Python"

  const option4 = document.createElement('option')

  option4.value = "Ruby"
  option4.textContent = "Ruby"

  select.append(option1, option2, option3, option4)

  const button = document.createElement('button')
  button.textContent = "Create User"


  newUserFormEl.append(label1, input1, label2, input2, label3, select, button)
}

export const renderNewUser = (newUserEl, newUser) => {
  console.log(newUser)
  newUserEl.innerHTML = '';

  const h2 = document.createElement('h2')
  h2.textContent = newUser.username
  h2.dataset.userId = newUser.id

  const p1 = document.createElement('p');
  console.log(newUser.isCool)
  if (newUser.isCool) {
    p1.textContent = 'The hippest in the house!'
  } else {
    p1.textContent = 'A real square.'
  }

  // Create p element for the favorite language
  const p2 = document.createElement('p');
  p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

  newUserEl.append(h2, p1, p2)

}