import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrl: './app-product.component.scss'
})
export class AppProductComponent {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private appService: ServicesService) {
    this.productForm = this.fb.group({
      Id: ["", Validators.required],
      Title: ["", Validators.required],
      Price: [],
      inStock: []
    })
  }
  adddProduct() {
    if (this.productForm.valid) {
      this.appService.AddProduct(this.productForm.value);
    }
  }
}
