import { Component, input } from '@angular/core';
import { InvestmentResults } from '../../investment-results';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input.required<InvestmentResults>();
}
