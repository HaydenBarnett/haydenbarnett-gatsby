import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="section-404">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h1>Nothing to see here...</h1>
                  <p>This content has been moved or deleted.</p>
                  <a class="btn btn-secondary" href="/">Back to the home page</a>
              </div>
          </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
