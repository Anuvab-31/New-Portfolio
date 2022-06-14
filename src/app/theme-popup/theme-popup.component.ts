import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-theme-popup',
  templateUrl: './theme-popup.component.html',
  styleUrls: ['./theme-popup.component.scss']
})
export class ThemePopupComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  themePopup(){
    this.service.isPopupActive.next(true);
  }

  toggleBtn() {
    
  }

}
