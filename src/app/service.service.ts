import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { dark, defaultTheme, light, Theme, blue ,yellow,green, red, orange, purple} from './ThemeInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public isPopupActive = new Subject<boolean>();

  public active:any;
  private availableThemes: Theme[] = [light, dark, defaultTheme, purple,red,blue,orange, green,yellow];


  constructor() { }

  setDefaultTheme() {
    this.setActiveTheme(defaultTheme);
  }
  setLightTheme(): void {
    this.setActiveTheme(light);
  }
  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }
  setPurpleTheme(): void {
    this.setActiveTheme(purple);
  }

  setRedTheme(): void {
    this.setActiveTheme(red);
  }
  setBlueTheme(): void {
    this.setActiveTheme(blue);
  }
  setOrangeTheme(): void {
    this.setActiveTheme(orange);
  }
  setGreenTheme(): void {
    this.setActiveTheme(green);
  }
  setYellowTheme(): void {
    this.setActiveTheme(yellow);
  }
  

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

}
