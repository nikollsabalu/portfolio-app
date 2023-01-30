import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsItemComponent } from './pages/projects-item/projects-item.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    FooterComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectsItemComponent,
    LoadingComponent,
    ExperienceComponent,
    HomeComponent,
  ],
  imports: [CommonModule, PrimeNgModule, BrowserAnimationsModule],
  exports: [
    FooterComponent
  ]
})
export class CoreModule {}
