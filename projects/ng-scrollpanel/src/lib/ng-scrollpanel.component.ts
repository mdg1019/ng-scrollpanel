import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-scrollpanel',
  templateUrl: './ng-scrollpanel.component.html',
  styleUrls: ['./ng-scrollpanel.component.scss']
})
export class NgScrollpanelComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild('content') content?: ElementRef;
  @ViewChild('vscroll') vscroll?: ElementRef;
  @ViewChild('hscroll') hscroll?: ElementRef;

  @Input() vScrollbarClass: string = '';
  @Input() vTrackClass: string = '';
  @Input() vThumbClass: string = '';
  @Input() hScrollbarClass: string = '';
  @Input() hTrackClass: string = '';
  @Input() hThumbClass: string = '';

  private _x = 0;
  private _y = 0;
  private _mouseDown = false;


  vScrollThumbTop = '0px';
  vScrollThumbHeight = '0%';
  hScrollThumbLeft = '0px';
  hScrollThumbWidth = '0%';

  constructor() {}

  ngOnInit(): void {
    window.onmouseup = (event) => {
      if (this._mouseDown) {
        this._mouseDown = false;
      }
    };
  }

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

  onVScrollMouseDown(event: MouseEvent) {
    this._y = event.clientY;
    this._mouseDown = true;
  }

  onVScrollMouseMove(event: MouseEvent) {
    if (!this._mouseDown) return;

    const dy = (event.clientY - this._y) * 8;
    this._y = event.clientY;
    this.content!.nativeElement.scrollTop = this.content?.nativeElement.scrollTop + dy;
  }

  onVScrollMouseUp(event: MouseEvent) {
    this._mouseDown = false;
  }

  onHScrollMouseDown(event: MouseEvent) {
    this._x = event.clientX;
    this._mouseDown = true;
  }

  onHScrollMouseMove(event: MouseEvent) {
    if (!this._mouseDown) return;

    const dx = (event.clientX - this._x) * 8;
    this._x = event.clientX;
    this.content!.nativeElement.scrollLeft = this.content?.nativeElement.scrollLeft + dx;
  }

  onHScrollMouseUp(event: MouseEvent) {
    this._mouseDown = false;
  }

  onVTrackClicked(event: MouseEvent) {
    const { x, y } = this.getMouseClickRelativeCoordinates(event);
    const percentOfContent = (y - this.getVScrollThumbHeight() / 2) / this.vscroll?.nativeElement.clientHeight;
    const newTop = this.content?.nativeElement.scrollHeight * percentOfContent;
    this.content!.nativeElement.scrollTop = newTop;
  }

  onHTrackClicked(event: MouseEvent) {
    const { x, y } = this.getMouseClickRelativeCoordinates(event);
    const percentOfContent = (x - this.getHScrollThumbWidth() / 2) / this.hscroll?.nativeElement.clientWidth;
    const newLeft = this.content?.nativeElement.scrollWidth * percentOfContent;
    this.content!.nativeElement.scrollLeft =  newLeft;
  }

  private onScroll = (event: any): void => {
    const thumbTop = (event.srcElement.scrollTop / this.content?.nativeElement.scrollHeight) * this.content?.nativeElement.clientHeight;
    this.vScrollThumbTop = `${thumbTop}px`;

    const thumbLeft = (event.srcElement.scrollLeft / this.content?.nativeElement.scrollWidth) * this.content?.nativeElement.clientWidth;
    this.hScrollThumbLeft = `${thumbLeft}px`;
  }

  private turnScrollbarOnAndOff(display: boolean, scrollbar?: ElementRef) {
    if (display) {
      scrollbar?.nativeElement.setAttribute('style', 'display: block');
    } else if (this.content) {
      scrollbar?.nativeElement.setAttribute('style', 'display: none');
    }
  }

  private getMouseClickRelativeCoordinates(event: any) {
    let boundingClientRect = event.target.getBoundingClientRect();

    return {
      x: event.clientX - boundingClientRect.left,
      y: event.clientY - boundingClientRect.top
    };
  }

  private getVScrollThumbHeight() {
    const inPercent = +this.vScrollThumbHeight.slice(0, -1);
    return this.vscroll?.nativeElement.clientHeight * inPercent / 100;
  }

  private getHScrollThumbWidth() {
    const inPercent = +this.hScrollThumbWidth.slice(0, -1);
    return this.hscroll?.nativeElement.clientWidth * inPercent / 100;
  }
}
