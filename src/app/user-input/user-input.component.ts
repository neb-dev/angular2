import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from '../../investment-results';

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
    expectedReturn: 0,
    duration: 0,
  };
  userInput = output<UserInput>();

  handleSubmit() {
    this.userInput.emit(this.userInputData);
  }
}
