import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Provider } from '../models/provider';


@Injectable({
  providedIn: 'root'
})
export class CadProviderService {

  url = 'http://localhost:3000/provider'

  constructor(private  httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

getProviders(): Observable<Provider[]> {
  return this.httpClient.get<Provider[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
}

getProviderById(id: number): Observable<Provider> {
  return this.httpClient.get<Provider>(this.url + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

cadProvider(provider: Provider): Observable<Provider> {
  return this.httpClient.post<Provider>(this.url, JSON.stringify(provider), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

updateProvider(provider: Provider): Observable<Provider> {
  return this.httpClient.put<Provider>(this.url + '/' + provider.id, JSON.stringify(provider), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}

deleteProvider(provider: Provider) {
  return this.httpClient.delete<Provider>(this.url + '/' + provider.id, this.httpOptions)
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
