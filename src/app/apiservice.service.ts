import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend

  apiUrl='http://localhost:3000/profiles';
  apiUrl1='http://localhost:3000/pausedProfiles';

  //get all data  in read.component.html

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  //get paused profiles data
  getPausedProfilesData():Observable<any>{
    return this._http.get(`${this.apiUrl1}`)
  }

  // create data  in create.component.html
  createData(data:any):Observable<any>{

    console.log(data,"created api ==>");


    return this._http.post(`${this.apiUrl}`,data);
  }

  //deleting data using perticular id
  deleteData(id:any):Observable<any>
  {
      let ids=id;
      return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //updating data using id
  updateData(data:any,id:any):Observable<any>
  {
    let ids=id
    return this._http.put(`${this.apiUrl}/${ids}`,data)
  }
  //getting single data to update data
  getSingleData(id:any):Observable<any>
  {
      let ids=id;
      return this._http.get(`${this.apiUrl}/${ids}`)
  }

}
