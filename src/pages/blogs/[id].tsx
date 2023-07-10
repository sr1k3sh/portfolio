import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { GET_ARTICLES_QUERY, GET_BLOGS_IDS, GET_BLOG_DETAIL_QUERY, client } from 'src/utils/config'
import styles from './blogDetail.module.scss'
import { Righteous } from 'next/font/google'
import BlogListItem from 'src/app/components/blogListItem'

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
  const paths = data.blogs.data.map((blog:any) => ({
    params: { id: blog.id },
  }));

  return {
    paths,
    fallback: false, // Set to `true` if you want to enable fallback behavior
  };
}

export const getStaticProps: GetStaticProps = async ({params}:any) => {

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
    }
  }
}

export default function BlogDetail({blogData, dataBlogList}: Props) {

  const { attributes } = blogData

  const { blogs } = dataBlogList

  return (
    <main>
      <section>
        <div className='container-fluid'>
          <article>
            <figure className={styles.figure}>
              <Image src={attributes.cover.data.attributes.url} alt={attributes.cover.data.attributes.alternativeText || attributes.title || ''} fill={true} style={{objectFit:'cover'}}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <h1 className={righteous.className}>{attributes.title}</h1>
              {
                attributes.blocks && attributes.blocks.map((block: any, index:number) => (
                  <div key={index}>
                    {
                      <div dangerouslySetInnerHTML={{ __html: block.body }} />
                    }
                  </div>
                ))
              }
            </div>
            <div className='offset-md-1 col-md-4'>
              <ul className='rs-exp__blog-list'>
                {
                  blogs.data.map((blog:any,index:number) => <li key={index}>
                      <BlogListItem blogDetail={blog} ></BlogListItem>
                  </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}