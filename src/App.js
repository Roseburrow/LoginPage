import Header from './components/header/main';
import TranslatedText from './components/translated-text/main';

import './App.css';

function App() {
	return (
		<div className="App">
			<div className="Login">
				<Header/>
				<form className="LoginForm">
					<label className="LoginLabel" for="username">
						<TranslatedText value="username_label"/>
					</label>
					<input className="LoginInput" type="text" id="username" name="username"/>
					<label className="LoginLabel" for="password">
						<TranslatedText value="password_label" />
					</label>
					<input className="LoginInput" type="password" id="password" name="password"/>
					<button className="LoginButton">
						<TranslatedText value="login_label" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
