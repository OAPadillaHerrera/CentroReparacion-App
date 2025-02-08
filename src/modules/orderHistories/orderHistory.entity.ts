

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from '../orders/Order.entity';

@Entity('orderhistories')
export class OrderHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  event: string;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP', nullable: false })
  dateTime: Date;

  @ManyToOne(() => Order, (order) => order.orderHistories, { eager: true })
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
