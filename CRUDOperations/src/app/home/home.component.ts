import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
  }
  setMessage(event){
     this.messageService.setMessage(event.value);
  }
}
