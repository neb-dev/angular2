import { Component, input } from '@angular/core';
import { InvestmentResults } from '../../investment-results';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input.required<InvestmentResults>();
}
