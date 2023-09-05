import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isOpen : boolean = false;
  constructor(private service:ServicesService){
  

  }



  turnLight(){
  return this.service.turnLight()
  }


}
