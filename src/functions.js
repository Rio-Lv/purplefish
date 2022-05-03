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

export const splitBy2 = (entity) => {
  let clones = [];
  const copy = entity;

  return [clones];
};

const test_tubes = [
  {
    uuid: "askdjfsjhgao",
    name: "t1",
    description: "test tube",
  },
  {
    uuid: "ashgao",
    name: "t2",
    description: "test tube",
  },
  {
    uuid: "ask1234jhgao",
    name: "t3",
    description: "test tube",
  },
  {
    uuid: "ask124jhgao",
    name: "t4",
    description: "test tube",
  },
];
const enzymes = [
  {
    uuid: "f392j9",
    name: "e1",
    description: "an enzyme",
  },
  {
    uuid: "f39fasiu2j9",
    name: "e2",
    description: "an enzyme",
  },
  {
    uuid: "f392659458j9",
    name: "e3",
    description: "an enzyme",
  },
];

export const digest = (test_tube, enzyme) => {
  return {
    name: test_tube.name + "",
    description: test_tube.name + " undergoes digestion using " + enzyme.name,
    ingredients: [test_tube.uuid, enzyme.uuid],
  };
};

export const digestMany = (test_tubes, enzyme) => {
  const array = [];
  for (let i = 0; i < test_tubes.length; i++) {
    array.push(digest(test_tubes[i], enzyme));
  }
  return array;
};

export const setEnzymes = (enzymes, test_tubes) => {
  const array = [];
  for (let i = 0; i < enzymes.length; i++) {
    array.push(digestMany(test_tubes, enzymes[i]));
  }
  return array;
};
