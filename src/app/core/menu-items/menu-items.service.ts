import { Injectable } from '@angular/core';
import {IMenuItem} from '../model-interfaces/menu-item/menu-item.interface';
import {MENU_ITEMS_FOR_TEST} from '../dictionary/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  constructor(private menuItemService: MenuItemsService) { }

  getMenuItems(): IMenuItem[] {
    return MENU_ITEMS_FOR_TEST;
  }
}
