import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  proceedregister: any;
  // RegisterUser(value: Partial<{ id: string | null; name: string | null; password: string | null; email: string | null; gender: string | null; role: string | null; isactive: boolean | null; }>) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }
  apiurl = 'http://localhost:3000/user';

  GetAll(){
    return this.http.get(this.apiurl);
  }

  Getbycode(code:any){
    return this.http.get(this.apiurl + '/' + code);
  }

  GeAllRole(){
    return this.http.get('http://localhost:3000/role');
  }

  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl, inputdata);
  }

  Updateuser(code:any, inputdata:any){
    return this.http.put(this.apiurl + '/' + code, inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('username') != null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole') != null? sessionStorage.getItem('userrole')?.toString():'';
  }
}
