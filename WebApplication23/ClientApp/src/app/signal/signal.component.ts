import { Component, OnInit } from '@angular/core';
import { SignalrServiceService} from "../signalr-service.service";
import { MessageModel } from "../Model/MessageModel";


@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {
   
  constructor(private  signalrServiceService:SignalrServiceService) {   
    let messageModel=new MessageModel("x","message from x");
    this.masMsg.push(messageModel);
   }
  public masMsg:MessageModel[]=[];

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
