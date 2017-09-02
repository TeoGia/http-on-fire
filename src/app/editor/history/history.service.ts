import { Injectable } from '@angular/core';
import { Request } from '../../common/interfaces/request.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HistoryService {

  private history: Request[];
  private _historyLog: BehaviorSubject<Request[]>;
  public readonly  historyLog: Observable<Request[]>;

  constructor() {
    // TODO read values from localstorage or another DB at startup.
    this.history = [];
    this._historyLog = new BehaviorSubject(this.history);
    this.historyLog = this._historyLog.asObservable();
  }

  /**
   * Push a new request entry into the history array.
   * @param { Request } entry
   */
  public setHistoryEntry(entry: Request): void {
    this.history.push(entry);
    this._historyLog.next(this.history);
  }

}
