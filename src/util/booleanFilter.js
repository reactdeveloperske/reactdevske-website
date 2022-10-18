// A function to filter tailwindcss utilities depending on the value of a boolean property

export const booleanFilter = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
