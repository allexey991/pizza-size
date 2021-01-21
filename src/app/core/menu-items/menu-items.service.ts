import { Injectable } from '@angular/core';
import {IMenuItem} from '../model-interfaces/menu-item/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  constructor(private menuItemService: MenuItemsService) { }

  getMenuItems(): IMenuItem[] {
    return this.menuItemService.getMenuItems();
  }
}
