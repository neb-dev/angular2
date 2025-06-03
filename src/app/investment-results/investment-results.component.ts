import { Component, computed, inject } from '@angular/core';
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
  // results = this.investmentService.investmentResults.asReadonly();
  results = computed(() => this.investmentService.investmentResults());

  // get investmentResults() {
  //   return this.investmentService.investmentResults;
  // }
}
