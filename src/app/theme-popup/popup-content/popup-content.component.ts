import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.scss']
})
export class PopupContentComponent implements OnInit {

  isThemePopupActive: boolean = false;
  public colorChange: boolean = true;
  public colorChange1: boolean = false;
  public colorChange2: boolean = false;
  public colorChange3: boolean = false;
  public colorChange4: boolean = false;
  public colorChange5: boolean = false;
  public colorChange6: boolean = false;


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.isPopupActive.subscribe(data => {
      this.isThemePopupActive = data;
    });

    this.defaultTheme();
  }

  onClickClosePopup() {
    this.isThemePopupActive = false;
  }

  closePopup() {
    this.isThemePopupActive = false;
  }
  cancelPopup() {
    this.isThemePopupActive = false;
  }


  defaultTheme() {
    this.service.setDefaultTheme();
    this.isThemePopupActive = false;
    this.colorChange = true;
    this.colorChange1 = false;
    this.colorChange2 = false;
    this.colorChange3 = false;
    this.colorChange4 = false;
    this.colorChange5 = false;
    this.colorChange6 = false;
  }

  lightDarkTheme() {
    this.service.setLightTheme();
    this.isThemePopupActive = false;
    this.colorChange = true;
    this.colorChange1 = false;
    this.colorChange2 = false;
    this.colorChange3 = false;
    this.colorChange4 = false;
    this.colorChange5 = false;
    this.colorChange6 = false;
  }

  darkTheme() {
    this.service.setDarkTheme();
    this.isThemePopupActive = false;
    this.colorChange = true;
    this.colorChange1 = false;
    this.colorChange2 = false;
    this.colorChange3 = false;
    this.colorChange4 = false;
    this.colorChange5 = false;
    this.colorChange6 = false;
  }

  // redTheme(tabname:string) {
  //   this.service.setRedTheme();
  //   this.isThemePopupActive = false;
  //   if(tabname=='red'){
  //     this.colorChange1=true;
  //     this.colorChange2=false;
  //     this.colorChange3=false;
  //     this.colorChange4=false;
  //     this.colorChange5=false;
  //     this.colorChange6=false;
  //   }
  //   if(tabname=='blue'){
  //     this.colorChange1=false;
  //     this.colorChange2=false;
  //     this.colorChange3=false;
  //     this.colorChange4=false;
  //     this.colorChange5=false;
  //     this.colorChange6=false;
  //   }

  // }

  // blueTheme(tabname:string) {
  //   this.service.setBlueTheme();
  //   this.isThemePopupActive = false;
  //   if(tabname=='blue'){
  //     this.colorChange1=false;
  //     this.colorChange2=true;
  //     this.colorChange3=false;
  //     this.colorChange4=false;
  //     this.colorChange5=false;
  //     this.colorChange6=false;
  //   }
  // }

  // orangeTheme(tabname:string) {
  //   this.service.setOrangeTheme();
  //   this.isThemePopupActive = false;
  //   if(tabname=='orange'){
  //     this.colorChange1=false;
  //     this.colorChange2=false;
  //     this.colorChange3=true;
  //     this.colorChange4=false;
  //     this.colorChange5=false;
  //     this.colorChange6=false;
  //   }

  // }

  // greenTheme(tabname:string) {
  //   this.service.setGreenTheme();
  //   this.isThemePopupActive = false;
  //   if(tabname=='green'){
  //     this.colorChange1=false;
  //     this.colorChange2=false;
  //     this.colorChange3=false;
  //     this.colorChange4=true;
  //     this.colorChange5=false;
  //     this.colorChange6=false;
  //   }
  // }

  // yellowTheme(tabname:string) {
  //   this.service.setYellowTheme();
  //   this.isThemePopupActive = false;
  //   if(tabname=='yellow'){
  //     this.colorChange1=false;
  //     this.colorChange2=false;
  //     this.colorChange3=false;
  //     this.colorChange4=false;
  //     this.colorChange5=true;
  //     this.colorChange6=false;
  //   }
  // }

  Theme(param: any) {

    if (param == 'purple') {
      this.service.setPurpleTheme();
      this.colorChange = true;
      this.colorChange1 = false;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange4 = false;
      this.colorChange5 = false;
      this.colorChange6 = false;
    }

    // this.isThemePopupActive = false;
    if (param == 'red') {
      this.service.setRedTheme();
      this.colorChange = false;
      this.colorChange1 = true;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange4 = false;
      this.colorChange5 = false;
      this.colorChange6 = false;
    }

    //   this.isThemePopupActive = false;
    if (param == 'blue') {
      this.service.setBlueTheme();
      this.colorChange = false;
      this.colorChange1 = false;
      this.colorChange2 = true;
      this.colorChange3 = false;
      this.colorChange4 = false;
      this.colorChange5 = false;
      this.colorChange6 = false;
    }
    //   this.isThemePopupActive = false;
    if (param == 'orange') {
      this.service.setOrangeTheme();
      this.colorChange = false;
      this.colorChange1 = false;
      this.colorChange2 = false;
      this.colorChange3 = true;
      this.colorChange4 = false;
      this.colorChange5 = false;
      this.colorChange6 = false;
    }

    //   this.isThemePopupActive = false;
    if (param == 'green') {
      this.service.setGreenTheme();
      this.colorChange = false;
      this.colorChange1 = false;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange4 = true;
      this.colorChange5 = false;
      this.colorChange6 = false;
    }

    //   this.isThemePopupActive = false;
    if (param == 'yellow') {
      this.service.setYellowTheme();
      this.colorChange = false;
      this.colorChange1 = false;
      this.colorChange2 = false;
      this.colorChange3 = false;
      this.colorChange4 = false;
      this.colorChange5 = true;
      this.colorChange6 = false;
    }


  }

}
