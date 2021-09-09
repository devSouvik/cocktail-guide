async function getApi() {
  let drinkName = document.getElementById("name").value;
  const api_url = "www.thecocktaildb.com/api/json/v1/1/random.php";
  const response = await fetch(api_url);
  const data = await response.json();

  let imageUrl = `${data["drinks"][0]["strDrinkThumb"]}`;
  let drink_name = `${data["drinks"][0]["strDrink"]}`;
  let drink_Type = `${data["drinks"][0]["strAlcoholic"]}`;
  let ingredients = `${
    (data["drinks"][0]["strIngredient1"],
    data["drinks"][0]["strIngredient2"],
    data["drinks"][0]["strIngredient3"],
    data["drinks"][0]["strIngredient4"])
  }`;
  let preparation = `${data["drinks"][0]["strInstructions"]}`;
  let videourl = `${data["drinks"][0]["strVideo"]}`;
  let display_text = `Drink Type: ${drink_Type}\nDrink Ingredients: ${ingredients}\nPreparation: ${preparation}`;

  if (imageUrl !== "null") {
    document.getElementById("thumbnail-image").src = imageUrl;
  }
  document.getElementById("cardTitle").innerText = drink_name;
  document.getElementById("cardText").innerText = display_text;
  document.getElementById("videoButton").href = videourl;

  console.log(imageUrl);
}
