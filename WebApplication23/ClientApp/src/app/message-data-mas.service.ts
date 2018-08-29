import { Injectable } from '@angular/core';
import { MessageModel } from './Model/MessageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageDataMasService {

  public masMsg:MessageModel[]=[];
  constructor() { }

  public addMessage(msg:MessageModel)
  {
    this.masMsg.push(msg);
  }

  public clearMessges()
  {
    this.masMsg=[];
  }
}
