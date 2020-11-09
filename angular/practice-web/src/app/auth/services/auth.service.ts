import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable() //decorator to define class of service

export class AuthService {
    url: string;
    constructor(
        public http: HttpClient
    ) {
        this.url = environment.baseUrl + '/auth';
    }
    /* Service is a file where we use repeatedly used task performing logic */
    /* Service in angular is used to call Backend API */

    getOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }

    login(data: any) {
        return this.http.post(this.url + '/login', data, this.getOptions())
        /* call for API with login data */
    }

    register(data: any) {
        return this.http.post(this.url + '/register', data, this.getOptions())
    }

    forgotPassword(email: string) {
        return this.http.post(this.url + '/forgot-password', { email: email }, this.getOptions());
    }

    resetPassword(data:any){
        return this.http.post(this.url + '/reset-password/'+data.username, data, this.getOptions());
    }
}