import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { GET_ARTICLES_QUERY, GET_BLOGS_IDS, client } from 'src/utils/config'
import styles from './blogListing.module.scss'
import { Righteous } from 'next/font/google'
import NavBar from 'src/app/components/NavSection'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Contact from 'src/app/components/Contact'
import { getThemeMode } from 'src/redux/ThemeSlice'
import BlogGridItem from 'src/app/components/blogGridItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import HeaderTitleDesc from 'src/app/components/headerTitleDesc'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css'
import Layout from 'src/app/components/Layout'

type Props = {
  blogData: any
  dataBlogList: any
  category: string
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

  // Generate an array of objects with the `params` key for each blog ID
  const paths = data.blogs.data.map((blog: any) => ({
    params: {
      id: blog.id,
      category: blog.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: true,
     // Set to `true` if you want to enable fallback behavior
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {

  const { data: dataBlogList } = await client.query({
    query: GET_ARTICLES_QUERY,
    variables: {
      "filters": {
        "category": {
          "slug": {
            "contains": params.category
          }
        }
      },
    }
  })

  if(!dataBlogList?.blogs.data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      dataBlogList,
      category: params.category,
    },
    revalidate: 10,
  }
}

export default function BlogDetail({ dataBlogList, category }: Props) {

  const colorState = useSelector(getThemeMode)

  if(!dataBlogList) return <></>

  const { blogs } = dataBlogList

  const blogData = {
    blogTitle: 'My gallery',
    blogSubTitle: 'Writing from my experience',
    blogDescription: `is a captivating blog where personal stories and insightful reflections come together to offer a unique and relatable perspective. Join the author on a journey through their triumphs, challenges, and the valuable life lessons they've learned along the way. Discover inspiration, entertainment, and thought-provoking insights that invite you to reflect on your own experiences.`,
  }

  return (
    <Layout className={'bg-white-700 dark:bg-black-200 dark:text-white'}>
      <Head>
        {/* <title>
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
        <link rel="icon" href="/profile.png" sizes="any" /> */}
      </Head>
      <NavBar></NavBar>
      <section className='py-10'>
        <div className='container m-auto'>
          <div className='flex'>
            <HeaderTitleDesc blog={blogData}></HeaderTitleDesc>
          </div>
          <article>
            <figure className={'relative h-[400px]'}>
              <Image className='object-cover rounded-xl' src={'/bgnew.jpg'} priority={true} placeholder='blur' blurDataURL={'/bg.avif'} alt={''} fill={true} style={{ objectFit: 'cover' }}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section className={colorState === 'dark' ? styles.darkSection : styles.lightSection}>
        <div className='container m-auto'>
          <>
            <div className='hidden columns-1 lg:flex lg:columns-3 mb-4 gap-4'>
              {
                blogs.data.length ? blogs.data.map((blog: any, ind: any) => (
                  <div className='w-full' key={`category-blog-${ind}`}>
                    <BlogGridItem blog={blog}></BlogGridItem>
                  </div>
                )) : null
              }
            </div>
            <div className='flex md:hidden'>
              <Swiper
                grabCursor={true}
                spaceBetween={30}
                width={300}
                navigation
                modules={[Pagination, Navigation]}
                className="blogSwiper"
              >
                {
                  blogs.data.length ? blogs.data.map((blog: any, ind: any) => (
                    <SwiperSlide
                      key={`swiper-index-${ind}`}
                      >
                        <div style={{
                          width: '100%',
                        }}>
                          <BlogGridItem blog={blog}></BlogGridItem>
                        </div>
                    </SwiperSlide>
                  )) : null
                }
              </Swiper>
            </div>
            {
              !blogs.data.length ?
                <header style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <h2 className={righteous.className} style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                  }}>Sorry There are no blogs related to {category}</h2>
                  <Link href="/" className='px-8 py-2 transition-all duration-300 bg-white-300 hover:bg-primary hover:text-white rounded-full dark:bg-black-600 dark:text-white-700 dark:hover:bg-black-100'>Go back?</Link>
                </header>
              : null
            }
          </>
        </div>
      </section>
      <Contact></Contact>
    </Layout>
  )
}