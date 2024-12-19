export type RootStackParamList = {
  Register: any;
  Login: any;
  ForgotPassword: undefined;
  ValidateCode: { email: string };
  ResetPassword: { email: string; token: string };

  Home: undefined;
  ViewEarning: { id: string };
  CreateEditEarning: { id?: string };
  BudgetSummary: undefined;
  CreateEditBudget: { id?: string };
  ViewBudget: { id: string };
};
