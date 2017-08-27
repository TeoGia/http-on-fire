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
      { label: 'Stats', icon: 'fa-bar-chart', routerLink: 'notfound' },
      { label: 'Documentation', icon: 'fa-book', routerLink: 'notfound' },
      { label: 'Support', icon: 'fa-support', routerLink: 'notfound' },
      { label: 'Social', icon: 'fa-twitter', routerLink: 'notfound' }
    ];
  }

}
