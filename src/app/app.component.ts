import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  user: User;
  
  remove():void{
    this.usersvc.remove(this.user)
      .subscribe(resp =>{
        console.log(resp);
      });
  }
  constructor(private usersvc: UserService){}
   
  ngOnInit(){
    this.usersvc.list()
      .subscribe(resp =>{
        this.user= resp.Data;
        console.log(resp)
      });
  }
}
