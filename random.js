async function randomApi() {
  let drinkName = document.getElementById("cocktail-name").value;
  const api_url1 = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const response1 = await fetch(api_url1);
  const data1 = await response1.json();

  let imageUrl1 = `${data1["drinks"][0]["strDrinkThumb"]}`;
  let drink_name1 = `${data1["drinks"][0]["strDrink"]}`;
  let drink_Type1 = `${data1["drinks"][0]["strAlcoholic"]}`;
  let [a1, a2, a3, a4, a5, a6, a7, a8] = [
    data1["drinks"][0]["strIngredient1"],
    data1["drinks"][0]["strIngredient2"],
    data1["drinks"][0]["strIngredient3"],
    data1["drinks"][0]["strIngredient4"],
    data1["drinks"][0]["strIngredient5"],
    data1["drinks"][0]["strIngredient6"],
    data1["drinks"][0]["strIngredient7"],
    data1["drinks"][0]["strIngredient8"],
  ];

  let preparation1 = `${data1["drinks"][0]["strInstructions"]}`;
  let videourl1 = `${data1["drinks"][0]["strVideo"]}`;

  if (imageUrl1 === "null") {
    console.log("sorry, there's no video for this item");
  } else {
    document.getElementById("thumbnail-image1").src = imageUrl1;
  }
  document.getElementById("cardTitle1").innerText = drink_name1;
  document.getElementById("drinkType1").innerText = drink_Type1;
  document.getElementById("ingredients1").innerText = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
  ];
  document.getElementById("procedure1").innerText = preparation1;
  // document.getElementById("cardText").innerText = display_text;
  document.getElementById("videoButton1").href = videourl1;

  console.log(imageUrl1);

  // window.location.href = "random.html";
}
