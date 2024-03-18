import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { User } from '../../../models/user';

function formatName(value : string){
   return  value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe],  // for using directive FormsModule,CommonModule modules are required
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {

  // Decorators e.g @Input @Pipes 

  // Transform is used to add transform and change the value 

  @Input({alias : "userName",transform : formatName}) name = "";  @Input({transform : booleanAttribute}) isSingle!:boolean;
  @Input({transform : numberAttribute}) salary!:number;


  // *** Child to Parent Data Passing *** //
  @Output() myEvent = new EventEmitter<User>()  

  sendData(){
    // this.myEvent.emit("Coders Never Quit")
    this.myEvent.emit({name : this.name,newSalary :20000})
  }

    bgColor = "red"
  // name = 'Abhishek';
  status = 'single';
  phoneno = 123456789
  // salary = '40000';
  isBtnDisabled = false; 
  inputVal = "Hi bro" 

  users = [
    {name:"Abhishek",isSingle:true,salary:60000},
    {name:"Rupa",isSingle:false,salary:40000},
    {name:"nitesh",isSingle:true,salary:5000},
  ]

  // we dont need this function when using ngModel directives
  onChange(e:Event){
    const value =  (e.target as HTMLInputElement ).value     // bscause event can be either checkbox or input so thats why as keyword is used
    this.inputVal = value // this is used for accessing and setting the value in class
  }
}
