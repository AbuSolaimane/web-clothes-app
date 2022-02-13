import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err)
    });
  }

  getAvailableProducts() {
    this.productService.getAvailableProducts().subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err)
    });
  }

  getSelectedProducts() {
    this.productService.getSelectedProducts().subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err)
    });
  }

  onSearch(value: any) {
    this.productService.searchProducts(value.keyword).subscribe(data =>{
      this.products = data
    }, err => {
      console.error(err);
    });
  }

  onSelect(product: Product) {

    this.productService.select(product).subscribe(data =>{
      product.selected = data.selected;
    });

  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.getAllProducts();
    })
  }

}
