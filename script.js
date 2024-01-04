const btnGenerator = document.querySelector("#btn-generator");

//gets the advice from the API
function generate() {
  url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((response) => response.json())
    .then((data) => changeQuote(data.slip.advice))
    .catch((error) => console.log(error));
}

//shows the advice in the screen
function changeQuote(advice) {
  let quote = document.querySelector("#quote");
  quote.innerHTML = `"${advice}"`;
}
