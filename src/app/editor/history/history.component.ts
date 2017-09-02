import { Component, OnInit } from '@angular/core';
import { Request } from '../../common/interfaces/request.interface';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public reqHistory: Request[];

  constructor(
    private historyService: HistoryService
  ) {
    this.reqHistory = [];
  }

  ngOnInit() {
    this.historyService.historyLog.subscribe(
      (data: Request[]) => {
        this.reqHistory = Object.assign([], data);
      }
    );
  }

}
