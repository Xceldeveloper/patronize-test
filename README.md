# patronize-test

[Demo Url](https://ov-patronize.netlify.app/).


For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories
I Created Special directory for this project

### `/components/custom`
This directory contains bare custom components built to follow the overal Ui standard of the applicaation
and also to try to adhere to the Atomic Design Principle. This components can be styled via props or normal
css. depending on the Ui requirements.

The components in this directory are ***dynamically*** globably registered so no need for manual imports.

### `/components/views`
This directory contains views that are been used by the pages. In terms of Atomic Design they can be seen as
organisms. 

### `/components/pages/{page-name}`
This directory contains components specific to a particular page



...built with SCSS, BEM , Atomic Design, Nuxtjs

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

