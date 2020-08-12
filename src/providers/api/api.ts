import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiProvider {

  endpoint: string = 'https://cursosmg.herokuapp.com'

  constructor(public http: HttpClient) {
    
  }

  createHeaders(){
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; version=1.0'
    })
  }

  get(url: string, opts?: any){
    return this.http.get(this.endpoint+url, opts) 
  }

  post(url: string, params: any = null, opts?: any){
    return this.http.post(this.endpoint+url, params, opts) 
  }

}
