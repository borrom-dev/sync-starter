import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

declare let marked: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private content: any;

  constructor(private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    let html = marked('# I am using __markdown__.');
    this.content = this._domSanitizer.bypassSecurityTrustHtml(html);
  }

}
