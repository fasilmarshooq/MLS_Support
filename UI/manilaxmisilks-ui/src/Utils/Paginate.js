import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const stratIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(stratIndex).take(pageSize).value();
}
