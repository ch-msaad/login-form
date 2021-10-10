import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';  
import { catchError } from 'rxjs/operators';
 
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
        let errorMessage: any = '';
        if (error.error instanceof ErrorEvent) {
         // client-side error
         errorMessage = `Error: ${error.error.message}` ;
        //  if(error.message){
        //     alert(error.message);
        // }
        } 
        else {
        // server-side error
        if(error.status == 0){
            console.log("Cannot delete or update a parent row: a foreign key constraint fails");
            alert("Cannot delete or update a parent row: a foreign key constraint fails");
        }
        else if(error.status == 401){
            console.log("UnAuthorized User");
            alert("UnAuthorized User!!!");
            this.router.navigate([""]);
        }
        else if(error.message){
            alert(error.message);
        }
        errorMessage = `Error Code: ${error.status}`,  `\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
        })
    )
}}