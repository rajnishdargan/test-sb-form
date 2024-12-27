import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonFormElementsModule } from '@project-sunbird/common-form-elements-full';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonFormElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
