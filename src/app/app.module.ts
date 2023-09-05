import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/body/layout/layout.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AboutComponent } from './components/about/about.component';
import { provideRouter } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    SummaryComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [provideAnimations(),provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
