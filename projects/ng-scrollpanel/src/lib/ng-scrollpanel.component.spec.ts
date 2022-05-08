import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScrollpanelComponent } from './ng-scrollpanel.component';

@Component({
  template: `
  <div class="scrollpanel-container">
    <ng-scrollpanel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quam viverra orci sagittis eu volutpat. Praesent tristique magna sit amet purus gravida quis
        blandit. Pellentesque id nibh tortor id aliquet lectus. Elementum nibh tellus molestie nunc non blandit massa
        enim. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lacus vel facilisis volutpat est velit
        egestas dui id. Morbi quis commodo odio aenean sed. Nam aliquam sem et tortor consequat. Tincidunt augue interdum
        velit euismod in. Nunc lobortis mattis aliquam faucibus purus in. Faucibus vitae aliquet nec ullamcorper.
      </p>
      <br>
      <p [ngClass]="{ 'nowrap' : displayHorizontalScrollbar }">
        Convallis posuere morbi leo urna molestie at elementum eu. A cras semper auctor neque vitae tempus quam
        pellentesque nec. Semper auctor neque vitae tempus quam pellentesque. Quam nulla porttitor massa id neque aliquam.
        Ac odio tempor orci dapibus. Egestas sed sed risus pretium quam vulputate. Augue eget arcu dictum varius duis at
        consectetur lorem donec. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Iaculis eu non diam
        phasellus vestibulum. Amet tellus cras adipiscing enim eu turpis. Egestas erat imperdiet sed euismod nisi porta.
        Morbi tristique senectus et netus et malesuada. Eu nisl nunc mi ipsum faucibus vitae. Molestie nunc non blandit
        massa enim nec dui nunc mattis. Pretium quam vulputate dignissim suspendisse. Blandit cursus risus at ultrices. In
        ante metus dictum at tempor commodo ullamcorper.
      </p>
      <br>
      <p>
        In nisl nisi scelerisque eu ultrices vitae auctor eu. Quam nulla porttitor massa id neque. Et tortor at risus
        viverra adipiscing at. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Proin sed
        libero enim sed faucibus turpis in. Massa sed elementum tempus egestas. Id leo in vitae turpis. Amet facilisis
        magna etiam tempor orci eu. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio facilisis mauris
        sit amet massa vitae. Risus quis varius quam quisque id. Lacus vel facilisis volutpat est velit egestas. Aenean
        vel elit scelerisque mauris pellentesque. Aliquet bibendum enim facilisis gravida neque convallis. Mi sit amet
        mauris commodo. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Mattis aliquam faucibus purus in massa
        tempor nec feugiat. Orci sagittis eu volutpat odio facilisis mauris sit amet. Amet porttitor eget dolor morbi non
        arcu risus.
      </p>
      <br>
      <div *ngIf="displayVerticalScrollbar">
        <p>
          Ullamcorper sit amet risus nullam eget felis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh
          sit. Risus nullam eget felis eget nunc lobortis. Malesuada nunc vel risus commodo viverra. Nascetur ridiculus mus
          mauris vitae ultricies leo. Congue quisque egestas diam in. Vitae aliquet nec ullamcorper sit amet risus nullam
          eget. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Ut faucibus pulvinar elementum integer enim
          neque. Eu facilisis sed odio morbi quis. Scelerisque mauris pellentesque pulvinar pellentesque. Amet aliquam id
          diam maecenas ultricies mi eget. Quam nulla porttitor massa id neque aliquam vestibulum. Convallis tellus id
          interdum velit laoreet id. Et malesuada fames ac turpis egestas integer eget. Leo a diam sollicitudin tempor. Sed
          cras ornare arcu dui vivamus arcu felis bibendum ut. Ut sem viverra aliquet eget sit amet tellus cras adipiscing.
          Semper auctor neque vitae tempus quam pellentesque nec. Dapibus ultrices in iaculis nunc sed augue lacus viverra.
        </p>
        <br>
        <p>
          Lobortis mattis aliquam faucibus purus in massa. Purus viverra accumsan in nisl. Auctor augue mauris augue neque
          gravida in fermentum et sollicitudin. A diam maecenas sed enim ut sem. Mauris pellentesque pulvinar pellentesque
          habitant morbi. Justo laoreet sit amet cursus sit amet dictum. Sit amet purus gravida quis blandit turpis cursus
          in hac. Id eu nisl nunc mi ipsum faucibus vitae. In metus vulputate eu scelerisque felis imperdiet proin. Etiam
          erat velit scelerisque in dictum non consectetur. Non arcu risus quis varius. Volutpat diam ut venenatis tellus
          in. At imperdiet dui accumsan sit amet nulla. Magna etiam tempor orci eu lobortis elementum. Pellentesque nec nam
          aliquam sem et tortor consequat. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
        </p>
      </div>
    </ng-scrollpanel>
  </div>
  `,
  styles: [
  `.scrollpanel-container {
    width: 768px;
    height: 600px;
  }
  `,
  `
  .nowrap  {
    white-space: nowrap;
  }
  `]
})
class WrapperComponent implements OnInit {
  @ViewChild(NgScrollpanelComponent, { static: true }) ngScrollPanel?: NgScrollpanelComponent;
  displayVerticalScrollbar?: boolean;
  displayHorizontalScrollbar?: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setDisplayVerticalScrollbar(false);
    this.setDisplayHorizontalScrollbar(false);
  }

  setDisplayVerticalScrollbar(value: boolean) {
    this.displayVerticalScrollbar = value;
    this.changeDetectorRef.detectChanges();
  }

  setDisplayHorizontalScrollbar(value: boolean) {
    this.displayHorizontalScrollbar = value;
    this.changeDetectorRef.detectChanges();
  }
}

