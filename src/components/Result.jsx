import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
	const results = calculateInvestmentResults(userInput);

	return (
		<>
			<h3 className="center" style={{ margin: 0 }}>
				Accumulation Schedule
			</h3>
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Invested Capital</th>
						<th>Interest</th>
						<th>Total Interest</th>
						<th>Investment Value</th>
					</tr>
				</thead>
				<tbody>
					{results.map((result, index) => {
						const isLastItem = index === results.length - 1;
						return (
							<tr key={result.year} style={isLastItem ? { fontWeight: "bold" } : {}}>
								<td>{result.year}</td>
								<td>{formatter(userInput.currency).format(result.totalInvested)}</td>
								<td>{formatter(userInput.currency).format(result.interest)}</td>
								<td>{formatter(userInput.currency).format(result.totalInterest)}</td>
								<td>{formatter(userInput.currency).format(result.valueEndOfYear)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
