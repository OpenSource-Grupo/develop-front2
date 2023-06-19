import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMessage} from "../models/IMessage";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http:HttpClient,) { }


  getAllMessages():Observable<Post>{
    return this._http.get<Post>('http://localhost:3000/messages');
  }

  getMessageById(id:number){
    return this._http.get<Post>(`http://localhost:3000/messages/${id}`)
  }

  addMessage(data:IMessage){
    return this._http.post('http://localhost:3000/messages',data);
  }

  getMessagesByDestinationId(idDestination: number): Observable<IMessage[]> {
    const params = new HttpParams().set('idDestination', idDestination.toString());
    return this._http.get<IMessage[]>('http://localhost:3000/messages', { params });
  }

}
