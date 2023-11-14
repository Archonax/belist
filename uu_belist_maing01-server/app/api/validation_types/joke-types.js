/* eslint-disable */

const jokeCreateDtoInType = shape({
    name: string(3, 255).isRequired(),
    uuIdentity: string(1,32).isRequired(),
  });
  const jokeCreateDtoInType2 = shape({
    id: string(1, 255).isRequired(),
  });
  const jokeCreateDtoInType3 = shape({
    sort: string(1, 12).isRequired(),
    order: string(1, 12).isRequired(),
    pageIndex: number(1, 1000).isRequired(),
    pageSize: number(1, 1000).isRequired()
  });
  const jokeCreateDtoInType4 = shape({
    uuIdentity: string(1,32).isRequired(),
  });
  const jokeCreateDtoInType5 = shape({
    name: string(3, 255).isRequired(),
    text: string(3, 4000).isRequired(),
  });
