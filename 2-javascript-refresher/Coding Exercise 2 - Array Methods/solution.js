function transformToObjects(numberArray) {
  return numberArray.map((number) => {
    return { val: number };
  });
}
