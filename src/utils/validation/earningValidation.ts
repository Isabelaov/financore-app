import * as Yup from 'yup';

export const earningValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  generalAmount: Yup.number()
    .required('Amount is required')
    .positive('Must be positive'),
});
