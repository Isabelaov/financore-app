import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Formik } from 'formik';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces';
import { useAuth } from '../hooks';
import { ContainersStyles, TextStyles } from '../assets/styles';
import { passwordValidationSchema } from '../utils/validation';
import { Button, Input, Loading } from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;

export const ResetPasswordScreen = ({ navigation, route }: Props) => {
  const { email, token } = route.params;

  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (values: { password: string }) => {
    setLoading(true);
    try {
      await resetPassword({ email, token, password: values.password });
      Alert.alert('Success', 'Password reset successful');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Error :c', error.response?.data?.message || error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={ContainersStyles.centered}>
      <Text style={TextStyles.title}>Reset Password</Text>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={passwordValidationSchema}
        onSubmit={handleResetPassword}>
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
              placeholder="New password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={touched.password ? errors.password : undefined}
            />

            <Input
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={
                touched.confirmPassword ? errors.confirmPassword : undefined
              }
            />

            {loading ? (
              <Loading />
            ) : (
              <Button text="Send" onPress={() => handleSubmit()} />
            )}
          </>
        )}
      </Formik>
    </View>
  );
};
