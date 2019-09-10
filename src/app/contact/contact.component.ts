import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormArray} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
userFormData;
constructor() {
this.userFormData=new FormGroup({
  'userName':new FormControl('goutham'),
  'email':new FormControl(),
  'mobile':new FormControl(),
  // 'country':new FormControl(),
  // 'education':new FormControl()

});

 }

  ngOnInit() {
  }
  submitFormData(){
    console.log(this.userFormData.value)
  }

}
