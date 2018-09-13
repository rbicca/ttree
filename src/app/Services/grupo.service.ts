import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class GrupoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllGroups() {
    const url = `${environment.pathAPI}/grupos`;
    return this.httpClient.get(url);
  }

}