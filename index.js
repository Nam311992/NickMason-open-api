const publicKey = '878be257365541995e2dea21bfc81eb6';
const privateKey = '401b56ef60b3d8edb2b398ba3fdab906889c631e';
const date = Date.now().toString();
const hash = CryptoJS.MD5(date + privateKey + publicKey).toString()
const url = `https://gateway.marvel.com/v1/public/characters?ts=${date}&apikey=${publicKey}&hash=${hash}`;



fetch(url)
  .then (function (response){
    return response.json();
  })

  .then (function(data){
    console.log(data);
  })

  .catch(error => {
    console.error('There was a problem with the fetch operation', error);
  });
  

  