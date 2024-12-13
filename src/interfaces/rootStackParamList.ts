export type RootStackParamList = {
  Register: any;
  Login: any;
  ForgotPassword: undefined;

  ViewEarning: { id: string };
  EarningsSummary: undefined;
  CreateEditEarning: { id?: string };
  BudgetSummary: undefined;
  CreateEditBudget: { id?: string };
  ViewBudget: { id: string };
};
