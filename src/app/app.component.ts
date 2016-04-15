import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {LoginComponent} from "./sessions/login.component";
import {UsersDashboardComponent} from "./users/users.dashboard.component";
import {SessionService} from "./sessions/session.service";

@Component({
    selector: 'app',

    templateUrl: `app/main.html`,
    directives: [ROUTER_DIRECTIVES]
})


export class AppComponent {}