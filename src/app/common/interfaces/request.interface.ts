import { Option } from './option.interface';

export interface Request {
  method: string;
  headers: Option[];
  body: Option[];
  url: string;
  parameters: Option[];
  response: any;
  responseType: string;
};
