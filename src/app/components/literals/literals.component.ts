import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-literals',
  templateUrl: './literals.component.html',
  styleUrls: ['./literals.component.css']
})
export class LiteralsComponent implements OnInit {

  angularorangeCompanyName: string;
  soacsCompanyName: string;

  welcomeAngularOrange: string;
  welcomeSOACSOrange: string;

  multiLineComment: string;

  constructor() {
    this.initialize();
    this.welcomeAngularOrange = `Welcome to ${this.angularorangeCompanyName}`;
    this.welcomeSOACSOrange = `Welcome to ${this.getCompanyName()}`;
    this.setMultiLine();
  }

  ngOnInit() {
  }

  initialize() {
    this.angularorangeCompanyName = 'AngularOrange.io';
    console.log(`angularorangeCompanyName is set to: ${this.angularorangeCompanyName}`);
    this.soacsCompanyName = 'SoaConsutingServices.com';
    console.log(`soacsCompanyName is set to: ${this.soacsCompanyName}`);
  }

  getCompanyName() {
    return this.soacsCompanyName;
  }

  setMultiLine() {
    this.multiLineComment = `AngularOrange.io is a training site 
                   that helps developers build robust applications for
                   the commercial industry.`;

    console.log('Multiline comment is = ' + this.multiLineComment);
    console.log('Eating the line breaks with next string.');
    console.log(this.printLongLine('continues'));
    console.log(this.printAnotherLongLine());
  }

  printLongLine = val => {
    const singleLineText = `a very long string that just ${val}${''
      } and ${val} and ${val}${''
      } and ${val}`;

    return singleLineText;
  }

  printAnotherLongLine = () => {
    const anotherSingleLineText = `AngularOrange.io is a training site${''
      } that helps developers build robust applications for${''
      } the commercial industry.`;
    return anotherSingleLineText;
  }

}
