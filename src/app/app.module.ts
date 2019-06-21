import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import {DemoMaterialModule} from './material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OneformradiobuttonComponent } from './oneformradiobutton/oneformradiobutton.component';
import { SelectionboxComponent } from './selectionbox/selectionbox.component'

@NgModule({
  declarations: [
    AppComponent,
    RadiobuttonComponent,
    OneformradiobuttonComponent,
    SelectionboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  

  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
