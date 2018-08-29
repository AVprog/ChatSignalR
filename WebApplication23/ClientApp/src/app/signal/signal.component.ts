import { Component, OnInit,OnDestroy} from '@angular/core';
import { SignalrServiceService} from "../signalr-service.service";
import { MessageModel } from "../Model/MessageModel";
import { MessageDataMasService } from '../message-data-mas.service';
import { Subscription } from "rxjs";




@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit {
   
  public masMsg:MessageModel[];
  constructor(private  signalrServiceService:SignalrServiceService,
              private messageDataMasService:MessageDataMasService) {  }

  private subs:Subscription;

  ngOnInit() {    
    this.subs=this.signalrServiceService.onReceiveMessage().subscribe(msg=>
    {
      this.messageDataMasService.addMessage(msg);
    })

    this.masMsg=this.messageDataMasService.masMsg;
  }

  ngOnDestroy()
  {
    this.subs.unsubscribe();

  }

  sendMessage(user:string,message:string)
  {
    this.signalrServiceService.sendMessage(user,message);
  } 

  clear()
  {
    this.messageDataMasService.clearMessges();
    this.masMsg=this.messageDataMasService.masMsg;
  }


}
