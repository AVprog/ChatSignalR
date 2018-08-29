import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignalrServiceService {
  
  public connection:signalR.HubConnection;  
  constructor() {
    this.connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

   }

  initSignalR()
  {
    this.connection.start();
  }
   
  sendMessage(user:string,message:string)
  {
    this.connection.invoke("SendMessage", user, message);
  } 

  onReceiveMessage():Observable<string>
  {
    return Observable.create(observer => {      
      this.connection.on("ReceiveMessage",  (user, message) => {      
          let strMsg=`${user} ${message}`;
          observer.next(strMsg);
        });    
    });
  }


}
