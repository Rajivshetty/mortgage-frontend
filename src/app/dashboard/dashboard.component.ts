import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MortgageService } from '../mortgage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  tenure: number;
  interest: number;
  totalAmount: any;
  monthes: number;
  emi: number;
  principalAmt: number;
  userData: any;
  constructor(private router: Router, private messageService: MessageService, private mortgageService: MortgageService) { }

  ngOnInit() {
  }

  onTabChange(event) {
    this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }

  applyLoan(tenure, principalAmt) {
    this.tenure = tenure;
    this.principalAmt = principalAmt;
    this.mortgageService.applyLoan(this.tenure, this.principalAmt).subscribe(data => {
      alert('Loan applied successfully')
      this.router.navigate(['\home']);
      console.log('success', data)
    });
  }

  emiCalculator() {
    this.interest = (this.totalAmount * this.tenure * 10) / 100;
    this.principalAmt = this.totalAmount;
    this.totalAmount = parseInt(this.totalAmount) + this.interest;
    this.monthes = this.tenure * 12;
    this.emi = this.totalAmount / this.monthes;
    alert(this.interest);
    alert(this.totalAmount);
    alert(this.emi);
  }

}
