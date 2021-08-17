import { Component, Input, OnInit } from '@angular/core';

import { Importer } from '../../models/importer';

@Component({
  selector: 'app-importer-detail',
  templateUrl: './importer-detail.component.html',
  styleUrls: ['./importer-detail.component.scss']
})
export class ImporterDetailComponent implements OnInit {
  @Input() importer?: Importer

  constructor() { }

  ngOnInit(): void {
  }

}
