/* eslint-disable */

const jokeCreateDtoInTypeOUTDATED = shape({
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
  const jokeListDtoInType = shape({
    sortBy: oneOf(["name", "averageRating"]),
    order: oneOf(["asc", "desc"]),
    categoryIdList: array(id(), 1, 10),
    pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer(),
    }),
  });
  const jokeGetDtoInType = shape({
    id: id().isRequired(),
  });
  const jokeCreateDtoInType = shape({
    name: uu5String(255).isRequired(),
    text: uu5String(4000).isRequired(),
    categoryIdList: array(id(), 1, 10),
  });
  const jokeUpdateDtoInType = shape({
    id: id().isRequired(),
    name: uu5String(255),
    text: uu5String(4000),
    categoryIdList: array(id(), 10),
  });
  const jokeDeleteDtoInType = shape({
    id: id().isRequired()
  });
  const jokeAddItemDtoInType = shape({
    id: id().isRequired(),
    name: uu5String(255).isRequired(),
  })