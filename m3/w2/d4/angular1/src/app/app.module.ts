import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NewComponent } from './pages/posts/new/new.component';
import { EditComponent } from './pages/posts/edit/edit.component';
import { ListComponent } from './pages/posts/list/list.component';
import { HeaderComponent } from './section/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    NewComponent,
    EditComponent,
    ListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
