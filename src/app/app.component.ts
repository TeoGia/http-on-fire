import { Component } from '@angular/core';
import { slideRightAnimation } from './common/animations';
import { transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('* => *', [
        useAnimation(slideRightAnimation)
      ])
    ])
  ]

})
export class AppComponent {

  public prepareRouteTransition (outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
