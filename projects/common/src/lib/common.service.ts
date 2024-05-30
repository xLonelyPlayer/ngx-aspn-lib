import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxAspnCommonService {

  constructor() { }

  public isNumber(n: unknown): boolean {
    if (typeof n === 'object' || !n || isNaN(Number(n))) {
      return false;
    }
    return true;
  }

}
