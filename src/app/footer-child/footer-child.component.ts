import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer-child',
  templateUrl: './footer-child.component.html',
  styleUrls: ['./footer-child.component.css']
})
export class FooterChildComponent implements OnInit {

  constructor() {
    
  }
  
  @Input() data:any
  
  ngOnInit(): void {
    console.log(this.data);

  }

  

  
  

}
