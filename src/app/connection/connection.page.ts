import {Component, OnInit} from '@angular/core';
import {Network} from "@ionic-native/network/ngx";

@Component({
    selector: 'app-connection',
    templateUrl: './connection.page.html',
    styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

    constructor(private network: Network) {
    }

    ngOnInit() {
        // watch network for a disconnection
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            console.log('network was disconnected :-(');
        });

        // stop disconnect watch
        // disconnectSubscription.unsubscribe();

        // watch network for a connection
        let connectSubscription = this.network.onConnect().subscribe(() => {
            console.log('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });


        // stop connect watch
        // connectSubscription.unsubscribe();
    }

}
