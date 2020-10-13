export function GetProductCategories() {
  const categories = [
    { Id: 1, Category: "HandloomSilks", Label: "Handloom Silks" },
    { Id: 1, Category: "SilkCotton", Label: "Silk Cotton" },
    { Id: 1, Category: "PureCotton", Label: "Pure Cotton" },
  ];
  return categories;
}

export function GetProductTags() {
  const tags = [
    { Id: 1, Tag: "_" },
    { Id: 2, Tag: "New" },
    { Id: 3, Tag: "Popular" },
    { Id: 4, Tag: "OutOfStock" },
  ];
  return tags;
}
