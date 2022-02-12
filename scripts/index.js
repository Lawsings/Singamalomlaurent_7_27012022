import { recipes } from "../recipes.js";
import recipeFactory from "../scripts/recipesDisplay.js";


// Recipes
function displayRecipes() {
  const recipesContainer = document.getElementById("recipes");
  recipesContainer.innerHTML = "";

  let recipeCardTemplate = "";
  for (const recipe of recipes) {
    const recipeModel = new recipeFactory(recipe, recipeCardTemplate);
    recipeCardTemplate = recipeModel.createCardRecipe();
  }
  recipesContainer.innerHTML = recipeCardTemplate;
}

displayRecipes();

