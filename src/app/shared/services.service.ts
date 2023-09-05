import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  title = 'portfolio';
  light= true;
  currentTheme = new BehaviorSubject(localStorage.getItem("theme") || 'light') ;
  
  constructor() {
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme' , 'light')
    }
    // localStorage.getItem('theme') ? localStorage.setItem('theme' , 'light') : localStorage.setItem('theme' , 'light');
    if(localStorage.getItem('theme') == 'light'){
      this.light = !this.light
    }
    
  }


  turnLight(){
    this.light = !this.light
   this.light ? localStorage.setItem('theme' , 'dark') : localStorage.setItem('theme' , 'light');
   this.light ? this.currentTheme.next('dark') : this.currentTheme.next('light');
   console.log(this.light , localStorage.getItem('theme'));
  }

}
