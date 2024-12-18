import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks';
import {
  BudgetsSummaryScreen,
  CreateEditBudgetScreen,
  CreateEditEarningScreen,
  EarningsSummaryScreen,
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ViewBudgetScreen,
  ViewEarningScreen,
  ValidateCodeScreen,
  ResetPasswordScreen,
} from '../../screens';
import { RootStackParamList } from '../../interfaces';
import { Loading } from '../../components';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="EarningsSummary"
              component={EarningsSummaryScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="CreateEditEarning"
              component={CreateEditEarningScreen}
            />
            <Stack.Screen
              name="BudgetSummary"
              component={BudgetsSummaryScreen}
            />
            <Stack.Screen
              name="CreateEditBudget"
              component={CreateEditBudgetScreen}
            />
            <Stack.Screen name="ViewBudget" component={ViewBudgetScreen} />
            <Stack.Screen name="ViewEarning" component={ViewEarningScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ValidateCode"
              component={ValidateCodeScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
