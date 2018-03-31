import {FORM_CHANGED} from '@angular-redux/form';


export const initialValues = (formPath: string[], value: {}) => ({
type: FORM_CHANGED,
  payload: {
    path: formPath,
    value
  }
});
