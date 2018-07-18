import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../JsonResponse';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  change():void{
    console.log(this.user);
    this.Usersvc.change(this.user)
      .subscribe(resp=>{
        console.log(resp);
      })
  }

  constructor(private Usersvc: UserService) { 

  }

  ngOnInit() {
    this.Usersvc.get(4)
  }

}
