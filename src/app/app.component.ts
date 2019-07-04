import { Component } from '@angular/core';

interface iRouteInfo {
  sPath: string;
  sTitle: string;
  sIcon: string;
  sClass: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: iRouteInfo[] = [
    {
      sTitle: 'e-Folder Home',
      sPath: 'home',
      sIcon: 'icon-companies',
      sClass: 'home'
    },
    {
      sTitle: 'Dashboard',
      sPath: 'dashboard',
      sIcon: 'icon-companies',
      sClass: 'dashboard'
    },
    {
      sTitle: 'Dashboard2',
      sPath: 'dashboard2',
      sIcon: 'icon-companies',
      sClass: 'dashboard2'
    },
    {
      sTitle: 'User Profile',
      sPath: 'user-profile',
      sIcon: 'icon-companies',
      sClass: 'user-profile'
    }
  ];

  opened = true;
}
