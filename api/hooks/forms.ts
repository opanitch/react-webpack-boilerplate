import { useEffect, useState } from 'react';

import * as STATUSES from 'CONSTANTS/status';

type Statuses = UnionOf<typeof STATUSES>;

export const useFormStatus = (): Statuses => {
  const [formStatus, setFormStatus] = useState(STATUSES.EMPTY);

  useEffect(() => {
    const updateFormStatus = ({ detail }: CustomEvent) => {
      const { status } = detail;

      setFormStatus(status);
    };

    window.addEventListener('formStatus', (e) =>
      updateFormStatus(e as CustomEvent)
    );

    return () =>
      window.removeEventListener('formStatus', (e) =>
        updateFormStatus(e as CustomEvent)
      );
  }, []);

  return formStatus as Statuses;
};

export const createFormStatusEvent = (status: Statuses): CustomEvent => {
  return new CustomEvent('formStatus', { detail: { status } });
};
