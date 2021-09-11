async function getSearch() {
  let drinkName = document.getElementById("cocktail-name").value;
  const api_url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
  const response = await fetch(api_url);
  const data = await response.json();

  let imageUrl = `${data["drinks"][0]["strDrinkThumb"]}`;
  let drink_name = `${data["drinks"][0]["strDrink"]}`;
  let drink_Type = `${data["drinks"][0]["strAlcoholic"]}`;
  let [a1, a2, a3, a4, a5, a6, a7, a8, a9] = [
    data["drinks"][0]["strIngredient1"],
    data["drinks"][0]["strIngredient2"],
    data["drinks"][0]["strIngredient3"],
    data["drinks"][0]["strIngredient4"],
    data["drinks"][0]["strIngredient5"],
    data["drinks"][0]["strIngredient6"],
    data["drinks"][0]["strIngredient7"],
    data["drinks"][0]["strIngredient8"],
    data["drinks"][0]["strIngredient9"],
  ];
  let preparation = `${data["drinks"][0]["strInstructions"]}`;
  let videourl = `${data["drinks"][0]["strVideo"]}`;

  if (imageUrl === "null") {
    console.log("sorry, there's no video for this item");
  } else {
    document.getElementById("thumbnail-image").src = imageUrl;
  }
  document.getElementById("cardTitle").innerText = drink_name;
  document.getElementById("drinkType").innerText = drink_Type;
  document.getElementById("ingredients").innerText = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
  ];
  document.getElementById("procedure").innerText = preparation;
  // document.getElementById("cardText").innerText = display_text;
  document.getElementById("videoButton").href = videourl;

  console.log(imageUrl);
}
