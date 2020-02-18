import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang-micro-app';
  config = {
    'projectA': {
      loaded: false,
      path: '/project-a/main.js',
      element: 'project-a'
    },
    'projectB': {
      loaded: false,
      path: '/project-b/main.js',
      element: 'project-b'
    }
  };

  ngOnInit() {
    // this.load('project-a');
  }

  load(name: string) {
    const configItem = this.config[name];
    if (configItem.loaded) { return; }

    const content = document.getElementById('content');
    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    // element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);
  }
  
}
