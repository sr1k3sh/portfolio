import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { GET_ARTICLES_QUERY, GET_BLOGS_CATEGORY_LIST_QUERY, GET_BLOGS_IDS, GET_BLOG_DETAIL_QUERY, client } from 'src/utils/config'
import styles from './[category]/blogDetail.module.scss'
import { Righteous } from 'next/font/google'
import BlogListItem from 'src/app/components/blogListItem'
import NavBar from 'src/app/components/NavSection'
import { useSelector } from 'react-redux'
import { getcolorState } from 'src/redux/AppSlice'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Head from 'next/head'
import Contact from 'src/app/components/Contact'
import BlogGridItem from 'src/app/components/blogGridItem'

type Props = {
  categories: any
}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Rikesh Shrestha - Frontend Developer | Web Design | HTML | CSS | JavaScript | React | React Native | Ureshino, Japan',
  description: 'Welcome to the portfolio of Rikesh Shrestha, a skilled frontend developer specializing in web design, HTML, CSS, JavaScript, React, and React Native. Based in Ureshino, Japan, he creates visually appealing and user-friendly websites and mobile apps. Explore his projects, expertise, and experience.',
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {

  const { data } = await client.query({
    query: GET_BLOGS_CATEGORY_LIST_QUERY,
    variables: {
      pagination: {
        limit: 4,
      },
    },
  })

  return {
    props: {
      categories: data.categories,
    },
    revalidate: 10,
  }
}

export default function BlogListingPage({ categories }: Props) {


  const { data } = categories
  console.log(data)
  // return <>test</>

  const colorState = useSelector(getcolorState)

  const classes = {
    colorState: colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  return (
    <main className={classes.colorState}>
      <Head>
        <title>
          {
            metadata.title
          }
        </title>
        <meta
          name="keywords"
          content={metadata.description.split(' ').join(',')}
        />
        <meta
          name="description"
          content={metadata.description}
          key="desc"
        />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={'/bg.avif'} />
        <meta property="og:url" content={`/blogs`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rikeshshrestha" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={'/bg.avif'} />
        <link rel="icon" href="/profile.png" sizes="any" />
      </Head>
      <NavBar></NavBar>
      <section>
        <div className='container-fluid'>
          <article>
            <figure className={styles.figure}>
              <Image src={'/bg.avif'} placeholder='blur' blurDataURL={'/bg.avif'} alt={metadata?.title || ''} fill={true} style={{ objectFit: 'cover' }}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section className={colorState === 'dark' ? styles.darkSection : styles.lightSection}>
        <div className='container'>
          <div className='row'>
            {
              data.map((category: any, index: number) => (
                <div className='col-12' key={`category-${index}`}>
                  <h2 className={`${styles.subtitle} ${righteous.className}`}>{category.attributes.name}</h2>
                  <div className='row'>
                    {
                      category.attributes.blogs.data.length ? category.attributes.blogs.data.map((blog: any, ind: any) => (
                        <div className='col-md-4' key={`category-blog-${ind}`}>
                          <BlogGridItem blog={blog}></BlogGridItem>
                        </div>
                      )) : null
                    }
                  </div>
                </div>
              )
              )
            }
            <div className='offset-xl-1 col-lg-4'>
              <h3 className={`${styles.subtitle} ${righteous.className}`}>Related Blogs</h3>
              {/* <ul className='rs-exp__blog-list'> */}
              {/* </ul> */}
            </div>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </main>
  )
}