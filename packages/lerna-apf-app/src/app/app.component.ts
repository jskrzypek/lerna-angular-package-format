import { Component } from '@angular/core';

import { x } from '@libs/libA/entry1';
import { y } from '@libs/libA/entry2';
// import { f } from '@libs/libA/entry2';
import { a } from '@libs/libA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a = a;
  x = x;
  y = y;
  // get titleStart() {
  //   return f(this.title);
  // }
}
