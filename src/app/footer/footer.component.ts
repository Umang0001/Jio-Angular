import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr:any []=[
    ["Our offerings",["Mobile","Fiber","Business","Apps","Shop"]], 
    ["Explore",["Support","Locate us","FAQ","Track order","Contact us"]],
    ["Our company",["Reliance Industries","Reliance Foundation","JioLife","Careers","Investor relations"]],
    ["Useful links",["Get Jio SIM","Get JioFiber","Recharge","Pay Bills","Login"]],
]

}
