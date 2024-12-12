export type RootStackParamList = {
  Register: any;
  Login: undefined;
  ForgotPassword: undefined;

  ViewEarning: { id: string };
  EarningsSummary: undefined;
  CreateEditEarning: { id?: string };
  BudgetSummary: undefined;
  CreateEditBudget: { id?: string };
  ViewBudget: { id: string };
};
