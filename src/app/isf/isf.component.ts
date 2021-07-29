import { Component, OnInit } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

import { map } from 'rxjs/operators';

const myObservable = of (1,2,3,4,5,6,7,8,9,10);
const myObserver = {
  next: (x: number) => console.log('Observer got a next value: '  + x ),
  error: (err: Error) => console.error('Observer got an error:  ' + err),
  complete: () => console.log('Observer got a complete notification')
 
}

myObservable.subscribe(myObserver)


// Create an observable from a promise
const data = from(fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population'));

     // Subscribe to begin listening for async result
data.subscribe({
  next(response) { console.log(response);},
  error(err) {console.error('Error: ' + err); },
  complete() { console.log('Completed');
  }
})

// Create an observable form a counter using interval
const secondCounter = interval(1000);
   // Subscribe to begin publishing values
const subscription01 = secondCounter.subscribe(n =>{
  console.log(`It's been ${n +1 } seconds since subscribing!`);
  if (n > 10) {
       subscription01.unsubscribe();
  }
}) 
   


@Component({
  selector: 'app-isf',
  templateUrl: './isf.component.html',
  styleUrls: ['./isf.component.scss']
})

export class IsfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
