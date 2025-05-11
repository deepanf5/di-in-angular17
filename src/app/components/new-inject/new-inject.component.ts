import { App_config, AppConfigs } from './../inject-config/inject.token';
import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-new-inject',
  standalone: true,
  imports: [],
  templateUrl: './new-inject.component.html',
  styleUrl: './new-inject.component.css'
})
export class NewInjectComponent implements OnInit{
  private logger = inject(LoggerService)

  // constructor(private logger:LoggerService){}
  ngOnInit(): void {
    this.logger.log("new injector component")
    
  }
   


}
