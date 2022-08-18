import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Makbuz } from '../models/makbuz';

@Injectable({
  providedIn: 'root'
})
export class MakbuzService {

  apiUrl = "https://localhost:44340/api/";

  constructor(private httpClient:HttpClient) { }

  getMakbuzlar():Observable<ListResponseModel<Makbuz>>{
    let newPath = this.apiUrl + "makbuz/getall"
    return this.httpClient.get<ListResponseModel<Makbuz>>(newPath);

  }

  add(makbuz:Makbuz):Observable<ResponseModel>{
    return this.httpClient.post<SingleResponseModel<Makbuz>>(this.apiUrl+"makbuz/add",makbuz)
  }
  delete(makbuz:Makbuz):Observable<ResponseModel>{
    return this.httpClient.post<SingleResponseModel<Makbuz>>(this.apiUrl+"makbuz/delete",makbuz)
  }
}
