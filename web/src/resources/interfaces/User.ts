import { SystemGeneratedString } from '../utility';

export interface User {
  id?: SystemGeneratedString;
  name: string;
  email: string;
  organization?: string;
}
