import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectBComponentBComponent } from './project-bcomponent-b/project-bcomponent-b.component';
import { Routes, RouterModule } from '@angular/router';
import { ChildbComponent } from './project-bcomponent-b/childb/childb.component';

const appRoutes: Routes = [
  {
    path: 'projectB',
    component: ProjectBComponentBComponent,
    children: [
      {
        path: 'child',
        component: ChildbComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/projectB',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectBComponentBComponent,
    ChildbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
