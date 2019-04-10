import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Makeup} from '../app/APItest/makeup.model';


@Injectable()
export class MakeupService {

  constructor(private http: HttpClient) {
  }

  findMakeup(): Observable<Makeup[]> {
    console.log('This is inside Makeup API');
    return this.http.get<Makeup[]>('http://makeup-api.herokuapp.com/api/v1/products.json');
  }

  findMakeupById(id: number): Observable<Makeup> {
    console.log('This is inside MakeupAPI');
    return this.http.get<Makeup>('http://makeup-api.herokuapp.com/api/v1/products/'+ id +'.json');
  }




}
