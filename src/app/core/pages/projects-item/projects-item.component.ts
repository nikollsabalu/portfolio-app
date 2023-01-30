import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FirestoreService } from '../../../fire-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss'],
})
export class ProjectsItemComponent implements OnInit {
  route: string;
  project = [];
  isLoading = true;
  hasDemo = true;
  urlValue;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUrl();
    this.getData();
  }

  getData(): any {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getProjects().subscribe((catsSnapshot) => {
      this.isLoading = false;
      catsSnapshot.forEach((catData: any) => {
        this.project = catData.payload.doc.data().proyectos[id];
      })
    });
    this.isLoading = true;
  }

  getUrl(): void {
    const url = this.router.parseUrl(this.router.url);
    this.urlValue = url.queryParams['id'];
  }
}
