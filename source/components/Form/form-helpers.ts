import * as NODE_NAMES from 'CONSTANTS/node-names';
import * as REGEX_NAMES from 'CONSTANTS/regex';

type FormValuesType = {
  [key: string]: string;
};

export type FormInputsType = HTMLInputElement | HTMLTextAreaElement;

interface RegexDictionaryEntry {
  flags: string;
  pattern: string;
}

type RegexDictionaryType = Record<string, RegexDictionaryEntry>;

export const RegexDictionary: RegexDictionaryType = {
  /* eslint-disable-next-line */
  [REGEX_NAMES.EMAIL]: {
    flags: 'g',
    pattern: `^([^<>()\\[\\]\\.,;:\\s@"](.[^<>()\\[\\]\\.,;:\\s@"]+)*)@(([a-zA-Z\\-0-9]+)\\.[a-zA-Z]{2,})$`,
  },
  [REGEX_NAMES.NAME]: {
    flags: 'gu',
    pattern: `^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$`,
  },
  /* eslint-disable-next-line */
  [REGEX_NAMES.PHONE]: {
    flags: 'g',
    pattern: `^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$`,
  },
};

export const createRegExp = (key: string, flags = ''): RegExp => {
  if (key.charAt(0) === '/') return new RegExp(key, flags);

  const RegEx = RegexDictionary[key];

  return RegEx && new RegExp(RegEx.pattern, RegEx.flags);
};

export const getFormDefaultValues = (form: HTMLFormElement): FormValuesType => {
  const formInputs = getFormInputs(form) as FormInputsType[];

  // Construct Object of form values based on { `id`: `value` } pairing.
  return formInputs.reduce(
    (values, input) => ({ ...values, [input.id]: input.defaultValue }),
    {}
  );
};

export const getFormInputs = (form: HTMLFormElement): Element[] => {
  const formInputs = Array.from(form.elements).filter((element) => {
    // Filter out all elements that are not Input Types
    return (
      element.nodeName === NODE_NAMES.INPUT ||
      element.nodeName === NODE_NAMES.TEXTAREA
    );
  });

  return formInputs;
};

export const getFormValues = (form: HTMLFormElement): FormValuesType => {
  const formInputs = getFormInputs(form) as FormInputsType[];

  // Construct Object of form values based on { `id`: `value` } pairing.
  return formInputs.reduce(
    (values, input) => ({ ...values, [input.id]: input.value }),
    {}
  );
};

export const getRegExp = (
  entryName: UnionOf<typeof REGEX_NAMES>
): RegexDictionaryEntry => {
  const RegEx = RegexDictionary[entryName];

  return { ...RegEx };
};
