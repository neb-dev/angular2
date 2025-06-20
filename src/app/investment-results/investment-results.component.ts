import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  // results = input.required<InvestmentResults>();
  // results = computed(() => this.investmentService.investmentResults());
  results = this.investmentService.investmentResults.asReadonly();

  // get investmentResults() {
  //   return this.investmentService.investmentResults;
  // }
}
