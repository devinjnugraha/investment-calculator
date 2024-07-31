// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - contribution: The amount invested each period (monthly or yearly)
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame in years)
// - contributionPeriod: The period of contribution ("monthly" or "yearly")
export function calculateInvestmentResults({
	initialInvestment,
	contribution,
	expectedReturn,
	duration,
	contributionPeriod,
	contributeAt,
}) {
	const annualData = [];
	let investmentValue = initialInvestment;

	// Determine compounding periods per year based on contribution period
	const periodsPerYear = contributionPeriod === "monthly" ? 12 : 1;
	const ratePerPeriod = expectedReturn / 100 / periodsPerYear;

	for (let i = 0; i < Math.floor(duration); i++) {
		let interestEarnedInYear = 0;

		// Iterate over each period within the year
		for (let j = 0; j < periodsPerYear; j++) {
			const principal = contributeAt === "beginning" ? investmentValue + contribution : investmentValue;

			const interestEarnedInPeriod = principal * ratePerPeriod;
			interestEarnedInYear += interestEarnedInPeriod;
			investmentValue += interestEarnedInPeriod + contribution;
		}

		// Calculate total interest and total invested
		const totalInvested = initialInvestment + contribution * periodsPerYear * (i + 1);
		const totalInterest = investmentValue - totalInvested;

		// Push the annual data
		annualData.push({
			year: i + 1, // year identifier
			interest: interestEarnedInYear, // the amount of interest earned in this year
			valueEndOfYear: investmentValue, // investment value at end of year
			annualContribution: contribution * periodsPerYear, // total investment added in this year
			totalInvested, // total amount invested until end of this year
			totalInterest, // total interest earned until end of this year
		});
	}

	// Handle fractional year if there is any
	const remainingDuration = duration - Math.floor(duration);
	if (remainingDuration > 0) {
		let interestEarnedInYear = 0;

		// Iterate over each period within the fractional year
		for (let j = 0; j < Math.floor(remainingDuration * periodsPerYear); j++) {
			const principal = contributeAt === "beginning" ? investmentValue + contribution : investmentValue;

			const interestEarnedInPeriod = principal * ratePerPeriod;
			interestEarnedInYear += interestEarnedInPeriod;
			investmentValue += interestEarnedInPeriod + contribution;
		}

		// Calculate total interest and total invested
		const totalInvested = initialInvestment + contribution * periodsPerYear * duration;
		const totalInterest = investmentValue - totalInvested;

		// Push the fractional year data
		annualData.push({
			year: duration, // fractional year identifier
			interest: interestEarnedInYear, // the amount of interest earned in this fractional year
			valueEndOfYear: investmentValue, // investment value at end of fractional year
			annualContribution: contribution * periodsPerYear * remainingDuration, // total investment added in this fractional year
			totalInvested, // total amount invested until end of this fractional year
			totalInterest, // total interest earned until end of this fractional year
		});
	}

	return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export function formatter(currency) {
	const locale = currency === "usd" ? "en-US" : "id-ID";
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}
