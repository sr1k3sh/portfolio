import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { GET_BLOGS_CATEGORY_LIST_QUERY, client } from 'src/utils/config'
import styles from './[category]/blogDetail.module.scss'
import { Righteous } from 'next/font/google'
import NavBar from 'src/app/components/NavSection'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Contact from 'src/app/components/Contact'
import BlogGridItem from 'src/app/components/blogGridItem'
import HeaderTitleDesc from 'src/app/components/headerTitleDesc'
import { getThemeMode } from 'src/redux/ThemeSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css'
import Link from 'next/link'
import stylesMain from './index.module.scss'

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

  const colorState = useSelector(getThemeMode)

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
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <HeaderTitleDesc></HeaderTitleDesc>
            </div>
          </div>
          <article>
            <figure className={styles.figure}>
              <Image src={'/bgnew.jpg'} priority={true} placeholder='blur' blurDataURL={'/bg.avif'} alt={metadata?.title || ''} fill={true} style={{ objectFit: 'cover' }}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section className={colorState === 'dark' ? styles.darkSection : styles.lightSection}>
        <div className='container'>
          <div className='row'>
            {
              data.map((category: any, index: number) => (
                category.attributes.blogs.data.length ? <div className={`${styles.categoryContainer} ' col-12'`} key={`category-${index}`}>
                  <div className={stylesMain.titleWrapper}>
                    <h2 className={`${stylesMain.subtitle} ${righteous.className}`}>{category.attributes.name}</h2>
                    <Link href={`/blogs/${category.attributes.slug}`} className={`${stylesMain.link} ${righteous.className}`}>More related blogs</Link>
                  </div>
                  <div className='row gy-3 d-none d-lg-flex'>
                    {
                      category.attributes.blogs.data.length ? category.attributes.blogs.data.map((blog: any, ind: any) => (
                        <div className='col-md-4' key={`category-blog-${ind}`}>
                          <BlogGridItem blog={blog}></BlogGridItem>
                        </div>
                      )) : null
                    }
                  </div>
                  <div className='row gy-3 d-flex d-lg-none'>
                    <div className='col-12'>
                      <Swiper
                        // effect={'coverflow'}
                        grabCursor={true}
                        spaceBetween={30}
                        width={300}
                        // centeredSlides={true}
                        // slidesPerView={'auto'}
                        // loop={true}
                        navigation
                        modules={[Pagination, Navigation]}
                        className="blogSwiper"
                        // onSwiper={onSwiper}
                        // onSlideChange={onSlideChange}
                        // autoplay={{
                        //   delay: 1000,
                        //   disableOnInteraction: false,
                        // }}
                      >
                        {
                          category.attributes.blogs.data.length ? category.attributes.blogs.data.map((blog: any, ind: any) => (
                            <SwiperSlide
                              key={`swiper-index-${index}`}
                              // className={`${movedLeft === null ? '' : movedLeft ? 'left' : 'right'}`}
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
                </div> : null
                )
              )
            }
          </div>
        </div>
      </section>
      <Contact></Contact>
    </main>
  )
}