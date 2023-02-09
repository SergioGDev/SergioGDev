import { Component } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../environments/environment';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router) {
    this.router.events.pipe( filter(event => event instanceof NavigationEnd) )
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.firebase.measurementId , {
          'page_path': event.urlAfterRedirects
       });
      }
    });
  }

  title = 'sergiogdev';

  app = initializeApp(environment.firebase);
  analytics = getAnalytics(this.app);
}
