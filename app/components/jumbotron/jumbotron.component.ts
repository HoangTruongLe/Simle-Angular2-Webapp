import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class jumbotronComponent implements OnInit {
    heading:string;
    paragraph:string;
    linkbtn:string;
    buttonName:string;
    constructor() {
        this.heading = "welcome to my first Angular2 app!";
        this.paragraph= "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
        this.linkbtn = "#";
        this.buttonName="Learn more";

 }

    ngOnInit() { }
}