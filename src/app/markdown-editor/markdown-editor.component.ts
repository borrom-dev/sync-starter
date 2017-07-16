import {Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
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
  htmlPreview: any;
  _markdownValue: any;
  _renderMarkTimeout: any;
  _markedOpt: any;


  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    let markedRender = new marked.Renderer();
    markedRender.code = (code: any, language: any) => {
      let validLang = !!(language && hljs.getLanguage(language));
      let highlighted = validLang ? hljs.highlight(language, code).value : code;
      return `<pre style="padding: 0; border-radius: 0;"><code class="hljs ${language}">${highlighted}</code></pre>`;
    };
    markedRender.table = (header: string, body: string) => {
      return `<table class="ui celled table">\n<thead>\n${header}</thead>\n<tbody>\n${body}</tbody>\n</table>\n`;
    };

    this._markedOpt = {
      renderer: markedRender,
      highlight: (code: any) => hljs.highlightAuto(code).value
    };

    const editor = this.aceEditorContainer.nativeElement;
    this.editor = ace.edit(editor);
    this.editor.$blockScrolling = Infinity;
    this.editor.setTheme("ace/theme/tomorrow");
    this.editor.session.setMode("ace/mode/html");
    this.editor.getSession().setValue(this.markdownValue);
    this.editor.on("change", (e: any) => {
      this.markdownValue = this.editor.getValue();
    });
    this.loadJquery();
  }

  set markdownValue(value: any) {
    this._markdownValue = value;
    if (value !== null && value !== undefined) {
      if (this._renderMarkTimeout) clearTimeout(this._renderMarkTimeout);
      this._renderMarkTimeout = setTimeout(() => {
        let html = marked(this._markdownValue || '', this._markedOpt);
        this.htmlPreview = this.domSanitizer.bypassSecurityTrustHtml(html);
      }, 100);
    }
  }

  loadJquery() {
    $('.menu .item').tab();
    $('.selection').dropdown();
  }

  get markdownValue(): any {
    return this._markdownValue || '';
  }

  insertContent(type: string) {
    if (!this.editor) return;
    let selectedText = this.editor.getSelectedText();
    let isSeleted = !!selectedText;
    let startSize = 2;
    let initText: string = '';
    let range = this.editor.selection.getRange();
    switch (type) {
      case 'Bold':
        initText = 'Bold Text';
        selectedText = `**${selectedText || initText}**`;
        break;
      case 'Italic':
        initText = 'Italic Text';
        selectedText = `*${selectedText || initText}*`;
        startSize = 1;
        break;
      case 'Heading':
        initText = 'Heading';
        selectedText = `# ${selectedText || initText}`;
        break;
      case 'Quote':
        initText = 'Quote';
        selectedText = `> ${selectedText || initText}`;
        break;
      case 'Link':
        selectedText = `[](http://)`;
        startSize = 1;
        break;
      case 'Image':
        selectedText = `![](http://)`;
        break;
      case 'Ul':
        selectedText = `- ${selectedText || initText}`;
        break;
      case 'Ol':
        selectedText = `1. ${selectedText || initText}`;
        startSize = 3;
        break;
      case 'Code':
        initText = 'Source Code';
        selectedText = "```language\r\n" + (selectedText || initText) + "\r\n```";
        startSize = 3;
        break;
    }
    this.editor.session.replace(range, selectedText);
    if (!isSeleted) {
      range.start.column += startSize;
      range.end.column = range.start.column + initText.length;
      this.editor.selection.setRange(range);
    }
    this.editor.focus();
  }
}
