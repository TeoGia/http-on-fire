import { Injectable } from '@angular/core';
import { Request } from '../../common/interfaces/request.interface';

@Injectable()
export class HistoryService {

  private historyLog: Request[];

  constructor() { }

  /**
   * Get history data.
   */
  public getHistory(): Request[] {
    return this.historyLog;
  }

  /**
   * Push a new request entry into the history array.
   * @param { Request } entry
   */
  public setHistoryEntry(entry: Request): void {
    this.historyLog.push(entry);
  }

}
