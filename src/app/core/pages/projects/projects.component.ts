import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../../../fire-store.service';
import { FilterService } from '../../services/filter.service';
import { PrimeNGConfig } from 'primeng/api';
import { Technologies } from '../../enums/technologies';
import { tecnologiesMock } from '../../mocks/filters.mock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() cardStyle: string;
  @Input() dataviewStyle: string;
  @Input() chipStyle: string;
  @Input() selectButtonStyle: string;

  stateOptions: { label: string; value: string }[];
  projects = [];
  technologies = [];
  projectsCopy = [];
  angular= [];
  react = [];
  vue = [];
  order: number;
  campo: string;
  filters = [];
  defaultValue: 'all';

  constructor(
    private firestoreService: FirestoreService,
    public filter: FilterService,
    private primeNGConfig: PrimeNGConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    this.getData();
    this.filters = tecnologiesMock;
  }

  getData(): any {
    this.firestoreService.getProjects().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        this.projects = catData.payload.doc.data().proyectos;
        this.projectsCopy = this.projects;

        this.projects.map( (project) => {
          let cadena = project.tecnologias[0]['nombre'];

          if (cadena.includes(Technologies.angularName)) this.angular.push(project);
          if (cadena.includes(Technologies.reactName)) this.react.push(project);
          if (cadena.includes(Technologies.vueName)) this.vue.push(project);
        });

        this.filterProjects(this.filter.filter);
      });
    });
  }

  filterProjects(name: string) {
    let filter = name.toLowerCase();
    switch (filter) {
      case Technologies.angular:
        this.filter.setAngular();
        this.projects = this.angular;
        break;
      case Technologies.react:
        this.projects = this.react;
        this.filter.setReact();
        break;
      case Technologies.vue:
        this.filter.setVue();
        this.projects = this.vue;
        break;
      default:
        this.filter.setAll();
        this.projects = this.projectsCopy;
    }
  }

  viewProjectDetail(id: number){
    this.router.navigate(['/project', id]);
 }
}
