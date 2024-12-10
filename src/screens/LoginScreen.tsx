import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { RootStackParamList } from '../interfaces';
import { useAuth } from '../hooks';
import { baseColors } from '../assets/colors/baseColors';
import { loginValidationSchema } from '../utils/validation/loginValidation';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ContainersBySideStyles } from '../assets/styles/ContainersBySide.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: NavigationProp;
}

export const LoginScreen = ({ navigation }: Props) => {
  const { login, loading } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (values: { email: string; password: string }) => {
    setSubmitting(true);
    try {
      await login(values.email, values.password);
      navigation.replace('EarningsSummary');
    } catch (error: any) {
      Alert.alert('Error', String(error));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View>
      <Text>Log In</Text>
      {loading || submitting ? (
        <ActivityIndicator size="large" color={baseColors.primary} />
      ) : (
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Input
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                error={touched.email ? errors.email : undefined}
              />

              <Input
                placeholder="Password"
                secureTextEntry
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                error={touched.password ? errors.password : undefined}
              />

              <View style={ContainersBySideStyles.container}>
                <Button text="Log In" onPress={() => handleSubmit} />

                <Button
                  text="Register"
                  onPress={() => navigation.navigate('Register')}
                />
              </View>
            </>
          )}
        </Formik>
      )}
    </View>
  );
};
