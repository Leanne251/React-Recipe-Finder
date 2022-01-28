import './App.css';

import SearchForm from '../SearchForm/SearchForm';

function App() {
	function buttonValue(e) {
		console.log('button value', e.target.innerText);
	}

	return (
		<div>
			<SearchForm />
		</div>
	);
}

export default App;
