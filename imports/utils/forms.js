export const formEventToData = (e) => {
  const formData = new FormData(e.target);

  const data = {};
  for (let field of formData) {
    const [key, value] = field;
    data[key] = value;
  }

  return data;
};
