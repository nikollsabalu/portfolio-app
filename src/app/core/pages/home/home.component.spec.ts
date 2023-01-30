import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { DevThemeService } from '../../theme/theme.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

describe('@HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const FirestoreStub = {
    collection: (name: string) => ({
      snapshotChanges: () => {of()},
    }),
  };

  const themeServiceMock = {
    theme: () => 'dark-theme'
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ],
      providers:[
        {
          provide: DevThemeService,
          useValue: themeServiceMock
        },
        { provide: AngularFirestore, useValue: FirestoreStub }
      ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
