import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * App components.
 */
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditorComponent } from './editor/editor.component';
import { StatsComponent } from './stats/stats.component';
import { DocuComponent } from './docu/docu.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  {
    path: 'notfound',
    component: PageNotFoundComponent,
    data: {
      animation: {
        value: 'notfound'
      }
    }
  },
  {
    path: 'editor',
    component: EditorComponent,
    data: {
      animation: {
        value: 'editor'
      }
    },
  },
  {
    path: 'stats',
    component: StatsComponent,
    data: {
      animation: {
        value: 'stats'
      }
    },
  },
  {
    path: 'docu',
    component: DocuComponent,
    data: {
      animation: {
        value: 'docu'
      }
    },
  },
  {
    path: 'support',
    component: SupportComponent,
    data: {
      animation: {
        value: 'support'
      }
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      animation: {
        value: 'settings'
      }
    },
  },
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'editor'
      }
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      animation: {
        value: 'notfound'
      }
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
