import { Component, OnInit } from '@angular/core';
import {IMenuItem} from '../../core/model-interfaces/menu-item/menu-item.interface';
import {MenuItemsService} from '../../core/menu-items/menu-items.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: IMenuItem[];
  constructor(private menuItemsService: MenuItemsService) { }

  ngOnInit() {
    this.menuItems = this.menuItemsService.getMenuItems();
  }
}
