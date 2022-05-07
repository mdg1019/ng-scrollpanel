import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-scrollpanel',
  templateUrl: './ng-scrollpanel.component.html',
  styleUrls: ['./ng-scrollpanel.component.css']
})
export class NgScrollpanelComponent implements OnInit, AfterViewInit {
  @ViewChild('content') content?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('content:', this.content)
    this.content!.nativeElement.onscroll = this.onScroll
  }

  onScroll = (event: any): void => {
    const number = event.srcElement.scrollTop;
    console.log(event)
    console.log('I am scrolling ' + number);
  }

}
