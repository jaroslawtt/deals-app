type DealGetAllItemResponseDto = {
  id: number;
  name: string;
  price: number;
  ticketPrice: number;
  yieldPercentage: number;
  daysRemaining: number;
  percentageSold: number;
  imageLink: string | null;
};

export { type DealGetAllItemResponseDto };
