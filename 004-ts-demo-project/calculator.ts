/**
 * @param data:
 * initial amount
 * annual contibution
 * expected return
 * duration
 */
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}
function calculateInvestement(data: InvestmentData) {} // => result[]

function printResults(results) {
  // print (output) the result data
}

const results = calculateInvestement(..);

printResults(results)