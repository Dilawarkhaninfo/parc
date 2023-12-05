import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PagesListComponent } from './pages-list/pages-list.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { OurPortalsComponent } from './our-portals/our-portals.component';
import { CmsComponent } from './cms/cms.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SeenotificationsComponent } from './seenotifications/seenotifications.component';
import { SendnotificationsComponent } from './sendnotifications/sendnotifications.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';
import { PortalviewComponent } from './portalview/portalview.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PagesListComponent,
    UpdatePageComponent,
    ViewPageComponent,
    SidebarComponent,
    MainPageComponent,
    FooterComponent,
    OurPortalsComponent,
    CmsComponent,
    ReportsComponent,
    ProfileComponent,
    SettingsComponent,
    UsersComponent,
    LoginComponent,
    DashboardContentComponent,
    FeedbackComponent,
    SeenotificationsComponent,
    SendnotificationsComponent,
    HeaderComponent,
    MenusComponent,
    PortalviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AngularEditorModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
