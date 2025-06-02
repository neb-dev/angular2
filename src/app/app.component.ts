import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import {
  calculateInvestmentResults,
  InvestmentResults,
} from '../investment-results';
import { UserInput } from './user-input/user-input.types';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  investmentResults: InvestmentResults = [];

  handleUserInput(userInput: UserInput) {
    this.investmentResults = calculateInvestmentResults(userInput);
    console.log(this.investmentResults);
  }
}
