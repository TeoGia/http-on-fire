import { Component, OnInit } from '@angular/core';
import { Request } from '../../common/interfaces/request.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public reqHistory: Request[];

  constructor() { }

  ngOnInit() {
    // TODO replace with real data when available.
    this.reqHistory = [
      {
        method: 'POST',
        url: 'dummy.url.org',
        headers: {},
        body: {},
        parameters: []
      },
      {
        method: 'POST',
        url: 'dummy.url.org',
        headers: {},
        body: {},
        parameters: []
      },
      {
        method: 'POST',
        url: 'dummy.url.org',
        headers: {},
        body: {},
        parameters: []
      },
      {
        method: 'POST',
        url: 'dummy.url.org',
        headers: {},
        body: {},
        parameters: []
      },
      {
        method: 'POST',
        url: 'dummy.url.org',
        headers: {},
        body: {},
        parameters: []
      }
    ];
  }

}
