import { Component, OnInit } from '@angular/core';
import { DevThemeService } from '../../theme/theme.service';
import { FirestoreService } from '../../../fire-store.service';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { DarkComponents, LightComponents, Theme } from '../../enums/theme';
import { menuItemsMock } from '../../mocks/menu.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  checked: boolean;
  isLoading = true;
  bioLoaded = false;
  technologiesLoaded = false;
  projectsLoaded = false;
  visibleSidebar: boolean;
  isDarkMode = true;
  darkMode: string;
  dialogStyle: string;
  cardStyle: string;
  buttonStyle: string;
  toolbarStyle: string;
  dataviewStyle: string;
  chipStyle: string;
  selectButtonStyle: string;
  menuButtonStyle: string;
  items: MenuItem[];

  constructor(
    private theme: DevThemeService,
    private firestoreService: FirestoreService,
    private primengConfig: PrimeNGConfig
  ) {
    this.darkMode = theme.theme;

    if (this.darkMode === Theme.darkTheme) {
      this.isDarkMode = false;
      this.checked = true;
    } else {
      this.isDarkMode = true;
      this.checked = false;
    }

    this.getData();
    this.changeTheme();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = menuItemsMock;
  }

  getData(): any {
    this.firestoreService.getProjects().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        this.isLoading = false;
        catData.payload.doc.data().proyectos;
      });
    });

    this.isLoading = true;

    this.firestoreService.getBio().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        catData.payload.doc.data();
      });
    });

    this.firestoreService.getTechnologies().subscribe((catsSnapshot) => {
      catsSnapshot.forEach((catData: any) => {
        catData.payload.doc.data().otras;
        catData.payload.doc.data().principales;
        catData.payload.doc.data().design;
      });
    });
  }

  changeTheme(): any {
    if (this.isDarkMode === false) {
      this.isDarkMode = true;
      this.theme.setDarkTheme();

      this.dialogStyle = DarkComponents.dialog;
      this.cardStyle = DarkComponents.card;
      this.buttonStyle = DarkComponents.button;
      this.toolbarStyle = DarkComponents.toolbar;
      this.dataviewStyle = DarkComponents.dataView;
      this.chipStyle = DarkComponents.chip;
      this.selectButtonStyle = DarkComponents.selectButton;
      this.menuButtonStyle = DarkComponents.menuButton;
    } else {
      this.isDarkMode = false;
      this.theme.setLightTheme();

      this.dialogStyle = LightComponents.dialog;
      this.cardStyle = LightComponents.card;
      this.buttonStyle = LightComponents.button;
      this.toolbarStyle = LightComponents.toolbar;
      this.dataviewStyle = LightComponents.dataView;
      this.chipStyle = LightComponents.chip;
      this.selectButtonStyle = LightComponents.selectButton;
      this.menuButtonStyle = LightComponents.menuButton;
    }
  }

  closeSidebar(): void {
    document.getElementById('sidebar').style.display = 'none';
  }

  openSidebar(): void {
    document.getElementById('sidebar').style.display = 'block';
  }

  addStyle(id: string) {
    var btnAbout = document.getElementById('btnAbout');
    var btnProject = document.getElementById('btnProject');
    var btnExperience = document.getElementById('btnExperience');

    if (id === 'btnAbout') {
      btnAbout.className += ' linkActive';
      btnProject.classList.remove('linkActive');
      btnExperience.classList.remove('linkActive');
    }

    if (id === 'btnProject') {
      btnProject.className += ' linkActive';
      btnAbout.classList.remove('linkActive');
      btnExperience.classList.remove('linkActive');
    }
    if (id === 'btnExperience') {
      btnExperience.className += ' linkActive';
      btnProject.classList.remove('linkActive');
      btnAbout.classList.remove('linkActive');
    }
  }
}
