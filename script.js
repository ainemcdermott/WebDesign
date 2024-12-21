// Replace with your actual Spoonacular API key
const apiKey = '6fe58e9756754d6583efa342c1a9a1f7'; 

// Function to fetch recipes from the Spoonacular API
function searchRecipes() {
    const query = document.getElementById('search-input').value; // Get user input

    if (!query) {
        alert('Please enter a recipe or ingredient');
        return;
    }

    // Construct the API URL for the search endpoint
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())  // Parse the JSON response
        .then(data => displayRecipes(data.results))  // Pass the recipes to display
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display recipe results
function displayRecipes(recipes) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        container.innerHTML = '<p>No recipes found!</p>';
        return;
    }

    // Loop through the recipes and display them
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a>
        `;
        container.appendChild(recipeElement);
    });
}
