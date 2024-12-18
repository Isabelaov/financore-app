import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { RootStackParamList } from '../interfaces';
import { useAuth } from '../hooks';
import { loginValidationSchema } from '../utils/validation/loginValidation';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ContainersStyles } from '../assets/styles/Containers.styles';
import { FormStyles, TextStyles } from '../assets/styles';
import { Anchor, Loading } from '../components';

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

      navigation.replace('Login', { screen: 'EarningsSummary' });
    } catch (error: any) {
      Alert.alert('Error', String(error));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={FormStyles.container}>
      <Text style={TextStyles.title}>
        Welcome <Text style={TextStyles.titleSecondary}>Back!</Text>
      </Text>
      {loading || submitting ? (
        <Loading />
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
                onBlur={handleBlur('email')}
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

              <View style={ContainersStyles.bySide}>
                <Button text="Log In" onPress={() => handleSubmit()} />

                <Button
                  text="Register"
                  backgroundPrimary={false}
                  onPress={() => navigation.navigate('Register')}
                />
              </View>

              <Anchor
                text="Forgot Password?"
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            </>
          )}
        </Formik>
      )}
    </View>
  );
};
