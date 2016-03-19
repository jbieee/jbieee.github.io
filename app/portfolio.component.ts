import {Component, OnInit} from 'angular2/core';
import {OctodexService} from './octodex.service';

@Component({
    templateUrl: 'app/html/portfolio.component.html',
    styleUrls: ['app/css/portfolio.component.css'],
})

export class PortfolioComponent implements OnInit{
    currentCat:String;
    hasStarted:boolean = false;
    
    constructor(private _octodexService:OctodexService) {}
    
    ngOnInit() {
        this.currentCat = this._octodexService.getCat();
    }
    
}