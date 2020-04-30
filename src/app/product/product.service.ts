import { Product } from './product';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    private productUrl = 'api/products/products.json';

    constructor(private httpClient: HttpClient){}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getProduct(id: number): Observable<Product> {
      return this.getProducts().pipe(
        map( list => list.find( product => product.productId === id))
      )
    }

    private handleError(err: HttpErrorResponse){
        let errorMsg = err.error.message
        console.log(errorMsg)
        return throwError(errorMsg)
    }
}