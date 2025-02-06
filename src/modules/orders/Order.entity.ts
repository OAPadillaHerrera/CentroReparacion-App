import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/User.entity';
import { OrderHistory } from '../orderHistories/OrderHistory.entity';
import { Payment } from '../payments/Payment.entity';
import { Notification } from '../notifications/Notification.entity';
import { Evidence } from '../evidences/Evidence.entity';

@Entity({
  name: 'orders',
})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'userId' })
  userId: string;

  @Column()
  clientEmail: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  clientDni: number;

  @ManyToOne(() => User, (user) => user.order, { eager: true })
  user: User;

  @OneToMany(() => OrderHistory, (orderHistory) => orderHistory.order)
  orderHistories: OrderHistory[];

  @OneToMany(() => Notification, (notification) => notification.order)
  notifications: Notification[];

  @OneToMany(() => Evidence, (evidence) => evidence.order)
  evidences: Evidence[];

  @OneToOne(() => Payment, (payment) => payment.order)
  payment: Payment;
}
