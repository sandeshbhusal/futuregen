import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  private searching:boolean = false;

  popular:{}[] = [
	  {"Name":"Lorem Ipsum", "Image":"assets/4.jpg"},
	  {"Name":"Another Name", "Image":"assets/3.jpg"},
	  {"Name":"Simply Simple", "Image":"assets/2.jpg"},
	  {"Name":"Another Item", "Image":"assets/1.jpg"}
  ]
  constructor() { }

  ngOnInit() {
	  var typed = new Typed("h1", {
  		strings: [
  			"अाज के खाने मन छ ?", "What do you want to eat <b> Today ?</b>",
  			"रोज्नुहोस् <b> २५० </b> भन्दा बढि परिकारबाट !",
  			"Choose from over<b> 250 </b>cuisines !",
  			"तल टाईप गर्नुहोस् ...",
			"Type below to continue ..."
  		],
  		smartBackspace: false, // Default value
  		// loop: true,
  		backSpeed: 10,
  		typeSpeed: 15,
  		showCursor: false,
  		backDelay: 2000,
  		loop: false
  	});
  }

}
