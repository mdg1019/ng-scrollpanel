import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-scrollpanel',
  templateUrl: './ng-scrollpanel.component.html',
  styleUrls: ['./ng-scrollpanel.component.scss']
})
export class NgScrollpanelComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild('content') content?: ElementRef;
  @ViewChild('vscroll') vscroll?: ElementRef;
  @ViewChild('hscroll') hscroll?: ElementRef;

  vScrollThumbTop = '0px';
  vScrollThumbHeight = '0%';
  hScrollThumbLeft = '0px';
  hScrollThumbWidth = '0%';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.content!.nativeElement.onscroll = this.onScroll;
  }

  ngDoCheck(): void {
    if (!this.content) return;

    let displayVerticalScrollbar = this.content?.nativeElement.scrollHeight > this.content?.nativeElement.clientHeight;
    let displayHorizontalScrollbar = this.content?.nativeElement.scrollWidth > this.content?.nativeElement.clientWidth;

    this.turnScrollbarOnAndOff(displayVerticalScrollbar, this.vscroll);
    this.turnScrollbarOnAndOff(displayHorizontalScrollbar, this.hscroll);

    if (displayVerticalScrollbar) {
      const thumbHeight = (this.content?.nativeElement.clientHeight / this.content?.nativeElement.scrollHeight) * 100;
      this.vScrollThumbHeight = `${thumbHeight}%`;
    }

    if (displayHorizontalScrollbar) {
      const thumbWidth = (this.content?.nativeElement.clientWidth / this.content?.nativeElement.scrollWidth) * 100;
      this.hScrollThumbWidth = `${thumbWidth}%`;
    }
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
