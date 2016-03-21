import {Component, OnInit} from 'angular2/core';
import {Skill} from './skill';

declare var jQuery:JQueryStatic;

@Component({
    templateUrl: 'app/html/skills.component.html',
    styleUrls: ['app/css/skills.component.css'],
})

export class SkillsComponent implements OnInit{
    db:PouchDB = new PouchDB('skillsPage');
    skill:Skill;
    
    ngOnInit() {        
        jQuery('#test').append('<p>' + this.db + '</p>');
    }
}