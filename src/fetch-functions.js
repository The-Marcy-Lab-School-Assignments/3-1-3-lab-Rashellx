export const getFirstThreeFantasyBooks = async () => {
  try {
    // Define the URL for fetching fantasy books
    const url = 'https://openlibrary.org/subjects/fantasy.json';

    // Send the fetch request and await the response
    const response = await fetch(url);

    // Check if the response is not OK (status code outside the 200-299 range)
    if (!response.ok) {
      // Throw an error with a specific message if the response is not OK
      throw new Error('Failed to get fantasy books');
    }

    // Parse the JSON response
    const data = await response.json();
    return data.works.slice(0, 3).map((book) => {
      // Destructure the properties we want from each element of the array.
      const { title, authors, cover_id } = book;
      // New author object with the desired formatting.
      const author = { 'name': authors[0].name, 'urlKey': authors[0].key };
      // Final object that will be pushed into the new array:
      const obj = {
        'title': title,
        'author': author,
        'coverUrl': `https://covers.openlibrary.org/a/id/${cover_id}-M.jpg`
      };
      return obj;
    });
  } catch (error) {
    // Log a warning message to the console if an error occurs
    console.warn(error.message);

    // Resolve the promise to null in case of an error

    return null; // async makes this function return a promise 

  }
};

// Second Question
export const getAuthor = async (urlKey) => {
  try {

    // Define the URL for fetching Author 
    const authorurl = `https://openlibrary.org${urlKey}.json`

    // Send the fetch request and await the response
    const response = await fetch(authorurl)

    // Check if the response is not OK (status code outside the 200-299 range)
    if (!response.ok) {
      // Throw an error with a specific message if the response is not OK
      throw new Error('Failed to get author');
    }
    const authorData = await response.json();

    // Format the author data as needed
    const formattedAuthor = {
      birthDate: authorData.birth_date, // Extract the birth date from the authorData
      bio: authorData.bio, // Extract the biography from the authorData
      wikipediaUrl: authorData.wikipedia, // Extract the Wikipedia link from the authorData
      name: authorData.name, // Extract the author's name from the authorData
      pictureUrl: `https://covers.openlibrary.org/a/id/${authorData.photos[0]}-M.jpg` // Construct the picture URL using the first photo ID from authorData
    };

    // Return the formatted author data
    return formattedAuthor;

  } catch (error) {
    console.warn(error.message); // Log a warning message to the console if an error occurs
    return null; // Return null in case of error
  }
};
export const createNewUser = async (user) => {
  try {
    const postOption = {
      method: "POST",                      // The type of HTTP request
      body: JSON.stringify(user),       // The data to be sent to the API
      headers: {
        "Content-Type": "application/json" // The format of the body's data
      }
    }

    // Send the fetch request and await the response
    const userUrl = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(userUrl, postOption)

    // Check if the response is not OK (status code outside the 200-299 range)
    if (!response.ok) {
      // Throw an error with a specific message if the response is not OK
      throw new Error('Failed to create new user');
    }
    return await response.json();



  } catch (error) {
    console.warn(error); // Log a warning message to the console if an error occurs
    return null; // Return null in case of error
  }


}