import { Event, NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public currentUrl = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects)
      }
    });
   }
}

