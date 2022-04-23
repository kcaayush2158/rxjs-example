import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePromiseToObservableComponent } from './one-promise-to-observable/one-promise-to-observable.component';
import { TwoNewObservableComponent } from './two-new-observable/two-new-observable.component';
import { SeventeenBufferToggleOpratorComponent } from './seventeen-buffer-toggle-oprator/seventeen-buffer-toggle-oprator.component';
import { SixteenBufferTimerOperatorComponent } from './sixteen-buffer-timer-operator/sixteen-buffer-timer-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    OnePromiseToObservableComponent,
    TwoNewObservableComponent,
    SeventeenBufferToggleOpratorComponent,
    SixteenBufferTimerOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
