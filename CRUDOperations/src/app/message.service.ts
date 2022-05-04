import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// const subject = new BehaviorSubject(123);
// subject.subscribe(console.log);
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  public message = new Subject<string>();


  setMessage(value :string){
       this.message.next(value);
  
  }
}
