import { Component,  OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
	  trigger('zoomOut', [
		  state('normal', style({
			  backgroundColor: '#ff0000'
		  })),
		  state('out', style({
			  borderRadius: '100px'
		  })),
		  transition('normal => out', animate('100ms')),
		  transition('out => normal', animate('100ms'))
	  ])
  ]
})
export class LoginComponent implements OnInit {
  thisstate = "normal";
  constructor() { }

  ngOnInit() {
  }
  validatedata($event, username:string, password:string){
	  console.log($event);
  }
}
