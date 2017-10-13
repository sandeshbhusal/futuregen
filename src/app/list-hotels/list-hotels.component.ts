import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js'

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {
    hotelList: {}[]=[
	{
		"name":"Annapurna hotel",
		"Stars": 5,
		"Location": "Bharatpur -8, Chitwan",
		"Image": "request image"
	}
  ]
  constructor() {
  }

  ngOnInit() {
	var typed = new Typed("h1", {
		strings: [
			"अाज के खाने मन छ ?", "What do you want to eat <b> Today ?</b>",
			"रोज्नुहोस् <b> २५० </b> भन्दा बढि परिकारबाट !",
			"Choose from over<b> 250 </b>cuisines !",
			"Click on Menu to continue.."
		],
		smartBackspace: false, // Default value
		// loop: true,
		backSpeed: 10,
		typeSpeed: 50,
		showCursor: false,
		backDelay: 1000,
		loop: true
	});
  }

}
