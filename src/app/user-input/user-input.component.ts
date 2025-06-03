import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input.types';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInputData: UserInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  };
  // userInput = output<UserInput>();

  private investmentService = inject(InvestmentService);

  handleSubmit() {
    // this.userInput.emit(this.userInputData);
    this.investmentService.calculateInvestmentResults(this.userInputData);
    this.resetForm();
  }

  resetForm() {
    this.userInputData.initialInvestment = 0;
    this.userInputData.annualInvestment = 0;
    this.userInputData.expectedReturn = 5;
    this.userInputData.duration = 10;
  }
}
