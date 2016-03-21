import {Component} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'home',
    templateUrl: 'app/html/home.component.html',
    styleUrls: ['app/css/home.component.css'],
})

export class HomeComponent {
    constructor(){}
       
    scrollPageToVideo() {
        jQuery('html, body').animate({
		    scrollTop: jQuery("iframe").offset().top
	    },500);
    }
}