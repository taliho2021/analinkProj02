import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Importer } from '../../models/importer';
import { ImportersService } from '../../services/importers.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.scss']
})
export class ImporterComponent implements OnInit {
  @Input()
  clientId!: string;

  importer!: Importer;
  importers: Importer[] = []
  showOneI=false
  selectedImporter? : Importer

  importerForm = this.fb.group({
    clientId: [''],
    name:  ['', Validators.required],
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    phone1:  [null, Validators.required],
    email:  ['', Validators.required],
    website: ['', Validators.required]
  });

  submitted = false
  private _id: any;

  constructor(private imp: ImportersService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.showImporters()
  }

  showImporters() {
    this.imp.getAll()
      .subscribe(data => (this.importers = data))

  }

  // getImporter(clientId:'') {
  //   this.imp.get(this.clientId)
  //     .subscribe(data => (this.importer = data))
  // }

  getImporter(clientId:string){
    // Logic goes here
    window.alert(clientId)
    this.imp.getImporter(clientId)
      .subscribe(data =>(this.importer = data))
    this.selectedImporter = this.importer
    window.alert(this.importer)
    this.showOneI = !this.showOneI
  }

  editImporter() {
    // Logic goes hers
    window.alert('Are you sute to delete this importer?');

  }

  addImporter(importer:Importer) {
     this.imp.create(this.importerForm.value)
       .subscribe(importers => {
         this.importers.push(importer)
         this.submitted=true
         this.newImporter()})
  }

  newImporter(): void {
      this.submitted=true
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
