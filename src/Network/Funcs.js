import styled from "styled-components";
export const numberOfLines = (list) => {
  var numLines = 0;
  for (let i = 0; i < list.length; i++) {
    numLines += list[i].components.length;
  }
  return numLines;
};

export const numberOfNodes = (list) => {
  return list.length;
};

export const getEntity = (list, id) => {
  return list.find((entity) => entity.id === id);
};

export const generateRandomizedBox = (list) => {
  const positions = [];
  for (let i = 0; i < list.length; i++) {
    positions.push({
      id: list[i].id,
      name: list[i].name,
      x: Math.random(),
      y: Math.random(),
    });
  }
  return positions;
};
export const drawPositions = (positions) => {
  const boxes = [];
  for (let i = 0; i < positions.length; i++) {
    boxes.push(
      <Box
        key={`box_${i}`}
        style={{
          left: `${positions[i].x * 100}%`,
          top: `${positions[i].y * 100}%`,
        }}
      >
        {positions[i].name}
      </Box>
    );
  }
  return boxes;
};
const Box = styled.div`
  position: absolute;
  /* margin: 15px; */
  padding: 10px;
  background-color: #00607e;
  border: 3px solid #00607e;
  color: white;
  border-radius: 15px;
  font-weight: 600;
  transform: translate(-50%, -50%);
`;

export const connectAll = (positions) => {
  var scale = 500;
  var lines = `M ${positions[0].x * scale} ${positions[0].y * scale}`;
  for (let i = 0; i < positions.length; i++) {
    lines += `L ${positions[i].x * scale} ${positions[i].y * scale}`;
  }
  return (
    <svg
      height="100%"
      width="100%"
      viewBox={`0 0 ${scale} ${scale}`}
      preserveAspectRatio="none"
    >
      <path
        d={lines}
        stroke="white"
        strokeWidth={3}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export const connectList = (list, positions) => {
  var scale = 500;
  var path = `M 0 0`;
  var lines = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].components.length !== 0) {
      const selfPos = positions.find((pos) => pos.id === list[i].id);
      console.log("selfPos", selfPos);
      for (let j = 0; j < list[i].components.length; j++) {
        const compId = list[i].components[j];
        console.log("compId", compId);
        const compPos = positions.find((pos) => pos.id === compId);
        console.log("compPos", compPos);
        var line = "";
        line += ` M ${selfPos.x * scale} ${selfPos.y * scale}`;
        line += ` L ${compPos.x * scale} ${compPos.y * scale}`;
        lines.push(line);
      }
    } else {
      console.log("components empty");
    }
  }

  for (let i = 0; i < lines.length; i++) {
    path += lines[i];
  }

  return (
    <svg
      height="100%"
      width="100%"
      viewBox={`0 0 ${scale} ${scale}`}
      preserveAspectRatio="none"
    >
      <path
        d={path}
        stroke="white"
        strokeWidth={3}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
