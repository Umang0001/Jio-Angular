import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr=[
    {src:"../../assets/images/recharge.JPG",text:"Recharge"},
    {src:"../../assets/images/paybills.JPG",text:"Pay Bills"},
    {src:"../../assets/images/getsim.JPG",text:"Get Jio SIM"},
    {src:"../../assets/images/port.JPG",text:"Port to Jio"},
    {src:"../../assets/images/fiber.JPG",text:"Get JioFiber"},
    {src:"../../assets/images/support.JPG",text:"Support"},
  ]
}
