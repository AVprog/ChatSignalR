import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Observable,Subscription } from "rxjs";
import { MessageModel } from "./Model/MessageModel"

@Injectable({
  providedIn: 'root'
})
export class SignalrServiceService {
  
  public connection:signalR.HubConnection;  
  constructor() {
    this.connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    this.connection.start();
   }

  initSignalR()
  {
    
    
  }
   
  sendMessage(user:string,message:string)
  {
    this.connection.invoke("SendMessage", user, message);
  } 

  onReceiveMessage():Observable<MessageModel>
  {
    return Observable.create(observer => {      
      this.connection.on("ReceiveMessage",  (user, message) => {      
          //let strMsg=`${user} ${message}`;
          let messageModel:MessageModel=new MessageModel(user,message);          
          observer.next(messageModel);
        }); 
    });
  }

  onNotify():Observable<string>
  {
    return Observable.create(observer=>
    {
      this.connection.on("Notify",  (str) => {              
        observer.next(str);
      }); 
    });
  }


}
