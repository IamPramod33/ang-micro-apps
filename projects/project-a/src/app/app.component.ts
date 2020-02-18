import { Component, Injector, OnInit, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { CoreComponent } from './core/core.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private injector: Injector, private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver, private router: Router) {
    const widgetElement = createCustomElement(CoreComponent, { injector: this.injector });
    customElements.define('app-core', widgetElement);
  }

  ngOnInit() {
    this.router.initialNavigation();
    this.showAsComponent();
  }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent() {
    // Create element
    const popup = document.createElement('app-core');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(CoreComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Add to the DOM
    document.body.appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement() {
    // Create element
    const popupEl: NgElement & WithProperties<CoreComponent> = document.createElement('app-core') as any;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
