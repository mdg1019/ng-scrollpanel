# NgScrollpanel

NgScrollpanel is an angular container component that features customizable scrollbars.

### Adding NgScrollpanel to Your Angular App

NgScrollPanel is added to an Angular app with the following npm command:

```
npm install ng-scrollpanel
```

### Importing NgScrollpanelModule into AppModule

To use NgScrollpanel in your app, you need to import `NgScrollPanelModule` into either `AppModule` or perhaps a more specific feature module. This is how it might look to import it into `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgScrollpanelModule } from 'projects/ng-scrollpanel/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
   NgScrollpanelModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### HTML Markup

As it's name implies, NgScrollpanel is a panel container with automatic scrollbars. It is used in your app's HTML by specfying the `ng-scrollpanel` selector like the following:

```html
<div>
  <ng-scrollpanel>
    <p>The scrollable HTML</p>
    <p>content goes here.</p>
  </ng-scrollpanel>
</div>

```

### Optional Attributes

Either or both of the scrollbars' stylings can be altered using six optional attributes. These attributes are used to pass the name of the CSS classes that will be used to modify the existing stylings. 

| Attribute | Description |
| ---------- | ---------- |
| vScrollbarClass | Defines a custom class for styling the vertical scrollbar's bottom layer. Useful for defining a custom width. |
| vTrackClass | Defines a custom class for styling the vertical scrollbar's track. Useful for setting a custom background color, border, border-radius, shadow, etc. |
| vThumbClass | Defines a custom class for styling the vertical scrollbar's thumb. Useful for setting a custom background color, border, border-radius, shadow, etc. |
| hScrollbarClass | Defines a custom class for styling the horizontal scrollbar's bottom layer. Useful for defining a custom height. |
| hTrackClass | Defines a custom class for styling the horizontal scrollbar's track. Useful for setting a custom background color, border, border-radius, shadow, etc. |
| hThumbClass | Defines a custom class for styling the horizontal scrollbar's thumb. Useful for setting a custom background color, border, border-radius, shadow, etc. |

It is important to note that the custom CSS classes must be defined in a non-component CSS file like `styles.css, styles.scss, etc.` or you must use `encapsulation: ViewEncapsulation.None` in your component's `@Component` decorator. 

When redefining a CSS style that is set inside of the `NgScrollpanelComponent` you must use `!important` to override the default style.
