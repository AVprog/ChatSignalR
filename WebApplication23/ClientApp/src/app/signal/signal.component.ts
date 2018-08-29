import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {

  constructor() {
    this.connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
   }

  public connection:signalR.HubConnection;
  public masMsg:string[]=[];

  ngOnInit() {
    

    this.connection.start();

    this.connection.on("ReceiveMessage",  (user, message) => {      
        this.masMsg.push(`${user} ${message}`);
        
    });


  }

  sendMessage(user:string,message:string)
  {
    this.connection.invoke("SendMessage", user, message);
  }


  

}
