import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr = [
    {
      title: "Man must explore, and this is exploration at its greatest",
      id:1
          
    },
    {
      title: "Problems look mighty small from 150 miles up",
      id:2
    },
    {
      title:"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
    },
    {
      title:" Science has not yet mastered prophecy"
    },
    {
title:" Failure is not an option"
    },
    {
title:" Many say exploration is part of our destiny, but it’s actually our duty to future generations."
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
