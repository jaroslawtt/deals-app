import { IEntity } from '~/libs/interfaces/entity.interface.js';

class DealEntity implements IEntity {
  private readonly 'id': number | null;

  private readonly 'name': string | null;

  private readonly 'price': number | null;

  private readonly 'ticketPrice': number | null;

  private readonly 'yieldPercentage': number | null;

  private readonly 'daysRemaining': number | null;

  private readonly 'percentageSold': number | null;

  private readonly 'imageLink': string | null;

  private constructor({
    id,
    name,
    price,
    ticketPrice,
    yieldPercentage,
    daysRemaining,
    percentageSold,
    imageLink,
  }: {
    id: number | null;
    name: string | null;
    price: number | null;
    ticketPrice: number | null;
    yieldPercentage: number | null;
    daysRemaining: number | null;
    percentageSold: number | null;
    imageLink: string | null;
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ticketPrice = ticketPrice;
    this.yieldPercentage = yieldPercentage;
    this.daysRemaining = daysRemaining;
    this.percentageSold = percentageSold;
    this.imageLink = imageLink;
  }

  public static initialize({
    id,
    name,
    price,
    ticketPrice,
    yieldPercentage,
    daysRemaining,
    percentageSold,
    imageLink,
  }: {
    id: number | null;
    name: string | null;
    price: number | null;
    ticketPrice: number | null;
    yieldPercentage: number | null;
    daysRemaining: number | null;
    percentageSold: number | null;
    imageLink: string | null;
  }) {
    return new DealEntity({
      id,
      name,
      price,
      ticketPrice,
      yieldPercentage,
      daysRemaining,
      percentageSold,
      imageLink,
    });
  }

  public static initializeNew({
    name,
    price,
    ticketPrice,
    yieldPercentage,
    daysRemaining,
    percentageSold,
    imageLink,
  }: {
    name: string | null;
    price: number | null;
    ticketPrice: number | null;
    yieldPercentage: number | null;
    daysRemaining: number | null;
    percentageSold: number | null;
    imageLink: string | null;
  }) {
    return new DealEntity({
      id: null,
      name,
      price,
      ticketPrice,
      yieldPercentage,
      daysRemaining,
      percentageSold,
      imageLink,
    });
  }

  toNewObject(): {
    name: string;
    price: number;
    ticketPrice: number;
    yieldPercentage: number;
    daysRemaining: number;
    percentageSold: number;
    imageLink: string | null;
  } {
    return {
      name: this.name as string,
      price: this.price as number,
      ticketPrice: this.ticketPrice as number,
      yieldPercentage: this.yieldPercentage as number,
      daysRemaining: this.daysRemaining as number,
      percentageSold: this.percentageSold as number,
      imageLink: this.imageLink as string | null,
    };
  }

  toObject(): {
    id: number;
    name: string;
    price: number;
    ticketPrice: number;
    yieldPercentage: number;
    daysRemaining: number;
    percentageSold: number;
    imageLink: string | null;
  } {
    return {
      id: this.id as number,
      name: this.name as string,
      price: this.price as number,
      ticketPrice: this.ticketPrice as number,
      yieldPercentage: this.yieldPercentage as number,
      daysRemaining: this.daysRemaining as number,
      percentageSold: this.percentageSold as number,
      imageLink: this.imageLink as string | null,
    };
  }
}

export { DealEntity };
