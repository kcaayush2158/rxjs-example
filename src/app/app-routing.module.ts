import { Unary } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EighteenBufferWhenOperatorComponent } from './eighteen-buffer-when-operator/eighteen-buffer-when-operator.component';
import { OnePromiseToObservableComponent } from './one-promise-to-observable/one-promise-to-observable.component';
import { SeventeenBufferToggleOpratorComponent } from './seventeen-buffer-toggle-oprator/seventeen-buffer-toggle-oprator.component';
import { SixteenBufferTimerOperatorComponent } from './sixteen-buffer-timer-operator/sixteen-buffer-timer-operator.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeComponent } from './take/take.component';
import { TwoNewObservableComponent } from './two-new-observable/two-new-observable.component';
import { UnsubscribingObservableComponent } from './unsubscribing-observable/unsubscribing-observable.component';

const routes: Routes = [
  {path:'one',component:OnePromiseToObservableComponent},
  {path:'two',component:TwoNewObservableComponent},
  {path:'sixteen',component:SixteenBufferTimerOperatorComponent},
  {path:'seventeen',component:SeventeenBufferToggleOpratorComponent},
  {path:'eighteen',component:EighteenBufferWhenOperatorComponent},
  {path:'eight',component:UnsubscribingObservableComponent},
  {path:'take-operator',component:TakeComponent},
  {path:'take-last',component:TakeLastComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
