export interface IEarning {
  id?: string;
  name: string;
  generalAmount: number;
  amountBudgeted?: number;
  startDate: Date;
  endDate: Date;
}