describe('NgScrollpanelComponent', () => {
  let wrapperComponent: WrapperComponent;
  let component: NgScrollpanelComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        WrapperComponent,
        NgScrollpanelComponent
      ]
    })
    .overrideComponent(NgScrollpanelComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapperComponent = fixture.componentInstance;
    component = wrapperComponent.ngScrollPanel as any;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(wrapperComponent).toBeTruthy();
  });

  it('should display neither scrollbar when necessary', () => {
    let isVerticalScrollbarDisplayed = window.getComputedStyle(component.vscroll?.nativeElement).getPropertyValue('display');
    let isHorizontalScrollbarDisplayed = window.getComputedStyle(component.hscroll?.nativeElement).getPropertyValue('display');

    expect(isVerticalScrollbarDisplayed).toEqual('none');
    expect(isHorizontalScrollbarDisplayed).toEqual('none');
  });

  it('should display a vertical scrollbar when necessary', () => {
    wrapperComponent.setDisplayVerticalScrollbar(true);
    fixture.detectChanges();

    let isVerticalScrollbarDisplayed = window.getComputedStyle(component.vscroll?.nativeElement).getPropertyValue('display');
    let isHorizontalScrollbarDisplayed = window.getComputedStyle(component.hscroll?.nativeElement).getPropertyValue('display');

    expect(isVerticalScrollbarDisplayed).toEqual('block');
    expect(isHorizontalScrollbarDisplayed).toEqual('none');
  });

  it('should display a horizontal scrollbar when necessary', () => {
    wrapperComponent.setDisplayHorizontalScrollbar(true);
    fixture.detectChanges();

    let isVerticalScrollbarDisplayed = window.getComputedStyle(component.vscroll?.nativeElement).getPropertyValue('display');
    let isHorizontalScrollbarDisplayed = window.getComputedStyle(component.hscroll?.nativeElement).getPropertyValue('display');

    expect(isVerticalScrollbarDisplayed).toEqual('none');
    expect(isHorizontalScrollbarDisplayed).toEqual('block');
  });

  it('should display both scrollbars when necessary', () => {
    wrapperComponent.setDisplayVerticalScrollbar(true);
    wrapperComponent.setDisplayHorizontalScrollbar(true);
    fixture.detectChanges();

    let isVerticalScrollbarDisplayed = window.getComputedStyle(component.vscroll?.nativeElement).getPropertyValue('display');
    let isHorizontalScrollbarDisplayed = window.getComputedStyle(component.hscroll?.nativeElement).getPropertyValue('display');

    expect(isVerticalScrollbarDisplayed).toEqual('block');
    expect(isHorizontalScrollbarDisplayed).toEqual('block');
  });
});
