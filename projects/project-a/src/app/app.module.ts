import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectAComponentAComponent } from './project-a-component-a/project-a-component-a.component';
import { Routes, RouterModule } from '@angular/router';
import { ChildAComponent } from './project-a-component-a/child-a/child-a.component';
import { CoreComponent } from './core/core.component';

const appRoutes: Routes = [
  {
    path: 'projectA',
    component: ProjectAComponentAComponent,
    children: [
      {
        path: 'child',
        component: ChildAComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/projectA',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectAComponentAComponent,
    ChildAComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CoreComponent
  ]
})
export class AppModule { }
