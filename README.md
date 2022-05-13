## Getting Started

First you need to generate credentials for your google service account:

1. Access [google developer console](https://console.developers.google.com/)
2. Select your project or create a new one (and then select it)
3. Enable sheets api (skip to step 4 if it's already enabled):
   - On the left, click on **Library**
   - Search for **Google Sheets**
   - Click the blue **Enable** button
4. Visit your [APIs page ](https://console.developers.google.com/) again
5. On the left, click on **Credentials**
6. Click the white **+ CREATE CREDENTIALS** button and select **Service Account**
   - Give it a name
   - Click on **CREATE AND CONTINUE**
   - Click on **CONTINUE**
   - Click on **DONE**
7. In **Service Accounts** section, click on your newly created service account
8. Go to the tab **KEYS**
9. Click on the white **ADD KEY** button, thenselect **Create new key**
   - Choose the **JSON** option
   - Click on **Create**
10. Move the downloaded file to the source of this project
11. Rename it to `credentials.json`

Now with your credentials set, you need to create a google spreadsheet:

1. Access [google spreadsheets](https://docs.google.com/spreadsheets/u/0/?tgif=d)
2. Create a new one
3. Share the spreadsheet with the **client_email** from `credentials.json`
4. Copy the id that comes after `/d/` in the url
   - google.com/spreadsheets/d/`the-spreadsheet-id`/
5. Save the copied ID to your `.env.local`:
   - `SHEET_ID=the-spreadsheet-id`
6. Now you can access the spreadsheet

## Data structure

This project expects that your spreadsheet have the following structure:

| id  | name           | quantity | price     | image_url |
| --- | -------------- | -------- | --------- | --------- |
| 1   | First product  | 50       | 10.00 USD |           |
| 2   | Second product | 25       | 15.00 USD |           |
| 3   | Third product  | 100      | 9.99 USD  |           |

But you can change as you wish. The fetch function is located in `src/getProductData.ts` and product's types in `src/types/product.ts`. There's only one page to display products, in `pages/index.tsx`

## Run the project

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
