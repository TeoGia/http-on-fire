import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Request } from '../../common/interfaces/request.interface';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss']
})
export class EditorPanelComponent implements OnInit {

  public request: Request;
  public methods: SelectItem[];

  constructor() {
    this.request = {
      method: '',
      headers: [],
      parameters: [],
      url: '',
      body: [],
      response: {}
    };

    this.methods = [];
    this.methods.push({ label: 'GET', value: 'GET' });
    this.methods.push({ label: 'POST', value: 'POST' });
    this.methods.push({ label: 'PUT', value: 'PUT' });
    this.methods.push({ label: 'PATCH', value: 'PATCH' });
    this.methods.push({ label: 'DELETE', value: 'DELETE' });
    this.methods.push({ label: 'COPY', value: 'COPY' });
    this.methods.push({ label: 'HEAD', value: 'HEAD' });
    this.methods.push({ label: 'OPTIONS', value: 'OPTIONS' });
    this.methods.push({ label: 'LINK', value: 'LINK' });
    this.methods.push({ label: 'UNLINK', value: 'UNLINK' });
    this.methods.push({ label: 'PURGE', value: 'PURGE' });
    this.methods.push({ label: 'LOCK', value: 'LOCK' });
    this.methods.push({ label: 'UNLOCK', value: 'UNLOCK' });
    this.methods.push({ label: 'PROPFIND', value: 'PROPFIND' });
    this.methods.push({ label: 'VIEW', value: 'VIEW' });
  }

  ngOnInit() {
    // TODO remove dummy data when ready
    this.request.headers.push({ use: true, key: 'hello', value: 'world' });
  }

}
