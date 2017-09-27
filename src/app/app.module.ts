import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from "./unused/server/server.component";
import { ServersComponent } from './servers/servers.component';

import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from "./directives/attribute/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './directives/attribute/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/structural/unless/unless.directive';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AccountComponent } from './users/account/account.component';
import { NewAccountComponent } from './users/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    HeaderComponent,
    UsersComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
