const path = require(`path`); // you will need it later to point at your template component
// required to load .env files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  console.log('process.env.GATSBY_PAGE_ID:', process.env.GATSBY_PAGE_ID);

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    // fetching the data

    // Tamanhos
    graphql(`
    {
      backend {
        categoryMany(filter: {pageId: "${process.env.GATSBY_PAGE_ID}"}) {
          id
          name
          pageId
          pricings {
            size {
              id
              size
              split
              slices
            }
          }
        }
      }
    }
    `).then(result => {
      // first check if there is no errors
      if (result.errors) {
        // reject Promise if error
        reject(result.errors);
      }

      // if no errors, you can map into the data and create your static pages
      result.data.backend.categoryMany.forEach(category => {
        // create page according to the fetched data
        createPage({
          path: `/tamanhos/${category.name}`, // your url -> /tamanhos/Pizzas Tradicionais
          component: path.resolve('./src/templates/sizes.js'), // your template component
          context: {
            // optional,
            // data here will be passed as props to the component `this.props.pathContext`,
            // as well as to the graphql query as graphql arguments.
            id: category.id,
            pageId: category.pageId
          },
        });

        category.pricings.forEach(pricing => {
          createPage({
            path: `/divide/${pricing.size.size}`, // your url -> /tamanhos/Pizzas Tradicionais
            component: path.resolve('./src/templates/slices.js'), // your template component
            context: {
              // optional,
              // data here will be passed as props to the component `this.props.pathContext`,
              // as well as to the graphql query as graphql arguments.
              id: pricing.size.id,
              pageId: category.pageId
            },
          });
        })

        category.pricings.forEach(pricing => {
          createPage({
            path: `/sabores/${pricing.size.size}`, // your url -> /tamanhos/Pizzas Tradicionais
            component: path.resolve('./src/templates/flavors.js'), // your template component
            context: {
              // optional,
              // data here will be passed as props to the component `this.props.pathContext`,
              // as well as to the graphql query as graphql arguments.
              id: pricing.size.id,
              pageId: category.pageId
            },
          });
        })
      });
      resolve();
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    if (page.path === '/') {
      deletePage(page)
      // You can access the variable "pageId" in your page queries now
      createPage({
        ...page,
        context: {
          pageId: process.env.GATSBY_PAGE_ID
        },
      })
    }
    resolve();
  });
}
