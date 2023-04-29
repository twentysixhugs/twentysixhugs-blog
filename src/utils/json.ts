import path from "path";

import { Category } from "@shared";

const fs = require("fs");

const categoriesPath = path.join(process.cwd(), "data/categories");

export async function getAllCategories(): Promise<Category[]> {
  const rawData = fs.readFileSync(path.join(categoriesPath, "categories.json"));
  const dataArray = JSON.parse(rawData);

  return dataArray.list;
}
