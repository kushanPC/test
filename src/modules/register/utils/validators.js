export const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

export const nameValidate = (value) => {
  const reg = /^([а-яё\s]+|[a-z\s]+)$/iu;
  if (value.length > 60) return 'Имя должно содержать меньше 60 символов';
  if (value.length < 2) return 'Имя не может содержать меньше 2 символов';
  if (reg.test(value) === false) return 'лат кир';

  return undefined;
};

export const emailValidate = (value) => {
  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x7f]|\\[\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x21-\x5a\x53-\x7f]|\\[\x7f])+)\])/;
  if (reg.test(value) === false) return 'Введите корректный e-mail';

  return undefined;
};

export const phoneValidate = (value) => {
  const reg = /^[\+]{0,1}380([0-9]{9})$/;
  if (reg.test(value) === false) return 'Введите корректный номерю Например +380 XX XXX XX XX';

  return undefined;
};

export const validateImageFormat = (imageFile) => {
  if (imageFile) {
    const mimeType = 'image/jpeg';
    if (!mimeType.includes(imageFile.type)) {
      return `Image mime type must be ${mimeType}`;
    }
  }
  return undefined;
};

export const validateImageMaxWeight = (maxWeight) => (imageFile) => {
  if (imageFile && imageFile.size) {
    const imageFileKb = imageFile.size / 1024;

    if (imageFileKb > maxWeight) {
      return `Image size must be less or equal to ${maxWeight}kb`;
    }
  }
  return undefined;
};

export const validateImageWidth = (maxWidth, minWidth) => (imageFile) => {
  if (imageFile) {
    if (maxWidth && imageFile.width > maxWidth) {
      return `не шире ${maxWidth}px`;
    }

    if (minWidth && imageFile.width < minWidth) {
      return `не уже ${minWidth}px`;
    }
  }
  return undefined;
};
export const validateImageHeight = (maxHeight, minHeight) => (imageFile) => {
  if (imageFile) {
    if (maxHeight && imageFile.height > maxHeight) {
      return `не віше ${maxHeight}px`;
    }

    if (minHeight && imageFile.height < minHeight) {
      return `не ниже ${minHeight}px`;
    }
  }
  return undefined;
};
