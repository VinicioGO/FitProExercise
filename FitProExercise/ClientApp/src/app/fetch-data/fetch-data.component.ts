import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public customers: Customer[];

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            console.log(error);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    params = {};
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.listCustomers();
    }

    public listCustomers() {
        this.http.get<Customer[]>(this.baseUrl + 'Ftp/listCustomers').subscribe(result => {
            this.customers = result;
        }, error => console.error(error));
    }

    public deleteCustomer(data) {
        
        this.http.post<Customer>(this.baseUrl + 'Ftp/deleteCustomer', data, this.httpOptions).pipe(
            catchError(this.handleError<Customer>('Ftp/deleteCustomer'))
        ).toPromise();

        alert('Successful removal');
        this.listCustomers();
    }

}

interface Customer {
    name: string;
    phone: string;
    email: string;
    notes: string;
}
