import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * App components.
 */
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditorComponent } from './editor/editor.component';



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
    path: 'navigation',
    component: NavigationComponent,
    data: {
      animation: {
        value: 'navigation'
      }
    },
    children: [
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          animation: {
            value: 'editor'
          }
        }
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
    ]
  },
  {
    path: '',
    redirectTo: 'navigation/editor',
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
