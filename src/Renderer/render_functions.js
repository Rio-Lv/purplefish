export const get_endpoints = (list) => {
  const array = [];
  for (let i = 0; i < list.length; i++) {
    if (!list[i].ingredients) {
      array.push(list[i]);
    }
  }
  return array;
};

export const get_dependents = (list) => {
  const array = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].ingredients) {
      array.push(list[i]);
    }
  }
  return array;
};

export const get_specific_dependents = (list, id) => {
  const array = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].ingredients) {
      if (list[i].ingredients.includes(id)) {
        array.push(list[i]);
      }
    }
  }
  return array;
};

export const get_endpoint_names = (list) => {
  const array = [];
  for (let i = 0; i < list.length; i++) {
    if (!list[i].ingredients) {
      array.push(list[i].name);
    }
  }
  return array;
};

export const get_dependent_names = (list) => {
  const array = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].ingredients) {
      array.push(list[i].name);
    }
  }
  return array;
};

export const get_specific_dependent_names = (list, id) => {
  const array = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].ingredients) {
      if (list[i].ingredients.includes(id)) {
        array.push(list[i].name);
      }
    }
  }
  return array;
};
