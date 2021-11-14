import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-cb',
  templateUrl: './cb.component.html',
  styleUrls: ['./cb.component.scss']
})
export class CbComponent implements OnInit, OnDestroy {

  private firstObsSubscription!: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);

    // })

    // Create a custom observable for interval fxn
    const customIntervalObs = new Observable(observer =>{
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // fake error to simulate HTTP call
        if (count >9) {
          observer.error(new Error('Count is greater than 9!'))
        }
        count++;
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObs.subscribe(data => {
      console.log(data);

    })
  }

  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe()
  }

}

