import React, { FunctionComponent } from 'react';

import { FormProps, FormStateProps } from '../types';

const FormSuccess: FunctionComponent<FormStateProps> = ({
  viewState,
}: FormStateProps<FormProps>) => {
  return <div className="my-3">EMPTY</div>;
};

export default FormSuccess;
