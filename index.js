const publicKey = '878be257365541995e2dea21bfc81eb6';
const privateKey = '401b56ef60b3d8edb2b398ba3fdab906889c631e';
const date = Date.now().toString();
const hash = CryptoJS.MD5(date + privateKey + publicKey).toString()
const url = `https://gateway.marvel.com/v1/public/characters?ts=${date}&apikey=${publicKey}&hash=${hash}`;
const fetchMe = fetch(url);


fetchMe
  .then (response =>{
    return response.json();
  })

  .then (data =>{
    console.log(data);
  })

  .catch(error => {
    console.error('There was a problem with the fetch operation', error);
  });



document.addEventListener('DOMContentLoaded', () => {
  const dataPoint1Link = document.getElementById('dataPoint1Link');
  const dataPoint2Link = document.getElementById('dataPoint2Link');
  const dataPoint1Section = document.getElementById('dataPoint1');
  const dataPoint2Section = document.getElementById('dataPoint2');
  const dataPoint1Content = document.getElementById('dataPoint1Content');
  const dataPoint2Content = document.getElementById('dataPoint2Content');

  async function fetchData(url, element) {
      try {
          const response = await fetch(url);
          const data = await response.json();
          element.innerHTML = JSON.stringify(data, null, 2); // For demonstration, display raw JSON
      } catch (error) {
          element.innerHTML = 'Failed to load data';
      }
  }

  function showSection(section) {
      dataPoint1Section.classList.remove('active');
      dataPoint2Section.classList.remove('active');
      section.classList.add('active');
  }

  dataPoint1Link.addEventListener('click', () => {
      showSection(dataPoint1Section);
      fetchData(`https://gateway.marvel.com/v1/public/characters?ts=${date}&apikey=${publicKey}&hash=${hash}`, dataPoint1Content); // Replace with your URL
  });

  dataPoint2Link.addEventListener('click', () => {
      showSection(dataPoint2Section);
      fetchData(`https://gateway.marvel.com/v1/public/characters?ts=${date}&apikey=${publicKey}&hash=${hash}`, dataPoint2Content); // Replace with your URL
  });

  // Optionally, load the first data point on page load
  dataPoint1Link.click();
});


  