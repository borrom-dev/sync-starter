import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { BackendComponent } from './backend/backend.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RailsComponent } from './rails/rails.component';
import { AndroidsComponent } from './androids/androids.component';
import { AngularsComponent } from './angulars/angulars.component';
import { ContentListComponent } from './content-list/content-list.component';
import {FormsModule} from "@angular/forms";
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AdminComponent,
    BackendComponent,
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RailsComponent,
    AndroidsComponent,
    AngularsComponent,
    ContentListComponent,
    MarkdownEditorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LMarkdownEditorModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
