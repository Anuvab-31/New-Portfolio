import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  
  menuVariable: boolean = false;
  icon: boolean = true;
  icon1: boolean = false;


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  
  themePopup() {
    this.service.isPopupActive.next(true);
  }


  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.icon = false;
    this.icon1 = true;    
  }

  closeMenu() {
    this.menuVariable = !this.menuVariable;
    this.icon = true;
    this.icon1 = false;
    
  }


}
