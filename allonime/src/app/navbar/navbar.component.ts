import { Component, OnInit } from '@angular/core';
import script from './activeItemSystm';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    script.activeItemSystm();
  }
}
