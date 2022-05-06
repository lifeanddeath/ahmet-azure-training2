import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{path: 'users',component: UsersComponent},{path:'products', component: ProductsComponent}]


@NgModule({
  declarations: [AppComponent, UsersComponent, ProductsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {}
