import {Component, ElementRef} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'home',
    templateUrl: 'app/html/home.component.html',
    styleUrls: ['app/css/home.component.css'],
})

export class HomeComponent {
    constructor(private el:ElementRef){}
       
    scrollPageToVideo() {
        jQuery('html, body').animate({
		    scrollTop: jQuery("iframe").offset().top
	    },500);
    }
}