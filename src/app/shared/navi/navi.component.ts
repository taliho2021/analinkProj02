import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { NavItem } from 'src/app/models/nav-item';
import { menu } from '../../models/menu'

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
  
  private opened: boolean = true;
  private mediaWatcher: Subscription;
  public menu: NavItem[] = menu;
  menuItems = ['dashboard', 'isf', 'ams', 'cb', 'clients','vendors', 'tables', 'reports', 'accounting', 'apps'];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )
  constructor(private breakpointObserver: BreakpointObserver, private media: MediaObserver) { 
       this.mediaWatcher = this.media.media$.subscribe((MediaChange: MediaChange) =>{
         this.handleMediaChange(MediaChange);
       }
       )
  }

  ngOnInit(): void {
  }

  private handleMediaChange(mediaChange: MediaChange){
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
  }

}
