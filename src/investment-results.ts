// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

export interface UserInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

export type InvestmentResults = AnnualData[];

export function calculateInvestmentResults(
  userInput: UserInput
): InvestmentResults {
  const annualData = [];
  let investmentValue = userInput.initialInvestment;

  for (let i = 0; i < userInput.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear =
      investmentValue * (userInput.expectedReturn / 100);
    investmentValue += interestEarnedInYear + userInput.annualInvestment;
    const totalInterest =
      investmentValue -
      userInput.annualInvestment * year -
      userInput.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: userInput.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested:
        userInput.initialInvestment + userInput.annualInvestment * year,
    });
  }

  return annualData;
}
