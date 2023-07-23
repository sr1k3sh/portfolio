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


  const classes = {
    colorState: colorState === "dark" ? "rs-app__dark " : "rs-app__light "
  }

  return (
    <main className={classes.colorState}>
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
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <HeaderTitleDesc></HeaderTitleDesc>
            </div>
          </div>
          <article>
            <figure className={styles.figure}>
              <Image src={'/bgnew.jpg'} priority={true} placeholder='blur' blurDataURL={'/bg.avif'} alt={''} fill={true} style={{ objectFit: 'cover' }}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section className={colorState === 'dark' ? styles.darkSection : styles.lightSection}>
        <div className='container'>
          <>
            <div className='row gy-3 d-none d-lg-flex'>
              {
                blogs.data.length ? blogs.data.map((blog: any, ind: any) => (
                  <div className='col-md-4' key={`category-blog-${ind}`}>
                    <BlogGridItem blog={blog}></BlogGridItem>
                  </div>
                )) : null
              }
            </div>
            <div className='row gy-3 d-flex d-lg-none'>
              <div className='col-12'>
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
                  <Link href="/" className='btn btn-primary'>Go back?</Link>
                </header>
              : null
            }
          </>
        </div>
      </section>
      <Contact></Contact>
    </main>
  )
}