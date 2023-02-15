import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LoginComponent } from './Shounen/login/login.component';
import { RegisterComponent } from './Shounen/register/register.component';
import { HomeComponent } from './Shounen/home/home.component';
import { FavouritesComponent } from './Shounen/favourites/favourites.component';
import { TodoListComponent } from './Shounen/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BlogsComponent } from './Common/blogs/blogs.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FavouritesComponent,
    TodoListComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TypeaheadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
