import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title = '';
  description = '';
  price = 0;
  rating = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  addProduct() {
    // console.log(`title: ${this.title}`);
    this.productService
      .post(this.title, this.description, this.price, this.rating)
      .subscribe(response => {
        const body = response.json();
        console.log(body);
        if (body['status'] == 'success') {
          alert('successfully added product');
        } else {
          alert('error while adding product');
        }
      });
  }

}
