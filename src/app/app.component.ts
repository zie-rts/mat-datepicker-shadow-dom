import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: [
    "./../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
    "./../styles.css"
  ]
})
export class AppComponent {
  
}
