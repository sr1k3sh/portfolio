import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { GET_ARTICLES_QUERY, GET_BLOGS_IDS, GET_BLOG_DETAIL_QUERY, client } from 'src/utils/config'
import styles from './blogDetail.module.scss'
import { Righteous } from 'next/font/google'
import BlogListItem from 'src/app/components/blogListItem'
import NavBar from 'src/app/components/NavSection'
import { useSelector } from 'react-redux'
import { getcolorState } from 'src/redux/AppSlice'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Head from 'next/head'
import Contact from 'src/app/components/Contact'

type Props = {
  blogData: any
  dataBlogList: any
}

const righteous = Righteous({
  weight: '400',
  subsets: ['latin']
})

export async function getStaticPaths() {
  // Fetch the IDs of the blogs from your data source
  // const blogIds = ['1','']; // Replace with your actual blog IDs
  const { data } = await client.query({
    query: GET_BLOGS_IDS,
  })

  // console.log(data.blogs.data)

  // Generate an array of objects with the `params` key for each blog ID
  const paths = data.blogs.data.map((blog: any) => ({
    params: {
      id: blog.id,
      slug: blog.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
     // Set to `true` if you want to enable fallback behavior
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {

  const { data } = await client.query({
    query: GET_BLOG_DETAIL_QUERY,
    variables: {
      blogId: params.id
    }
  })

  const { data: dataBlogList } = await client.query({
    query: GET_ARTICLES_QUERY,
    variables: {
      filters: {
        not: {
          id: {
            contains: params.id
          }
        }
      }
    }
  })

  return {
    props: {
      blogData: data.blog.data,
      dataBlogList,
    },
    revalidate: 10,
  }
}

export default function BlogDetail({ blogData, dataBlogList }: Props) {

  const { attributes } = blogData

  const { blogs } = dataBlogList

  const colorState = useSelector(getcolorState)

  const classes = {
    colorState: colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  return (
    <main className={classes.colorState}>
      <Head>
        <title>
          {
            attributes.title
          }
        </title>
        <meta
          name="keywords"
          content={attributes.description.split(' ').join(',')}
        />
        <meta
          name="description"
          content={attributes.description}
          key="desc"
        />

        <meta property="og:title" content={attributes.title}/>
        <meta property="og:description" content={attributes.description}/>
        <meta property="og:image" content={attributes?.cover?.data?.attributes?.url || '/bg.avif'}/>
        <meta property="og:url" content={`/blogs/${attributes.category.data.id}`} />
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@rikeshshrestha"/>
        <meta name="twitter:title" content={attributes.title}/>
        <meta name="twitter:description" content={attributes.description}/>
        <meta name="twitter:image" content={attributes?.cover?.data?.attributes?.url || '/bg.avif'}/>
        <link rel="icon" href="/profile.png" sizes="any" />
      </Head>
      <NavBar></NavBar>
      <section>
        <div className='container-fluid'>
          <article>
            <figure className={styles.figure}>
              <Image src={attributes?.cover?.data?.attributes?.url || '/bg.avif'} placeholder='blur' blurDataURL={'/bg.avif'} alt={attributes?.cover?.data?.attributes?.alternativeText || attributes?.title || ''} fill={true} style={{ objectFit: 'cover' }}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section className={colorState === 'dark' ? styles.darkSection : styles.lightSection}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-xl-7'>
              <h1 className={`${styles.title} ${righteous.className}`}>{attributes.title}</h1>
              {
                attributes.blocks && attributes.blocks.map((block: any, index: number) => (
                  <div className={styles.content} key={index}>
                    {
                      <ReactMarkdown>
                        {
                          block.body
                        }
                      </ReactMarkdown>
                    }
                  </div>
                ))
              }
            </div>
            <div className='offset-xl-1 col-lg-4'>
              <h3 className={`${styles.subtitle} ${righteous.className}`}>Related Blogs</h3>
              <ul className='rs-exp__blog-list'>
                {
                  blogs.data.map((blog: any, index: number) => <li key={index}>
                    <BlogListItem blogDetail={blog} ></BlogListItem>
                  </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </main>
  )
}