<h1 style="text-align:center; font-weight:lighter"> Hey, this is <span style="color:#F7AB0A; font-style:italic; font-weight:light;"> Faris !</span> </h1>
<div style="display:flex; justify-content:center">
<img src="/public/avatar.jpeg" alt="avatar" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="200" />
</div>

## Welcome to my portfolio source code

This is a Next.js web application using a CMS to retrieve data, called sanity.io

### Getting started

In order to make it work localy run the following commands :

```bash
yarn install
cd sanity
yarn install
```

Create a sanity project in your sanity's personnal dashboard (on their website), then update your `sanity.json` [file](/sanity/sanity.json) with the correct information.

Create a `.env.development.local` file and update `.env.production` [file](.env.production) following the [.env.example](.env.example) file.

Run

```bash
sanity start
```

Open [http://localhost:3333](http://localhost:3333) with your browser to access your sanity studio. Make sure to add some content in order to create a working front-end.

You can now run your Next.js front-end and see the result. On another terminal in the root directory:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:0003) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
