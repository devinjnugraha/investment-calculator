export default function UserInput({ onChange, userInput }) {
	return (
		<section id="user-input">
			<div>
				<p>
					<label htmlFor="currency">Currency</label>
					<select
						required
						onChange={(event) => onChange("currency", event.target.value)}
						value={userInput.currency}
					>
						<option value="usd">USD</option>
						<option value="idr">IDR</option>
					</select>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="initialInvestment">Initial Investment ({userInput.currency})</label>
					<input
						type="number"
						required
						onChange={(event) => onChange("initialInvestment", event.target.value)}
						value={userInput.initialInvestment}
					/>
				</p>
				<p>
					<label htmlFor="contribution">Additional Contribution ({userInput.currency})</label>
					<input
						type="number"
						required
						onChange={(event) => onChange("contribution", event.target.value)}
						value={userInput.contribution}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expectedReturn">Expected Return p.a. (%)</label>
					<input
						type="number"
						required
						onChange={(event) => onChange("expectedReturn", event.target.value)}
						value={userInput.expectedReturn}
					/>
				</p>
				<p>
					<label htmlFor="duration">Duration (Years)</label>
					<input
						type="number"
						required
						onChange={(event) => onChange("duration", event.target.value)}
						value={userInput.duration}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="contributeAt">Contribute at the</label>
					<select
						required
						onChange={(event) => onChange("contributeAt", event.target.value)}
						value={userInput.contributeAt}
					>
						<option value="beginning">beginning</option>
						<option value="end">end</option>
					</select>
				</p>
				<p>
					<label htmlFor="contributionPeriod">of each</label>
					<select
						required
						onChange={(event) => onChange("contributionPeriod", event.target.value)}
						value={userInput.contributionPeriod}
					>
						<option value="monthly">month</option>
						<option value="yearly">year</option>
					</select>
				</p>
			</div>
		</section>
	);
}
