const url = 'https://gateway.marvel.com/v1/public/characters';

fetch(url)
  .then(response => {
    if(response.status)
      throw new Error('Network response was not ok ' + response.statusText);
      
  })

  .then(data => {
    console.log(data);

  const characters = data.data.results;
  characters.forEach(character => {
    console.log(character.name)
  });
})
  .catch(error => {
    console.error('There was a problem with the fetch operation', error);
  });
  

  