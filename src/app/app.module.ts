import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { KanbanComponent } from './components/kanvan/kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms'
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KanbanComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
