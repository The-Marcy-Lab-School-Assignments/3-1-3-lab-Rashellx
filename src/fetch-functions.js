export const getFirstThreeFantasyBooks = async () => {
  // fetch data with URL
  const url = ('https://openlibrary.org/subjects/fantasy.json')
  const response = await fetch(url)
  // check to see response is ok
  try {
    if (!response.ok) throw new Error(`Fetch failed to get fantasy books}`)


    // parse response body to JSON into JS object 
    const jsonData = await response.json()
    console.log(jsonData)
    // return 3 books
    return jsonData.slice(0, 3)
  }
  catch (error) {
    console.warn(error.message)
    // return new promise (() => null)
    return null
  }
};

export const getAuthor = () => {
};

export const createNewUser = () => {
}