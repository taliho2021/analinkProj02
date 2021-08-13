import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-angmat-form',
  templateUrl: './angmat-form.component.html',
  styleUrls: ['./angmat-form.component.scss']
})

export class AngmatFormComponent implements OnInit {

  importerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.importerForm = this.fb.group({
      importers: this.fb.array([])
    })
  }

  importers(): FormArray{
    return this.importerForm.get('importers') as FormArray
  }


  newImporter(): FormGroup {
    return this.fb.group({
      clientId: [''],
        name:  ['', Validators.required],
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: [null, Validators.compose([
          Validators.required, Validators.minLength(5), Validators.maxLength(5)])
        ],
        country: ['', Validators.required],
        phone1:  [null, Validators.required],
        email:  ['', Validators.required],
        website: ['', Validators.required],

        htsGroup: this.fb.group({
          htsNo: [],
          description:[''],
          spi:[''],
        }),

        pgas: this.fb.array([])
    })
  }

  addImporter() {
    this.importers().push(this.newImporter())
  }

  removeImporter(impIndex: number){
    this.importers().removeAt(impIndex)
  }

  importerPga(impIndex:number): FormArray {
    return this.importers().at(impIndex).get('pgas') as FormArray
  }

  newPga(): FormGroup{
    return this.fb.group({
      pgaName:[''],
      pgaCode:[''],
      pgaMfr:[''],
      pgaImp:['']
    })
  }

  addImporterPga(impIndex: number){
    this.importerPga(impIndex).push(this.newPga())
  }

  removeImporterPga(impIndex:number, pgaIndex:number) {
    this.importerPga(impIndex).removeAt(pgaIndex)
  }

  onSubmit() {
    console.log(this.importerForm.value);
   }

}
