"use strict";
function calculateInvestement(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero.";
    }
    if (duration <= 0) {
        return "No valid amount of years provided.";
    }
    if (expectedReturn <= 0) {
        return "expected return must be at least zero.";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
} // => result[]
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResults.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResults.totalInterestEarned.toFixed(0)}`);
        console.log("---------------------");
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
const results = calculateInvestement(investmentData);
printResults(results);
