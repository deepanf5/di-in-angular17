
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App_config, AppConfigs } from './components/inject-config/inject.token';
import { InjectConfigComponent } from './components/inject-config/inject-config.component';
import { InjectComponent } from './components/inject/inject.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { NewInjectComponent } from './components/new-inject/new-inject.component';

const config:AppConfigs =  {
  apiEndPoint:"https://jsonplaceholder.typicode.com/users",
  theme:"dark",
  cachetime:4000
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InjectConfigComponent,InjectComponent,ConstructorComponent,NewInjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    {
      provide:App_config,
      useValue:{log:(mes:string) => console.log(mes)}
    }
  ]
})
export class AppComponent {
  title = 'DI-in-17';
}
