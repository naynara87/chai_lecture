/**
 * http를 포함하고 있는 URL인지 검사
 */
export const validateURL = (url: string) => {
  const regex = new RegExp(
    "^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$",
  );
  return regex.test(url);
};
