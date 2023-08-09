import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GET_ARTICLES_QUERY, GET_BLOGS_IDS, GET_BLOG_DETAIL_QUERY, client } from 'src/utils/config'
import styles from './blogDetail.module.scss'
import BlogListItem from 'src/app/components/blogListItem'
import NavBar from 'src/app/components/NavSection'
import { useSelector } from 'react-redux'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Head from 'next/head'
import Contact from 'src/app/components/Contact'
import { getThemeMode } from 'src/redux/ThemeSlice'
import BreadCrumb, { IbreadCrumb } from 'src/app/components/breadcrumb'
import Layout from 'src/app/components/Layout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneLight,
  oneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import SliderV2tar from 'src/app/components/SliderV2/SliderV2'
import { carmorant, proza, sansFont } from 'src/utils/fonts'
import Link from 'next/link'

type Props = {
  blogData: any
  dataBlogList: any
}

export async function getStaticPaths() {
  // Fetch the IDs of the blogs from your data source
  // const blogIds = ['1','']; // Replace with your actual blog IDs
  const { data } = await client.query({
    query: GET_BLOGS_IDS,
  })

  // Generate an array of objects with the `params` key for each blog ID
  const paths = data.blogs.data.map((blog: any) => ({
    params: {
      id: blog.id,
      category: blog.attributes.slug,
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
    // variables: {
    //   filters: {
    //     id: {
    //       contains: params.id
    //     }
    //   }
    // }
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

  // return <></>

  const { attributes, id } = blogData

  const { blogs } = dataBlogList

  const [breadCrumbData, setBreadCrumbData] = useState<IbreadCrumb[]>([])

  useEffect(() => {
    if (attributes) {
      const { category, title } = attributes
      if (category) {
        setBreadCrumbData(prev => [...prev,
        {
          url: `/blogs/${category.data.attributes.slug}`,
          name: category.data.attributes.name,
        },
        {
          url: null,
          name: title,
        },
        ])
      }
    }
    return () => {
      setBreadCrumbData([])
    }
  }, [attributes])

  const colorState = useSelector(getThemeMode)

  const classes = {
    colorState: colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  return (
    <Layout className={`${classes.colorState} bg-white-700 dark:bg-black-200 dark:text-white`}>
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

        <meta property="og:title" content={attributes.title} />
        <meta property="og:description" content={attributes.description} />
        <meta property="og:image" content={attributes?.cover?.data?.attributes?.url || '/bg.avif'} />
        <meta property="og:url" content={`/blogs/${attributes.category.data.id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rikeshshrestha" />
        <meta name="twitter:title" content={attributes.title} />
        <meta name="twitter:description" content={attributes.description} />
        <meta name="twitter:image" content={attributes?.cover?.data?.attributes?.url || '/bg.avif'} />
        <link rel="icon" href="/profile.png" sizes="any" />
      </Head>
      <NavBar></NavBar>
      <section className={`w-full md:w-[calc(100%_-_7rem)] pb-2 pt-20 lg:py-6 lg:pt-4 m-auto`}>
        <div className='container m-auto'>
          <div className='flex'>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl uppercase font-semibold tracking-normal ${proza.className}`}>{attributes.title}</h1>
          </div>
        </div>
      </section>
      <section className='py-4'>
        <div className='container-none mb-4'>
          <div className='flex flex-col'>
            <article className='px-4 md:px-10'>
              <figure className={'relative h-[200px] lg:h-[500px] rounded-2xl overflow-hidden'}>
                <Image className='object-cover' src={attributes?.cover?.data?.attributes?.url || '/bg.avif'} placeholder='blur' blurDataURL={attributes?.cover?.data?.attributes?.url || '/bg.avif'} alt={attributes?.cover?.data?.attributes?.alternativeText || attributes?.title || ''} fill={true} style={{ objectFit: 'cover' }}></Image>
              </figure>
            </article>
          </div>
        </div>
        <div className='container m-auto'>
          <div className='flex flex-col'>
            <BreadCrumb data={breadCrumbData}></BreadCrumb>
            <div className='flex flex-row items-center mt-4'>
              <figure className='relative w-10 h-10 overflow-hidden rounded-full border-2 me-2 border-white-600'>
                <Image className='rounded-full object-cover' fill={true} src={attributes?.author?.data?.attributes?.Avatar?.data?.attributes?.url} alt={attributes?.author?.data?.attributes?.Avatar?.data?.attributes?.alternativeText}></Image>
              </figure>
              <div className='flex flex-col'>
                <span className={`text-sm text-black-300 capitalize font-semibold dark:text-white-300 ${proza.className}`}>{attributes?.author?.data?.attributes?.Name}</span>
                <span className={`text-xs text-black-400 font-regular dark:text-white-400 ${sansFont.className}`}>{attributes?.author?.data?.attributes?.Email}</span>
              </div>
            </div>
            <span className={'text-sm text-black-300 mt-2 dark:text-white-400'}><strong>Publish on:</strong> {attributes.publishedAt && new Date(attributes.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            })}</span>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className='container m-auto'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='w-full md:w-7/12 mb-6 md:mb-0'>
              {
                attributes.blocks && attributes.blocks.map((block: any, index: number) => {
                  return (
                    <div className={styles.content} key={index}>
                      {
                        // eslint-disable-next-line
                        <ReactMarkdown
                          components={{
                            // eslint-disable-next-line
                            code({ inline, className, children }) {
                              if (inline) {
                                // eslint-disable-next-line
                                return <code className={className}>{children}</code>;
                              }
                              const match = /language-(\w+)/.exec(className || '');
                              const lang = match && match[1] ? match[1] : 'tsx';

                              return (
                                <SyntaxHighlighter
                                  style={colorState === 'dark' ? oneDark : oneLight}
                                  language={lang === 'Dockerfile' ? 'docker' : lang}
                                  // eslint-disable-next-line
                                  children={String(children).replace(/\n$/, '')}
                                />
                              );
                            },
                            h1: ({children}) => <h1 className={`text-2xl md:text-3xl font-bold mb-4 ${proza.className}`}>{children}</h1>,
                            h2: ({children}) => <h2 className={`text-lg md:text-lg font-bold mb-4 ${proza.className}`}>{children}</h2>,
                            h3: ({children}) => <h3 className={`${proza.className} text-lg font-bold md:text-lg md:font-bold mb-4`}>{children}</h3>,
                            p: ({children}) => <p className={`${sansFont.className} text-base font-regular mb-4`}>{children}</p>,
                          }}
                        >
                          {
                            block.body
                          }
                        </ReactMarkdown>


                      }
                    </div>
                  )
                }
                )
              }
            </div>
            <div className='w-full md:w-4/12'>
              <h3 className={`mb-4 font-[600] text-xl md:text-xl uppercase ${proza.className}`}>Related Blogs</h3>
              <ul className='rs-exp__blog-list'>
                {
                  blogs.data.filter((blog:any) => blog.id !== attributes.category.data.id ).map((blog: any, index: number) => <li key={index}>
                    <BlogListItem blogDetail={blog} ></BlogListItem>
                  </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${colorState === 'dark' ? styles.darkSection : styles.lightSection} ${styles.containerSection} py-5 md:py-10`}>
        <div className='container m-auto'>
          <div className='row'>
            <div className='col-12'>
            {
                attributes.blocks && attributes.blocks.map((block: any, index: number) => {
                  return (
                    <div className={styles.content} key={index}>
                      {
                        block.files && block.files.data.length?
                          <div className='flex flex-col'>
                            <SliderV2tar title={'Checkout Galleries'} data={block.files.data}></SliderV2tar>
                            <Link href={`/gallery/${id}`} className='text-secondary text-sm text-right block font-regular capitalize'>more on galleries...</Link>
                          </div>
                        : null
                      }

                      {
                        block.video ? <div className='mt-8'>
                          <h2 className={`text-2xl md:text-3xl font-[600] uppercase mb-4 ${proza.className}`}>Checkout my vlog on youtube</h2>
                          <iframe
                            className={`w-full aspect-video rounded-xl`}
                            src={`https://www.youtube.com/embed/${block.video.providerUid}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            // allowfullscreen
                          ></iframe>
                        </div> : null
                      }
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </section>
      <Contact></Contact>
    </Layout>
  )
}