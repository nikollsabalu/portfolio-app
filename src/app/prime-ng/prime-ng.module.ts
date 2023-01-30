import { NgModule } from '@angular/core';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ChipModule} from 'primeng/chip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import {SplitButtonModule } from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import {TimelineModule} from 'primeng/timeline';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [],
  exports: [
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ChipModule,
    ConfirmDialogModule,
    DataViewModule,
    DialogModule,
    InputSwitchModule,
    FormsModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RippleModule,
    SelectButtonModule,
    SidebarModule,
    SplitButtonModule,
    TabViewModule,
    TimelineModule,
    ToolbarModule,
    TooltipModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    TagModule
  ]
})
export class PrimeNgModule { }
