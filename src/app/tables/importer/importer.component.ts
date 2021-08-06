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
    clientId: null,
    name:  [null, Validators.required],
    address1: [null, Validators.required],
    address2: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    country: [null, Validators.required],
    phone1:  [null, Validators.required],
    email:  [null, Validators.required],
    website: [null, Validators.required]
  });

  constructor(private imp: ImportersService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.showImporters()
  }

  showImporters() {
    this.imp.getImporters()
      .subscribe(data => (this.importers = data))
    console.log('this.importers');
    
  }

  addImporter(importer:Importer) {
    this.imp.addImporter(this.importer)
    .subscribe(importer => this.importers.push(importer)) 

  }
}
