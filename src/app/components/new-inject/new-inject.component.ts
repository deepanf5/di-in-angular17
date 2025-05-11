import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-new-inject',
  standalone: true,
  imports: [],
  templateUrl: './new-inject.component.html',
  styleUrl: './new-inject.component.css'
})
export class NewInjectComponent implements OnInit{
  private logger = Inject(LoggerService)

    ngOnInit(): void {
      this.logger.console.log("new inject component is initalized");
    }

}
