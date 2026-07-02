import { Board, OrdersContainer } from './styles';
import type { Order } from '../../types/Order';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}
export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  console.log('orders ', orders)
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <small>(1)</small>
      </header>
      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 1</strong>
          <span>2 itens</span>
        </button>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}