import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
