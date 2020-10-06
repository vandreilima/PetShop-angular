import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Filter } from '../models/filter';


@Injectable({
  providedIn: 'root'
})
export class CadFilterService {

  url = 'http://localhost:3000/filter'

  constructor(private  httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

getFilters(): Observable<Filter[]> {
  return this.httpClient.get<Filter[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
}

getFilterById(id: number): Observable<Filter> {
  return this.httpClient.get<Filter>(this.url + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

cadFilter(filter: Filter): Observable<Filter> {
  return this.httpClient.post<Filter>(this.url, JSON.stringify(filter), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

updateFilter(filter: Filter): Observable<Filter> {
  return this.httpClient.put<Filter>(this.url + '/' + filter.id, JSON.stringify(filter), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

deleteFilter(filter: Filter) {
  return this.httpClient.delete<Filter>(this.url + '/' + filter.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
};

}
