import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../animations';

@Component({
  selector: 'app-chatboxwidget',
  templateUrl: './chatboxwidget.component.html',
  styleUrls: ['./chatboxwidget.component.scss'],
   animations: [SlideInOutAnimation]
})
export class ChatboxwidgetComponent implements OnInit {

 animationState = 'out';
 dynamicimage = 'chatbox-maximum.png';

  constructor() { }

  ngOnInit() {
  }
  maximumBt(){
  this.animationState = this.animationState === 'out' ? 'in' : 'out';
  this.dynamicimage = this.animationState === 'out' ? "chatbox-maximum.png" : "chatbox-minimum.png";
  }
   


  


}
