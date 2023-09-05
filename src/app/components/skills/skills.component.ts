import { ServicesService } from './../../shared/services.service';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    
    // ...
     trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('400ms ease-in', style({transform: 'translateX(0%)'})),
      animateChild({
        duration : '10000ms'
      })
    ]),
    transition(':leave', [
      animate('400ms ease-in', style({transform: 'translateX(-100%)'}))
    ])
  ]),

  trigger('image', [
    transition(':enter', [
      style({transform : 'translateX(100%) !important',opacity :0}),
      animate('900ms ease-in-out',
       style({transform : 'translateX(0%) !important',opacity : 0})),
       animateChild({
        duration : '10000ms'
      })
    ]),
  
  ])

]
})
export class SkillsComponent {
  currentTheme:any;
  constructor(private service:ServicesService){
  
  }
  
  ngOnInit():void{
    this.service.currentTheme.subscribe(e=>this.currentTheme = e)
  }



  
}
