import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fda',
  templateUrl: './fda.component.html',
  styleUrls: ['./fda.component.scss']
})
export class FdaComponent implements OnInit {

  fdaForm = this.fb.group({
      coName:['', Validators.required],
      filer: [''],
      address: this.fb.group({
        street: [''],
        city:[''],
        state: [''],
        zip: ['']
      }),
      product: this.fb.array([
        {prodCode: [''],
         mfrCode: [''],
         affCode: ['']}
      ])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get product() {
    return this.fdaForm.get('product') as FormArray;
  }

  addProduct() {
    this.product.push(this.fb.control(''));
  }

  removeProduct(index:number) {
    this.product.removeAt(index);
  }

  onSubmit() {
    console.log(this.fdaForm.value);

  }

}
