import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMessage} from "../models/IMessage";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl: string="http://localhost:8080/api/messages"

  constructor(private _http:HttpClient,) { }


  getAllMessages():Observable<IPost>{
    return this._http.get<IPost>(this.baseUrl);
  }

  getMessageById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<IPost>(url)
  }

  addMessage(data:IMessage){
    return this._http.post(this.baseUrl,data);
  }

  getMessagesByDestinationId(idDestination: number): Observable<IMessage[]> {
    const params = new HttpParams().set('idDestination', idDestination.toString());

    return this._http.get<IMessage[]>(this.baseUrl, { params });
  }

}
