import React, { FunctionComponent } from 'react';

import { FormProps, FormStateProps } from '../types';

const FormFailure: FunctionComponent<FormStateProps> = ({
  viewState,
}: FormStateProps<FormProps>) => {
  return <div className="my-3">FAILURE</div>;
};

export default FormFailure;
