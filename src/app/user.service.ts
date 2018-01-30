import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable()
export class UserService {

  // URL to OSE Node Proxy
  // private proxyUrl = 'http://node-proxy-josh-test.apps.employers.rht-labs.com/client';

  // URL to LOCAL HOST Node Proxy
  // private proxyUrl = 'http://0.0.0.0:8080/client';

  // Options for CORS calls (Hitting Node Proxy)
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin':'*'
  //   })
  // };

  // Options for non CORS calls (Hitting OSE Router Proxy)
  private httpOptions = {};

  // URL to OSE Router Proxy
  private proxyUrl = 'api/client';


  constructor(private http: HttpClient) { }

  getUser(): Promise<User> {
    return this.http.get(this.proxyUrl+'/user', this.httpOptions)
      .toPromise()
      .then((res : any) => {
        return {
          message: res.message
        };
      });
  }

  setUser(newUserMessage : string): Promise<any> {
    let newUser = {
      message: newUserMessage
    };
    return this.http.post(this.proxyUrl+'/user', newUser, this.httpOptions)
      .toPromise();
  }

}
