import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
    newCustomer = {} as Customer;

    params = {};
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    public addCustomer() {
        if (this.newCustomer.name == null || this.newCustomer.name == '') {
            alert('Please enter a name');
            return;
        }
        if (this.newCustomer.phone == null || this.newCustomer.phone == '') {
            alert('Please enter a phone');
            return;
        }
        if (this.newCustomer.email == null || this.newCustomer.email == '') {
            alert('Please enter a email');
            return;
        }
        if (this.newCustomer.notes == null || this.newCustomer.notes == '') {
            alert('Please enter a note');
            return;
        }
        this.http.post<Customer>(this.baseUrl + 'Ftp/addCustomer', this.newCustomer, this.httpOptions).pipe(
            catchError(this.handleError<Customer>('Ftp/addCustomer'))
        ).toPromise();

        this.newCustomer = {} as Customer;

        alert('Successful registration');
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            console.log(error);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

interface Customer {
    name: string;
    phone: string;
    email: string;
    notes: string;
}
