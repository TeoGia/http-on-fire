import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Request } from '../../common/interfaces/request.interface';
import { Option } from '../../common/interfaces/option.interface';
import { HistoryService } from '../history/history.service';
import 'rxjs/Rx';

@Injectable()
export class EditorPanelService {

  private req: Request;

  constructor(
    private http: Http,
    private historyService: HistoryService
  ) { }

  /**
   * Fire user built request.
   * @param { Request } req
   */
  public fireRequest(req: Request) {
    this.req = Object.assign({}, req);
    this.buildRequest();
  }

  /**
   * Build the request according to its type before it's fired.
   */
  private buildRequest() {
    const options = new RequestOptions();
    let url = this.req.url;
    let body = {};

    options.headers = this.generateHeaders();
    if (this.req.parameters.length > 0) {
      url = url.concat(this.generateUrlParams());
    }
    if (this.req.body.length > 0) {
      body = this.generateBody();
    }
    this.sendRequest(url, options, body).map(
      (res: any) => {
        if (res.headers) {
          this.req.responseType = res.headers._headers.get('content-type')[0];
        }
        if (this.req.responseType.indexOf('json') >= 0) {
          return res.json();
        } else {
          return res.text();
        }
      }
    ).subscribe(
      (data: any) => {
        if (typeof data === 'object') {
          this.req.response = Object.assign({}, data);
        } else {
          this.req.response = data;
        }
        this.historyService.setHistoryEntry(this.req);
      }, (error: any) => {
        this.historyService.setHistoryEntry(this.req);
      });
  }

  /**
   * Generate headers.
   * @return { Headers } headers
   */
  private generateHeaders() {
    const headers = new Headers();
    this.req.headers.forEach((entry: Option) => {
      if (entry.use) {
        headers.append(entry.key, entry.value);
      }
    });
    return headers;
  }

  /**
   * Gnerate the query string.
   */
  private generateUrlParams() {
    let queryString = '?';
    this.req.parameters.forEach((entry: Option) => {
      if (entry.use) {
        if (queryString !== '?') {
          queryString += '&';
        }
        queryString += entry.key + '=' + entry.value;
      }
    });
    if (queryString !== '?') {
      return queryString;
    }
    return '';
  }

  /**
   * Generate request's body.
   */
  private generateBody() {
    const body = {};
    this.req.body.forEach((entry: Option) => {
      if (entry.use) {
        body[entry.key] = entry.value;
      }
    });
    return body;
  }

  /**
   * Send request according to its type.
   * @param { string } url
   * @param { RequestOptions } options
   * @param { any } body
   */
  private sendRequest(url: string, options: RequestOptions, body: any) {
    switch (this.req.method) {
      case 'GET':
        return this.http.get(url, options);
      case 'POST':
        return this.http.post(url, body, options);
      case 'PUT':
        return this.http.put(url, body, options);
      case 'PATCH':
        break;
      case 'DELETE':
        return this.http.delete(url, options);
      case 'COPY':
        break;
      case 'HEAD':
        break;
      case 'OPTIONS':
        break;
      case 'LINK':
        break;
      case 'UNLINK':
        break;
      case 'PURGE':
        break;
      case 'LOCK':
        break;
      case 'UNLOCK':
        break;
      case 'PROPFIND':
        break;
      case 'VIEW':
        break;
      default:
      // TODO create an error growl.
    }
  }
}
