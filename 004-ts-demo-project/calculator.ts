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

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContrubutions: number;
  totalInterestEarned: number;
}

type CalculationResult = InvestmentResult | string;

function calculateInvestement(data: InvestmentData): CalculationResult {} // => result[]

function printResults(results) {
  // print (output) the result data
}

const results = calculateInvestement(..);

printResults(results)