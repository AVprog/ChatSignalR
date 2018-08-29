import { Component, OnInit } from '@angular/core';
import {SignalrServiceService} from "../signalr-service.service";


@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {
  constructor(private  signalrServiceService:SignalrServiceService) {   
   }

  public masMsg:string[]=[];
  ngOnInit() {
    this.signalrServiceService.initSignalR(); 
    this.signalrServiceService.onReceiveMessage().subscribe(msg=>
    {
      this.masMsg.push(msg);
    })
  }

  sendMessage(user:string,message:string)
  {
    this.signalrServiceService.sendMessage(user,message);
  } 

}
