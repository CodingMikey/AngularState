import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>
  constructor() { }

  ngOnInit() {
  }

  increment() {
    // TODO: Dispatch an increment action
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
  }
 
  reset() {
    // TODO: Dispatch a reset action
  }
}
