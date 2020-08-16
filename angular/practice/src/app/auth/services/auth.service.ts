import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() //decorator to define class of service

export class AuthService {
    url: string
    constructor(public http: HttpClient) {
        this.url = 'http://localhost:4000/auth/';
    }

    getOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    login(data: any) {
        /*   return new Promise((resolve,reject)=>{
              setTimeout(()=>{
                  reject('nothing');
              },1000)
          }) */

        /*  return Observable.create((observer) => {
             setTimeout(() => {
                 observer.next('done')
             }, 1000);
         }) */

        /*        return Observable.create((observer) => {
                   this.http.post(this.url + 'login', data, {
                       headers: new HttpHeaders({
                           'Content-Type': 'application/json'
                       })
                   })
                       .subscribe(
                           data => {
                               observer.next(data);
                           },
                           error => {
                               observer.error(error);
                           }
                       )
               }) */
        return this.http.post(this.url + 'login', data, this.getOptions())
        //call for API with login data

    }
    register(data: any) {
        return this.http.post(this.url + 'register', data, this.getOptions())
        //call for API with register data
    }

    forgotPassword(email: string) {
        //call with email in API
    }
    resetPassword(data: any) {
        //call with reset API
    }
    //service is a file where we use repeeatedly used specific task performing logic
    //service in angular is used to call Backend API
}