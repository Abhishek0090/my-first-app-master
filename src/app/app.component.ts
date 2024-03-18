import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  // template: '<h2>HI bro</h2>',
  styleUrl: './app.component.css',
})
export class AppComponent {
    users = [
    {name:"Abhishek",isSingle:true,salary :60000},
    {name:"Rupa",isSingle:false,salary:40000},
    {name:"nitesh",isSingle:true,salary:5000},
  ]

  receivedData(e:User){
    const userIndex =  this.users.findIndex((user)=>user.name === e.name)
    this.users[userIndex].salary = e.newSalary
  }
}
