import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class navbarComponent implements OnInit {
    private projectName: string;
    constructor() { 
        this.projectName = 'Angular Demo';
    }

    ngOnInit() { }
}