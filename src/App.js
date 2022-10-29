import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'

function App() {
	return (
		<div className="App">
			<Header />
			<main className='Main'>
				<Home />
				<About />
				<Skills />
			</main>
		</div>
	);
}

export default App;
