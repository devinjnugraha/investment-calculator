import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		contribution: 1000,
		contributeAt: "end",
		contributionPeriod: "monthly",
		expectedReturn: 6,
		duration: 5,
		currency: "usd",
	});

	const inputIsValid =
		userInput.initialInvestment >= 0 &&
		userInput.contribution >= 0 &&
		userInput.expectedReturn > 0 &&
		userInput.duration > 0;

	function handleChange(inputId, newValue) {
		setUserInput((userInput) => {
			return {
				...userInput,
				[inputId]:
					inputId === "contributionPeriod" || inputId === "contributeAt" || inputId === "currency"
						? newValue
						: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleChange} userInput={userInput} />
			{inputIsValid ? <Result userInput={userInput} /> : <p className="center">Please fill out the fields</p>}
			<Footer />
		</>
	);
}

export default App;
