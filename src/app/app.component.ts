import { Component, HostBinding, OnInit } from '@angular/core';
import { DevThemeService } from './core/theme/theme.service';
import { FilterService } from './core/services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  public proyectos = [];
  tecnologiasPrincipales = [];
  tecnologiasSecundarias = [];
  tecnologiasDesign = [];

  @HostBinding('class')

  get attrClass(): any {
    return this.themeService.theme;
  }
  get filterClass(): any {
    return this.filterService.filter;
  }


  constructor(private themeService: DevThemeService,
              private filterService: FilterService) {}


}
