import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { AppService } from './app.service';

import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit{
    private title = 'My First Angular App...';
    private orders: Order[];

    constructor(private appService: AppService) { }

    getOrders(): void {
      this.appService.getOrders().subscribe(data => this.orders = data);
    }

    ngOnInit(): void {
      console.log('Loading data.....');
      this.getOrders();
    }
}
