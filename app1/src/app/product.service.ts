import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ProductService {

  url = 'http://localhost:3000/product';

  constructor(private http: Http) {

  }

  get() {
    return this.http.get(this.url);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  post(title: string, description: string, price: number, rating: number) {
    const body = {
      title: title,
      description: description,
      price: price,
      rating: rating
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this.url, body, requestOptions);
  }
}
