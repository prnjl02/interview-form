import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
declare let jspdf;

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalComponent implements OnInit {
  Id;
  Name;
  Post;
  Ratings = [
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' },
    { id: '4', name: '4' },
    { id: '5', name: '5' }
  ]
  constructor() {

  }
  @ViewChild('content') content: ElementRef;

  public downloadPDF(formValues) {
    alert(JSON.stringify(formValues))

    console.log(this.Name);

    console.log('this is post', this.Post)


    let doc = new jsPDF();

    let specialElementHandlers = {

      'editor': function (element, renderer) {

        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   'width': 190,
    //   'elementHandlers': specialElementHandlers
    // });

    doc.save('form.pdf');

  }

  // log(x){
  //   console.log(x);
  // }
  ngOnInit() {

  }

}


