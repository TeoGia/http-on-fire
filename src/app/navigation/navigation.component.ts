import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Editor', icon: 'fa-paper-plane', routerLink: 'editor' },
      { label: 'Stats', icon: 'fa-bar-chart', routerLink: 'stats' },
      { label: 'Documentation', icon: 'fa-book', routerLink: 'docu' },
      { label: 'Support', icon: 'fa-support', routerLink: 'support' },
      { label: 'Social', icon: 'fa-twitter', routerLink: 'social' }
    ];
  }

}
