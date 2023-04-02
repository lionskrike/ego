import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonContainerComponent } from './components/button-container/button-container.component';
import { ContentColumnComponent } from './content-column/content-column.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    ContentColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
