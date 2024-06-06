This project is a SPA (single page app) take-home test for Sapa Investments, using Next.js, Tailwind CSS, and Typescript.

To see the site:
1. Download the repository
2. Run the development server via `npm run dev`
3. Connect to [http://localhost:3000](http://localhost:3000)

## UPDATE
- Added mobile-complient style changes down to a minimum width of 375px, which I believe is the standard.
- Fixed some miscellaneous bugs like spelling, padding errors, and inflexible width declarations.

## Notes
- Several image assets provided contained extraneous white-space, making them difficult to position.  I cropped them using Adobe Photoshop.
- ~~Due to time constraints with my current work situation, I was unable to fully optimize for mobile.  The site is mostly responsive from desktop-tablet.~~
- All potential links in the site are non-functional - because of the single page nature of the project, I hope this is fine for demonstration purposes.

## Reflections
This was my first-ever exposure to Next.js and Tailwind.  As such, I tried to familiarize myself with the workflow as quickly as possible.  After completion, there are several areas I think I could improve on:
- Better use of Tailwind components.  There are a lot of repeating styles throughout the site and I could have saved time by abstracting them out.
- Use of React components.  My experience with React is also limited so the site is mostly hard-coded.  Re-using html templates would drastically simplify and clean up the `page.tsx` file.
- Proper font imports.  Next.js has a unique way of accessing local static font files and I'm not sure I optimized that correctly.
- Asset congregation.  I was a bit confused on how to correctly reference images.  For background images applied to divs, Tailwind seems to require assets within the `src/assets` folder.  For HTML img tags, Next.js seems to require the `public` folder.  I separated them accordingly but I'm sure I'm missing something here.

Thanks for giving me this opportunity, I hope you'll consider me for the position!
-Carson
