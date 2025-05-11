import { Component, Inject } from '@angular/core';
import { App_config, AppConfigs } from './inject.token';

@Component({
  selector: 'app-inject-config',
  standalone: true,
  imports: [],
  templateUrl: './inject-config.component.html',
  styleUrl: './inject-config.component.css',
  providers:[
    {
      provide:App_config,useValue:{
        apiEndPoint:"https://jsonplaceholder.typicode.com/users",
        theme:"Dark",
        cachetime:60000
      }
    }
  ]
})
export class InjectConfigComponent {

  // Using constructor(@Inject(APP_CONFIG) config: AppConfig) is essential when you need
  //  to inject non-class values (like config objects) using custom tokens.
  //  It supports clean, maintainable, and environment-specific configurations without hardcoding.

  constructor(@Inject(App_config) private config:AppConfigs){
    console.log('Api End Point',this.config.apiEndPoint)
  }

}
