import { LoggerService } from './../../services/logger.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-inject',
  standalone: true,
  imports: [],
  templateUrl: './inject.component.html',
  styleUrl: './inject.component.css'
})
export class InjectComponent {

  constructor(@Inject(LoggerService) private logger:LoggerService){
    this.logger.log('inject component is initalized')
  }

}
