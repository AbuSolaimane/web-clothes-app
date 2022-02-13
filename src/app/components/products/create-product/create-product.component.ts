import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productFormGroup : FormGroup = new FormGroup({});

  submited : boolean = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      name : ["", Validators.required],
      price : [0, Validators.required],
      quantity : [0, Validators.required],
      selected : [true, Validators.required],
      available : [true, Validators.required]
    });
  }

  OnCreateProduct() {
    this.submited = true;
    if (this.productFormGroup.invalid) return;
    let product = this.productFormGroup.value;
    this.productService.createProduct(product).subscribe(data =>{
      this.router.navigate(['/'])
    })
  }

}
