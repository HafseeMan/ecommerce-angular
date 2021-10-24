import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product-model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from './item-model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  //Define API
  apiURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

 /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
/******** ACTIONS WITH PRODUCT LIST  *******************************************************************************************/
  // HttpClient API Fetch Products
  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/products')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API Fetch Product
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/products/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

/******** ACTIONS WITH CART LIST  *******************************************************************************************/
// HttpClient API Fetch Cart Items
  loadCartItems(): Observable<Item> {
    return this.http.get<Item>(this.apiURL + '/cart')
    .pipe(
      retry(1),
      catchError(this.handleError)
    ) 
  }

    // HttpClient API Fetch 1 Cart Item
    getCartItem(id: number): Observable<Item> {
      return this.http.get<Item>(this.apiURL + '/cart/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }  

  // HttpClient API Add Cart Item
  addCartItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiURL + '/cart', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )      
  }

    // HttpClient API Delete Cart Item
    deleteCartItem(id: number){
      return this.http.delete<Item>(this.apiURL + '/cart/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    //HttpClient API Product Update 
    updateCartStatus(id: number , product: Product): Observable<Product>{
      return this.http.put<Product>(this.apiURL + '/products/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }


    //HttpClient API Cart Item Update 
    updateItemQnty(id: number , item: Item): Observable<Item>{
      return this.http.put<Item>(this.apiURL + '/cart/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
















  // Error handling 
  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



}
