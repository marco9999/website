import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(@Inject(LOCALE_ID) locale: string) {
        console.log(`Locale is ${locale}`);
    }
}
