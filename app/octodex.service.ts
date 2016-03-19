import {Injectable} from 'angular2/core';
import {OCTODEX} from './octodex';

@Injectable()
export class OctodexService {
    private catCounter:number = 0;
    
    getCat() {
        return OCTODEX[Math.floor(Math.random() * (121 - 0)) + 0];
    }
      
}