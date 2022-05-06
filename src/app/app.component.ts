import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Angular Router App</h1>
  <!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->
  <nav>
    <ul>
      <li><a routerLink="/users" routerLinkActive="active">Users</a></li>
      <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
    </ul>
  </nav>
  <!-- The routed views render in the <router-outlet>-->
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  value = 'World';
}
