import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AppNavigation} from "./app.navigation";
import {AppContainer} from "./app.container";
import {AppFooter} from "./app.footer";
import {AppLearn} from "./app.learn";
import {AppManager} from "./app.manager";
import {AppGame} from "./app.game";

const appRoutes = [
    {
        path: '#/learn',
        component: AppLearn
    },
    {
        path: '#/word-manager',
        component: AppManager
    },
    {
        path: '#/game',
        component: AppGame
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        AppNavigation,
        AppContainer,
        AppFooter,
        AppLearn,
        AppManager,
        AppGame
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}