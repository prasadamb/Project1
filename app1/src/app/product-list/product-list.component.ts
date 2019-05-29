import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productService
      .get()
      .subscribe(response => {
        const body = response.json();
        this.products = body.data;
      });
  }

  ngOnInit() {
  }

  deleteProduct(product) {
    // alert('deleting...: ' + product.title);
    this.productService
      .delete(product.id)
      .subscribe(response => {
        const body = response.json();
        console.log(body);

        // refresh the list
        this.loadProducts();
      });
  }

}
