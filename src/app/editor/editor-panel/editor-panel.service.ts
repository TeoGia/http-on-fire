import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Request } from '../../common/interfaces/request.interface';
import { Option } from '../../common/interfaces/option.interface';
import 'rxjs/Rx';

@Injectable()
export class EditorPanelService {

  private req: Request;

  constructor(
    private http: Http
  ) { }

  /**
   * Fire user built request.
   * @param { Request } req
   */
  public fireRequest(req: Request) {
    this.req = req;
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

}
