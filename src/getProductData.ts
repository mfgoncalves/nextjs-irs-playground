import { GoogleSpreadsheet } from "google-spreadsheet";
import secret from "../credentials.json";
import { Product } from "./types/product";

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export const getProductData = async () => {
  await doc.useServiceAccountAuth(secret);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const products = rows.map((product): Product => {
    return {
      imageUrl: product.image_url,
      id: product.id,
      name: product.name,
      quantity: Number(product.quantity),
      price: product.price,
    };
  });
  return products;
};
