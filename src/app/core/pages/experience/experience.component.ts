import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../../fire-store.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience = [];
  @Input() cardStyle: string;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): any {
    this.firestoreService.geExperience().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        this.experience = catData.payload.doc.data().experiencia;
      });
    });
  }
}
