import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-member-registration',
  templateUrl: './new-member-registration.component.html',
  styleUrls: ['./new-member-registration.component.scss']
})
export class NewMemberRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}
