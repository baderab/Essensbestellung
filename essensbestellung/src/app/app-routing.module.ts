import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './componants/add-restaurant/add-restaurant.component';


const routes: Routes = [
  { path: 'AddRestaurantComponent', component: AddRestaurantComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
