import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <div className="section-404">
      <div className="container">
          <div className="row">
              <div className="col-12 text-center">
                  <h1>Nothing to see here...</h1>
                  <p>This content has been moved or deleted.</p>
                  <a className="btn btn-secondary" href="/">Back to the home page</a>
              </div>
          </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
