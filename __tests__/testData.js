module.exports.functionInputData = [
  {
    input1: [1, 1, 1],
    input2: [2, 2, 2],
    isSameStructure: true,
  },
  {
    input1: [1, [1, 1]],
    input2: [2, [2, 2]],
    isSameStructure: true,
  },
  {
    input1: [1, [1, 1]],
    input2: [[2, 2], 2],
    isSameStructure: false,
  },
  {
    input1: [1, [1, 1]],
    input2: [[2], 2],
    isSameStructure: false,
  },
  {
    input1: [[[], []]],
    input2: [[[], []]],
    isSameStructure: true,
  },
  {
    input1: [[[], []]],
    input2: [[1, 1]],
    isSameStructure: false,
  },
  {
    input1: [[2, 3, 4], [2], [2, [3, [4]]], 5],
    input2: [[2], [2, 3, 4], [2, [3, [4]]], 5],
    isSameStructure: false,
  },
];
