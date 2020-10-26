import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
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
    search(condition: Product) {
        return this.http.post(`${this.url}/search`, condition, this.getOptions())
    }
}