import { Injectable } from '@angular/core';

@Injectable()
export class SelectedResultService {

  activeResult: string;
  resultType: string;
  isResultSelected: boolean  = false;

  constructor() { }

}
