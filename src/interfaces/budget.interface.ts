export interface IBudget {
  id?: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  categoryId: string;
  earningId: string;
}
