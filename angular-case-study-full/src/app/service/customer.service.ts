import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResult} from '../model/search-result';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  save(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/api/customers/add', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/api/customers/${id}`);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/api/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(API_URL + '/api/customers/' + id);
  }

  paginate(page: number, limit: number): Observable<SearchResult<Customer>> {
    return this.http.get<SearchResult<Customer>>(API_URL + '/api' + '/customers/list' + '?number=' + page + '&size=' + limit);
  }
}
