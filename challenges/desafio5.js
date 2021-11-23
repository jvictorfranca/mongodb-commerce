db.produtos.updateMany(
  { nome: { $not: /McChicken/ } }, { $addToSet: {
    ingredientes: "ketchup",
  } },
);

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });