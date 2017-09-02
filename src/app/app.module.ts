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
import { PanelModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

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
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './editor/history/history.component';
import { EditorPanelComponent } from './editor/editor-panel/editor-panel.component';
import { DataTableComponent } from './common/data-table/data-table.component';

/**
 * Root level services.
 */
import { HistoryService } from './editor/history/history.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    EditorComponent,
    StatsComponent,
    DocuComponent,
    SupportComponent,
    SettingsComponent,
    HistoryComponent,
    EditorPanelComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule, CheckboxModule,
    FormsModule, ToolbarModule,
    HttpModule, ButtonModule,
    TabMenuModule, CodeHighlighterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataListModule,
    PanelModule,
    TabViewModule,
    AccordionModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule,
    DataTableModule,
    SharedModule
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
