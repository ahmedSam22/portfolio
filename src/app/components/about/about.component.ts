import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ServicesService } from 'src/app/shared/services.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    
    // ...
     trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('400ms ease-in', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('400ms ease-in', style({transform: 'translateX(-100%)'}))
    ])
  ]),

  trigger('image', [
    transition(':enter', [
      style({transform : 'translateX(100%)',opacity : 0}),
      animate('600ms ease-in-out',
       style({transform : 'translateX(0%)',opacity : 1}))
    ]),
  
  ])

]
})
export class AboutComponent {
  currentTheme:any;
  constructor(private service:ServicesService){
  
  }
  
  ngOnInit():void{
    this.service.currentTheme.subscribe(e=>this.currentTheme = e)
  }
}
