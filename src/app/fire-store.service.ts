import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore ) { }


  public getProjects() {
    return this.firestore.collection('proyectos').snapshotChanges();
  }

  public getTechnologies() {
    return this.firestore.collection('tecnologias').snapshotChanges();
  }

  public getBio() {
    return this.firestore.collection('sobreMi').snapshotChanges();
  }

  public geExperience() {
    return this.firestore.collection('experiencia').snapshotChanges();
  }
}
