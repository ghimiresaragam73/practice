import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable() //decorator to define class of service

export class AuthService {
    constructor(){

    }

    upper(str: string){
        return str.toUpperCase();
    }

    login(data:any){
      /*   return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject('nothing');
            },1000)
        }) */

        return Observable.create((observer)=>{
            setTimeout(()=>{
                observer.next('done')
            },1000);
        })
        //call for API with login data
    }
    register(data:any){
        //call for API with register data
    }
    forgotPassword(email:string){
        //call with email in API
    }
    resetPassword(data:any){
        //call with reset API
    }
    //service is a file where we use repeeatedly used specific task performing logic
    //service in angular is used to call Backend API
}