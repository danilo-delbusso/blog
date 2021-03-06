import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectsStyles from "../css/projects.module.css"
import articles from "../../content/articles/articles"
import Item from "../components/item"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <section className="page-section">
        <div className="container">
          <h2 className="title">Articles</h2>
          {articles.map(article => {
            return (
              <>
                <div><small>{article.date}</small></div>

                <Item
                  key={article.title}
                  title={article.title}
                  path={article.path}
                  isInternal={false}
                  headerContent={
                    <div className={projectsStyles.tagContainer}>
                      {article.tags.map(tag => (
                        <small
                          key={`${article.title}_${tag}`}
                          dangerouslySetInnerHTML={{ __html: tag }}
                        ></small>
                      ))}
                    </div>
                  }
                />
              </>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
