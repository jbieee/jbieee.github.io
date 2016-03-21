import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/html/home.component.html',
    styleUrls: ['app/css/home.component.css'],
})

export class HomeComponent {
    jQuery:JQueryStatic;
    
    constructor(){}
       
    scrollPageToVideo() {
        jQuery('html, body').animate({
		    scrollTop: jQuery("iframe").offset().top
	    },500);
    }
}