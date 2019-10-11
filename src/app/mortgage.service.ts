import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    console.log('Login service');
    return this.http.get('http://10.117.189.163/mortgage/api/login')
      .map((res: Response) => res.json()
      )
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  applyLoan(tenure, principleAmt) {
    console.log('Apply Loan');
    return this.http.post('http://100.77.15.18:8080/mortagage/user/applyloan', tenure, principleAmt);
  }
}
