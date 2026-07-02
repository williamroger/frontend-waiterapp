import { Container } from './styles';

import { OrdersBoard } from '../OrdersBoard';
import type { Order } from '../../types/Order';

const orders: Order[] = [
  {
    "_id": "6a45bc2beb019d2620621368",
    "table": "2",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Quatro Queijos",
          "imagePath": "1781930480149-pizza-quatro-queijos.jpg",
          "price": 40
        },
        "quantity": 2,
        "_id": "6a45bc2beb019d2620621369"
      },
      {
        "product": {
          "name": "Coca-Cola lata",
          "imagePath": "1782358438473-coca-cola.webp",
          "price": 7,
        },
        "quantity": 2,
        "_id": "6a45bc2beb019d262062136a"
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  )
}