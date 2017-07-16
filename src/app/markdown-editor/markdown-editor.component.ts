import {Component, OnInit, ViewChild} from '@angular/core';
declare let ace: any;
declare let $: any;
declare let marked: any;
declare let hljs: any;

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css']
})
export class MarkdownEditorComponent implements OnInit {
  @ViewChild('editor') aceEditorContainer;
  editor: any;
  _markdownValue: any;

  ngOnInit(): void {
    const editor = this.aceEditorContainer.nativeElement;
    this.editor = ace.edit(editor);
    this.editor.$blockScrolling = Infinity;
    this.editor.getSession().setUseWrapMode(true);
    this.editor.getSession().setValue(this.markdownValue);
    this.loadJquery();
  }

  loadJquery() {
    $('.menu .item').tab();
    $('.selection').dropdown();
  }

  get markdownValue(): any {
    return this._markdownValue || '';
  }
}
