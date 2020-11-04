import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
    url: string;
    constructor(
        public http: HttpClient
    ) {
        this.url = environment.baseUrl + '/product';
    }

    getOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            })
        }
    }

    add(data: Product) {
        return this.http.post(this.url, data, this.getOptions())
    }
    edit(id: string, data: Product) {
        return this.http.put(`${this.url}/${id}`, data, this.getOptions())
    }
    get() {
        return this.http.get(this.url, this.getOptions())
    }

    getById(id: string) {
        /*  return this.http.post(this.url+'/'+id, id, this.getOptions()) */
        return this.http.get(`${this.url}/${id}`, this.getOptions())
    }

    remove(id: string) {
        return this.http.delete(`${this.url}/${id}`, this.getOptions())
    }

    upload(data: Product, files: Array<any>, httpVerb) {
        console.log('data in service>>', data);
        console.log('files in service>>>', files);
        return Observable.create((observer) => {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            if (files.length) {
                formData.append('img', files[0], files[0].name);
            }

            /* var keys = Object.keys(data);
            keys.forEach((item, index) => {
                console.log('keys only>>', item);
                console.log('Value iss.....',data[item]);
            }) */

            for (let key in data) {
                formData.append(key, data[key]);
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response);
                    } else {
                        observer.error(xhr.response);
                    }
                }
            }
            let url = `${this.url}?token=${localStorage.getItem('token')}`;
            if (httpVerb == "PUT") {
                url = `${this.url}/${data._id}?token=${localStorage.getItem('token')}`
            }

            xhr.open(httpVerb,url, true);
            xhr.send(formData);
        })

    }

    search(condition: Product) {
        return this.http.post(`${this.url}/search`, condition, this.getOptions())
    }
}