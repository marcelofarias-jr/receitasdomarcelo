// export const loadRecipe = async () =>{
//   const recipeResponse = fetch('http://localhost:3000/receitas');

//   const [receitas] = await Promise.all([recipeResponse]);

//   const postsJson = await receitas.json();

//   // const postsAndPhotos = postsJson.map((post, index) => {
//   //   return { ...post, cover: photosJson[index].url };
// });

// return postsAndPhotos;
// };

export const loadRecipe = async () => {
  const recipeResponse = fetch('https://marcelofarias-jr.github.io/data/db.json');
  const [receitas] = await Promise.all([recipeResponse]);

  const postsJson = await receitas.json();

  return postsJson;
};

// export const loadTheRecipe = async (id) =>{
//   axios.get(`http://localhost:3000/receitas`+ id).then(
//             (response) => {
//                 setDados(response.data.data.results)
//             },

//   const recipeTheResponse = fetch('http://localhost:3000/receitas/'+id);
//   console.log('load', recipeTheResponse)
//   const [receita] = await Promise.all([recipeTheResponse]);
//   const theRecipe = await receita.json();
//   console.log('the',theRecipe.titulo )
//   return theRecipe;

// }
