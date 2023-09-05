import { ServicesService } from 'src/app/shared/services.service';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
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
  ])

  ]

})
export class SummaryComponent {
currentTheme:any;
constructor(private service:ServicesService){

}

ngOnInit():void{
  this.service.currentTheme.subscribe(e=>this.currentTheme = e)
}
}
