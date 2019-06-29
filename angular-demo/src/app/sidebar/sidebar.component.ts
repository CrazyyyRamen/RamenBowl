import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'minimatch';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string = "";

  constructor(private router: Router) { 
    router.events.subscribe((e : RouterEvent) => {
      if(e instanceof NavigationEnd){
        this.currentUrl = e.url;
      }
    });
  }

  ngOnInit() {
  }

}
