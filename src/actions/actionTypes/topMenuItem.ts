import TopItem from "../../entities/topMenuItem";

export const GET_MENU_ITEMS = "GET_MENU_ITEMS";

export interface ITopMenuItemsTypes{
    GET_MENU_ITEMS: {
        data: {
            date: TopItem;
        }
    }
}