import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-scrollpanel',
  templateUrl: './ng-scrollpanel.component.html',
  styleUrls: ['./ng-scrollpanel.component.css']
})
export class NgScrollpanelComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild('content') content?: ElementRef;
  @ViewChild('vscroll') vscroll?: ElementRef;
  @ViewChild('hscroll') hscroll?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.content!.nativeElement.onscroll = this.onScroll
  }

  ngDoCheck(): void {
    if (!this.content) return;

    let displayVerticalScrollbar = this.content?.nativeElement.scrollHeight > this.content?.nativeElement.clientHeight;
    let displayHorizontalScrollbar = this.content?.nativeElement.scrollWidth > this.content?.nativeElement.clientWidth;

    this.turnScrollbarOnAndOff(displayVerticalScrollbar, this.vscroll);
    this.turnScrollbarOnAndOff(displayHorizontalScrollbar, this.hscroll);
  }

  private onScroll = (event: any): void => {
    const number = event.srcElement.scrollTop;
    console.log(event)
    console.log('I am scrolling ' + number);
  }

  private turnScrollbarOnAndOff(display: boolean, scrollbar?: ElementRef) {
    if (display) {
      scrollbar?.nativeElement.setAttribute('style', 'display: block');
    } else if (this.content) {
      scrollbar?.nativeElement.setAttribute('style', 'display: none');
    }
  }

}
