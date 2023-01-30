import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../../../fire-store.service';
import { coursesMock } from '../../mocks/courses.mock';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input() cardStyle: string;
  @Input() chipStyle: string;
  @Input() bodyPie: string;
  @Input() buttonstyle: string;
  bio = [];
  mainTechnologies = [];
  secondTechnologies = [];
  technologiesDesign = [];
  courses: any[];
  displayBasic = false;
  certificate = '';
  isloading = true;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.getData();

    this.courses = coursesMock;
  }

  getData(): any {
    this.firestoreService.getBio().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        this.bio = catData.payload.doc.data();
      });
    });

    this.firestoreService.getTechnologies().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        this.secondTechnologies = catData.payload.doc.data().otras;
        this.mainTechnologies = catData.payload.doc.data().principales;
        this.technologiesDesign = catData.payload.doc.data().design;
      });
    });
  }

  showBasicDialog(img: string): void {
    this.displayBasic = true;
    this.isloading = true;
    this.certificate = img;
    setInterval(() => {
      this.isloading = false;
    }, 500);
  }
}
