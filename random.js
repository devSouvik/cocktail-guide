async function randomApi() {
  // search random

  const api_url = "www.thecocktaildb.com/api/json/v1/1/random.php";
  const response = await fetch(api_url);
  const data = await response.json();

  let imageUrl = `${data["drinks"][0]["strDrinkThumb"]}`;
  let drink_name = `${data["drinks"][0]["strDrink"]}`;
  let drink_Type = `${data["drinks"][0]["strAlcoholic"]}`;
  let ingredients = [
    `${
      (data["drinks"][0]["strIngredient1"],
      data["drinks"][0]["strIngredient2"],
      data["drinks"][0]["strIngredient3"],
      data["drinks"][0]["strIngredient4"],
      data["drinks"][0]["strIngredient5"],
      data["drinks"][0]["strIngredient6"],
      data["drinks"][0]["strIngredient7"],
      data["drinks"][0]["strIngredient8"])
    }`,
  ];
  let preparation = `${data["drinks"][0]["strInstructions"]}`;
  let videourl = `${data["drinks"][0]["strVideo"]}`;
  let display_text = `Drink Type: ${drink_Type}\nDrink Ingredients: ${ingredients}\nPreparation: ${preparation}`;

  if (imageUrl !== "null") {
    document.getElementById("thumbnail-image1").src = imageUrl;
  }
  document.getElementById("cardTitle1").innerText = drink_name;
  document.getElementById("cardTex1t1").innerText = display_text;
  document.getElementById("videoButton1").href = videourl;

  console.log(imageUrl);
}

async function getbyIngredient() {}
