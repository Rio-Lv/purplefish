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

export const split_entities = (list) => {
  const array = [];
  const endpoints = get_endpoints(list);
  array.push(endpoints);
  for (let i = 0; i < endpoints.length; i++) {
    const dependents = get_specific_dependents(list, endpoints[i].id);
    array.push(dependents);
  }
  return array;
};
