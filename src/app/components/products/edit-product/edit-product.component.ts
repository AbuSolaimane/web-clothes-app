import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId : number;
  productFormGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
      private productService: ProductService,
      private formBuilder: FormBuilder) {
        this.productId = this.activatedRoute.snapshot.params.id;
        this.productFormGroup = this.formBuilder.group({})
  }

  ngOnInit(): void {
  }

  getProductById() {
    return this.productService.getProductById(this.productId)
      .subscribe(product => {
        this.productFormGroup = this.formBuilder.group({
          name : [product.name, Validators.required],
          price : [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected : [product.selected, Validators.required],
          available : [product.available, Validators.required]
        })
      });
  }

}
