import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { RootStackParamList } from '../interfaces';
import { useAuth } from '../hooks';
import { Button, Input } from '../components';
import { ContainersStyles, TextStyles } from '../assets/styles';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword'
>;

interface Props {
  navigation: ForgotPasswordScreenNavigationProp;
}

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const { forgotPassword } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleForgotPassword = async (values: { email: string }) => {
    try {
      await forgotPassword(values.email);
      Alert.alert(
        'Email sent',
        'Check your email for password reset instructions',
      );
      navigation.navigate('ValidateCode', { email: values.email });
    } catch (error: any) {
      if (error.status === 404) {
        Alert.alert('Email not found', 'Please check your email and try again');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={ContainersStyles.centered}>
      <Text style={TextStyles.title}>Recover Password</Text>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleForgotPassword}>
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

            <View style={ContainersStyles.bySide}>
              <Button
                text="Send"
                backgroundPrimary={true}
                onPress={() => handleSubmit()}
              />

              <Button
                text="Log In"
                backgroundPrimary={false}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
