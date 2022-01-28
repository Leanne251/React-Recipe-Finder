import { useState, useRef } from 'react';
import RecipeOptions from '../RecipeOptions/RecipeOptions';

function SearchForm() {
	const [ input, setInput ] = useState([]);
	const [ returnedRecipes, setReturnedRecipes ] = useState([]);

	const numberArray = [ 'One', 'Two', 'Three' ];

	function getInput(e) {
		setInput(e.target.value);
	}

	function buttonClick() {
		setInput('');
		searchRecipes();
	}

	async function searchRecipes() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=3&apiKey=a555aea16fc3473197b4c2afa236c9f8`
		);
		const data = await response.json();
		console.log(data);
		setReturnedRecipes(data);
		setInput('');
	}

	return (
		<div>
			<h1>What do you want to cook?</h1>
			Ingredient One:<input type="text" onChange={getInput} value={input} />
			<button onClick={buttonClick}>Search</button>
			<RecipeOptions returnedRecipes={returnedRecipes} input={input} setReturnedRecipes={setReturnedRecipes} />
		</div>
	);
}

export default SearchForm;

// const [ value, setValue ] = useState('');

// now we want to search for 3 ingredients.
// first, create a map to produce three input boxes with different names.
// use an array to give a different end result.

// now create an array with the three inputs and put these values into the API.

/*<form action={SearchResults}>
				{numberArray.map((element) => (
					<p key={element}>
						Ingredient {element}:
						<input type="text" name={'input'} id={element} />
					</p>
				))} 
				
			</form>*/
//}
// console.log('inputValueArray', input);

// function addToInput(e) {
// 	let array = [];
// 	array.push(e.target.value);
// 	console.log('array', array);
// }

/*  Ingreadient Two: <input type="text" onChange={getInput} />
	Ingredient Three: <input type="text" onChange={getInput} />  */
