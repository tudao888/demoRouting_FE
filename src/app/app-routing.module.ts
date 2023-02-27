import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./product/show/show.component";
import {EditComponent} from "./product/edit/edit.component";
import {CreateComponent} from "./product/create/create.component";

const routes: Routes = [
  {path: 'home', component: ShowComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
