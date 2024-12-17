export type RootStackParamList = {
  Register: any;
  Login: any;
  ForgotPassword: undefined;
  ValidateCode: { email: string };
  ResetPassword: { email: string; token: string };

  ViewEarning: { id: string };
  EarningsSummary: undefined;
  CreateEditEarning: { id?: string };
  BudgetSummary: undefined;
  CreateEditBudget: { id?: string };
  ViewBudget: { id: string };
};
