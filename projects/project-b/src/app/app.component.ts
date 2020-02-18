import { Component, OnInit, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private injector: Injector, private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver, private router: Router) {

  }

  ngOnInit() {
    this.router.initialNavigation();
  }
}
