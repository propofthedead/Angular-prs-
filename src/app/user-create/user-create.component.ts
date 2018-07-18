import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../JsonResponse';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  create():void{
    console.log(this.user);
    this.Usersvc.create(this.user)
      .subscribe(resp=>{
        console.log(resp);
      })
  }

  constructor(private Usersvc: UserService) { 

  }

  ngOnInit() {
  }

}
