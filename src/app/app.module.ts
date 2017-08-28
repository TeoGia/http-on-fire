import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Primeng modules
 */
import { TabMenuModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';

/**
 * Apps components
 */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditorComponent } from './editor/editor.component';
import { AppRoutingModule } from './app-routing.module';
import { StatsComponent } from './stats/stats.component';
import { DocuComponent } from './docu/docu.component';
import { SupportComponent } from './support/support.component';
import { SocialComponent } from './social/social.component';
import { HistoryComponent } from './editor/history/history.component';

/**
 * Root level services.
 */
// TODO here

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    EditorComponent,
    StatsComponent,
    DocuComponent,
    SupportComponent,
    SocialComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
