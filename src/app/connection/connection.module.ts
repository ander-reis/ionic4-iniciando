import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ConnectionPage} from './connection.page';

import {Network} from "@ionic-native/network/ngx";

const routes: Routes = [
    {
        path: '',
        component: ConnectionPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    providers: [Network],
    declarations: [ConnectionPage]
})
export class ConnectionPageModule {
}
