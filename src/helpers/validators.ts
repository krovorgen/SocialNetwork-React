export const required = (value: string) => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLength = (length: number) => (value: string) => {
  if (value.length > length) return `Max length is ${length} symbol`;
  return undefined;
};

export const composeValidators =
  (...validators: any) =>
  (value: string) =>
    validators.reduce((error: string, validator: any) => error || validator(value), undefined);
