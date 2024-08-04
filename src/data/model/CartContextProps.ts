import CartItem from "./CartItem";
import { Product } from "./Product";

export interface CartContextProps {
	items: CartItem[];
	itemQuantity: number;
	add: (item: Product) => void;
	sub: (item: Product) => void;
}
