import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = 'flagstaff';
    config.map([
      { route: '',          name: 'select',     moduleId: 'select',    title: 'select'     },
      { route: 'editor',  name: 'editor',  moduleId: 'editor', title: 'editor'  }
 ]);
}

  constructor(router){
    this.router = router;
    this.expanded = false;
  }

  actiavte(){

  }

  alert(){
    this.shannon = this.message;
  }

}
