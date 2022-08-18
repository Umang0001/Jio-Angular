import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logo="../../assets/images/logo.JPG";
  searchIcon="../../assets/images/pngfind.com-search-icon-png-545056.png";
  help="../../assets/images/help.JPG";
  cart="../../assets/images/cart.JPG";
  profile="../../assets/images/profile.JPG";

  options=["JioFiber","Business","Shop","Apps"]

}
