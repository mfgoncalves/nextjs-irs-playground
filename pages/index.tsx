import { getProductData } from "../src/getProductData";
import { Product } from "../src/types/product";

interface Props {
  products: Product[];
  updatedAt: string;
}
function Products({ products, updatedAt }: Props) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ marginBottom: "16px", fontSize: "24px" }}
          >
            <div>Name: {product.name}</div>
            <div>
              Quantity:{" "}
              {product.quantity > 0 ? product.quantity : "OUT OF STOCK"}
            </div>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: "14px", margin: "16px" }}>
        Updated at: {updatedAt}
      </p>
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const products = await getProductData();

  // A timestamp so we can check when the page was revalidated
  const updatedAt = new Date().toLocaleString();

  return {
    props: {
      products,
      updatedAt,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.

// export async function getStaticPaths() {
//   await doc.useServiceAccountAuth(secret);
//   await doc.loadInfo();
//   const sheet = doc.sheetsByIndex[0];
//   const rows = await sheet.getRows();
//   const allProducts: any[] = rows.map(({ image_url, ...rest }) => {
//     return {
//       imageUrl: image_url,
//       ...rest,
//     };
//   });

//   // Get the paths we want to pre-render based on products
//   const paths = allProducts.map((product) => ({
//     params: { id: product.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }

export default Products;
