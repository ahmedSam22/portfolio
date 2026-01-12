import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  // ...
} from '@angular/animations';import { projects } from 'src/assets/projects';
import { other_projects } from 'src/assets/other-project';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
export class ExperienceComponent {
allProjects:any;
otherProjects:any;


ngOnInit(){
  this.allProjects = projects;
  this.otherProjects = other_projects;
  console.log(this,this.allProjects.allProjects);
  
}
}
