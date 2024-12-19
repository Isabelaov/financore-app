export interface IEarning {
  id?: string;
  name: string;
  generalAmount: number | string;
  amountBudgeted?: number | string;
  startDate: string;
  endDate: string;
}
