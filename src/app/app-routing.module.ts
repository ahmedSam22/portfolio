import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
  {path:'' , component : SummaryComponent, data: { animation: 'summaryPage' }},
  {path:'about' , component : AboutComponent, data: { animation: 'aboutPage' }},
  {path:'contact' , component : ContactComponent, data: { animation: 'contactPage' }},
  {path:'skills' , component : SkillsComponent, data: { animation: 'skillsPage' }},
  {path:'exp' , component : ExperienceComponent, data: { animation: 'experiencesPage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
