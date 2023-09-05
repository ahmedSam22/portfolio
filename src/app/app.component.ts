import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesService } from './shared/services.service';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './shared/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    slideInAnimation
  ],
})
export class AppComponent {
  title = 'portfolio';
  light:Boolean = true;
  currentTheme:any;
  
constructor(private service:ServicesService,private contexts: ChildrenOutletContexts){
 

}

  ngOnInit():void {
    
    //  localStorage.setItem('theme' , 'light');
    this.service.currentTheme.subscribe(e=>this.currentTheme = e)
  
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
