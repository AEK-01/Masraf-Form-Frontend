import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Fis } from '../models/fis';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FisService {

  apiUrl = "https://localhost:44340/api/";

  constructor(private httpClient:HttpClient) { }

  getFisler():Observable<ListResponseModel<Fis>>{
    let newPath = this.apiUrl + "fis/getall"
    return this.httpClient.get<ListResponseModel<Fis>>(newPath);

  }

  add(fis:Fis):Observable<ResponseModel>{
    return this.httpClient.post<SingleResponseModel<Fis>>(this.apiUrl+"fis/add",fis)
  }
  delete(fis:Fis):Observable<ResponseModel>{
    return this.httpClient.post<SingleResponseModel<Fis>>(this.apiUrl+"fis/delete",fis)
  }


}
