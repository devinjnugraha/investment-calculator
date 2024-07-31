import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
	return (
		<header id="header">
			<img src={logo} alt="" />
			<h1>Investment Calculator</h1>
			<p>
				This powerful and intuitive web application helps you project the growth of your investments over time,
				taking into account your initial investment, periodic contributions, expected annual return rate, and
				investment duration.
			</p>
		</header>
	);
}
