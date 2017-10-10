import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { DemoMaterialModule } from './demo-material-module';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
