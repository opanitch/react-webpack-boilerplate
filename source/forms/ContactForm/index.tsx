import { FormSwitcher } from 'Components/Form/FormStateHandler';

import EditContactForm from './states/EditForm';

const ContactForm = FormSwitcher({
  FormEdit: EditContactForm,
});

export default ContactForm;
