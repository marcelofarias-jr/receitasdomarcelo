export const loadRecipe = async () => {
  const recipeResponse = fetch('https://marcelofarias-jr.github.io/data/db.json');
  const [receitas] = await Promise.all([recipeResponse]);
  const postsJson = await receitas.json();
  return postsJson;
};
