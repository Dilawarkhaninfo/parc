import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { MainPageComponent } from './main-page/main-page.component';
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
import { MenusComponent } from './menus/menus.component';
import { PortalviewComponent } from './portalview/portalview.component';

const mainPageRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route, redirects to 'profile'
  { path: 'dashboard', component: DashboardContentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ourPortals', component: OurPortalsComponent },
  { path: 'cms', component: CmsComponent },
  { path: 'report', component: ReportsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'pageList', component: PagesListComponent },
  { path: 'list', component: ListComponent },
  { path: 'update/:pageId', component: UpdatePageComponent },
  { path: 'userpage/:pageId', component: ViewPageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'sendnotifications', component: SendnotificationsComponent },
  { path: 'seenotifications', component: SeenotificationsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'portalview', component: PortalviewComponent },

  // Add more child routes as needed
];

const routes: Routes = [

  {
    path: 'mainpage',
    component: MainPageComponent,
    children: mainPageRoutes, // Add child routes here
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no path specified
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
