import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Importer } from '../../models/importer';
import { ImportersService } from '../../services/importers.service';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.scss']
})
export class ImporterComponent implements OnInit {
  importer!: Importer;
  importers: Importer[] = []

  importerForm = this.fb.group({
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
    website: ['', Validators.required]
  });

  submitted = false

  constructor(private imp: ImportersService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.showImporters()
  }

  showImporters() {
    this.imp.getAll()
      .subscribe(data => (this.importers = data))
    console.log('this.importers');

  }

  addImporter(importer:Importer) {
     this.imp.create(this.importerForm.value)
       .subscribe(importers => {
         this.importers.push(importer)
         this.submitted=true})
  }

    newImporter(): void {
      this.submitted = true;
      this.importer ={
        clientId:'',
        name:'',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country:'',
        phone1:0,
        phone2: 0,
        email1: '',
        website:''

      }
    }
}
