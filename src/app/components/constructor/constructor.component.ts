import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-constructor',
  standalone: true,
  imports: [],
  templateUrl: './constructor.component.html',
  styleUrl: './constructor.component.css'
})
export class ConstructorComponent {

  constructor(private loggerService:LoggerService){
    this.loggerService.log("constructor component is initalized")
  }

}
