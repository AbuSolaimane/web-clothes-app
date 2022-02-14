import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId : number;
  productFormGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    selected: new FormControl(),
    available: new FormControl()
  });

  submited: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
      private productService: ProductService,
      private formBuilder: FormBuilder,
      private router: Router) {
        this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getProductById();
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

  OnEditProduct() {
    this.submited = true;
    if(this.productFormGroup.invalid) return;
    this.productService.updateProduct(this.productId, this.productFormGroup.value)
     .subscribe(product => {
      this.router.navigate(['/products']);
     });
  }

}
