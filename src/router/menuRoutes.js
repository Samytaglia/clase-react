import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";

export const routes = [
    {
        id: "list",
        path:"/" ,
        Element: ItemListContainer,
    },
    {
        id: "category",
        path:"/category/:categoryName",
        Element: ItemListContainer,
    },
    {
        id: "detail",
        path:"/detail/:id" ,
        Element: ItemDetailContainer,
    },
    {
        id: "cart",
        path:"/cart" ,
        Element: CartContainer,
    },
    {
        id: "checkout",
        path:"/checkout" ,
        Element: CheckoutContainer,
    }
];