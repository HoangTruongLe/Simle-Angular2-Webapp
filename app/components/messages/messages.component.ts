import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'message',
    template: '<div class="container"><h1>{{message}}</h1></div>'
})
export class messagesComponent implements OnInit {
    message:string;
    constructor() {
        this.message ="this is message";
     }

    ngOnInit() { }
}