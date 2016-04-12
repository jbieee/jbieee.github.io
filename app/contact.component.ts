import {Component} from 'angular2/core';
import {ContactForm} from './contactForm.model';

@Component({
    selector: 'contact',
    templateUrl: 'app/html/contact.component.html',
    styleUrls: ['app/css/contact.component.css'],
})

export class ContactComponent {
    jQuery: JQueryStatic;

    model = new ContactForm('', '', '');

    onSubmit() {
        jQuery.ajax({
            url: "https://formspree.io/jordan.an.boggs@gmail.com",
            method: "POST",
            data: { name: this.model.name,
                    email: this.model.email,
                    message: this.model.message,
                    _subject: 'jbieee.github.io' },
            dataType: "json"
        });
        
        this.model = {
            name: '',
            email: '',
            message: ''
        };
        
        document.getElementById('header').innerHTML = 'Thank You! 😀'
    }
}