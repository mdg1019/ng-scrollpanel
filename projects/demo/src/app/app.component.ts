import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayVerticalScrollbar = true;
  displayHorizontalScrollbar = true;
  isLightMode = false;
  vTrackClass = '';
  vThumbClass = '';
  hTrackClass = '';
  hThumbClass = '';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  toggleVerticalScrolling() {
    this.displayVerticalScrollbar = !this.displayVerticalScrollbar;
    this.changeDetectorRef.detectChanges();
  }

  toggleHorizontalScrolling() {
    this.displayHorizontalScrollbar = !this.displayHorizontalScrollbar;
    this.changeDetectorRef.detectChanges();
  }

  toggleLightDarkMode() {
    this.isLightMode = !this.isLightMode;

    if (this.isLightMode) {
      this.renderer.addClass(document.body, 'theme-light');
      this.vTrackClass = 'theme-light__v-track-class';
      this.vThumbClass = 'theme-light__v-thumb-class';
      this.hTrackClass = 'theme-light__h-track-class';
      this.hThumbClass = 'theme-light__h-thumb-class';
    } else {
      this.renderer.removeClass(document.body, 'theme-light');
      this.vTrackClass = '';
      this.vThumbClass = '';
      this.hTrackClass = '';
      this.hThumbClass = '';
    }

    this.changeDetectorRef.detectChanges();
  }

}
