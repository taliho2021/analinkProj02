import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

fromEvent(document, 'click')
   .pipe(
     throttleTime(1000),
     scan(count => count + 1, 0)
     )
   .subscribe(count => console.log(`Clicked! ${count} times'));
 
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
});

export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
