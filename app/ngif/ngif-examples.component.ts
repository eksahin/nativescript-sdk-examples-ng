import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("*ngIf Basic Example", "/usingNgIfExampleComponent"),
    new Link("*ngIf Platform Specific Elements", "/usingNgIfForPlatformSpecificComponent")    
];
     
@Component({
    selector: 'ngif-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'ngif/ngif-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgIfExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}