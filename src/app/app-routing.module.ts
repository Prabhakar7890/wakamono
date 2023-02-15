import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './Common/blogs/blogs.component';
import { FavouritesComponent } from './Shounen/favourites/favourites.component';
import { HomeComponent } from './Shounen/home/home.component';
import { LoginComponent } from './Shounen/login/login.component';
import { RegisterComponent } from './Shounen/register/register.component';
import { TodoListComponent } from './Shounen/todo-list/todo-list.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'todo-list', component:TodoListComponent},
  {path:'favourites', component:FavouritesComponent},
  {path:'blogs', component:BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
