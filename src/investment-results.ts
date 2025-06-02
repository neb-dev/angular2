import { AnnualData } from './app/investment-results/investment-results.types';
import { UserInput } from './app/user-input/user-input.types';

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
