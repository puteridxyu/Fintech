import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';  // Import Event from '@angular/router'

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'ArabiaPay';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt: Event) => {  // Explicitly define the type as Event
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // Your existing code handling NavigationEnd event
    });
  }
}
