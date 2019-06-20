import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponents } from './Components/Buttons/app.button';
import { ToolTipsComponents } from './Components/Tooltips/app.tooltips';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponents,
    ToolTipsComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
