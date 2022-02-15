import { v4 as uuidv4 } from "uuid";

export const clone = (entity, numClones) => {
  let clones = [];
  const copy = (index) => {
    const variation = {
      id: uuidv4(),
      name: `${entity.name}_${index}`,
      ingredients: [entity.id],
      description: `This is a clone of ${entity.name}`,
    };
    return { ...entity, ...variation };
  };

  for (let i = 0; i < numClones; i++) {
    clones.push(copy(i));
  }
  return clones;
};
