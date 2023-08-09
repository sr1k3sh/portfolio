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
import Layout from 'src/app/components/Layout'
import { proza } from 'src/utils/fonts'

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

  const blogData = {
    blogTitle: 'My gallery',
    blogSubTitle: 'Writing from my experience',
    blogDescription: `is a captivating blog where personal stories and insightful reflections come together to offer a unique and relatable perspective. Join the author on a journey through their triumphs, challenges, and the valuable life lessons they've learned along the way. Discover inspiration, entertainment, and thought-provoking insights that invite you to reflect on your own experiences.`,
  }

  return (
    <Layout className={`${classes.colorState} bg-white-700 dark:bg-black-200 dark:text-white`}>
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
        <meta property="og:image" content={'/profile.ico'} />
        <meta property="og:url" content={`/blogs`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rikeshshrestha" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={'/profile.ico'} />
        <link rel="icon" href="/profile.ico" sizes="any" />
      </Head>
      <NavBar></NavBar>
      <section className='py-10'>
        <div className='container m-auto'>
          <div className='flex'>
            <HeaderTitleDesc blog={blogData}></HeaderTitleDesc>
          </div>
          <article>
            <figure className={'relative h-[400px]'}>
              <Image className='object-cover rounded-xl' src={'/bgnew.jpg'} priority={true} placeholder='blur' blurDataURL={'/bg.avif'} alt={metadata?.title || ''} fill={true} style={{ objectFit: 'cover' }}></Image>
            </figure>
          </article>
        </div>
      </section>
      <section className={colorState === 'dark' ? styles.darkSection : styles.lightSection}>
        <div className='container m-auto'>
          <div className='flex flex-col'>
            {
              data.map((category: any, index: number) => (
                category.attributes.blogs.data.length ? <div className={`flex flex-col mb-8`} key={`category-${index}`}>
                  <div className={'mb-4 flex justify-center'}>
                    <h2 className={`text-2xl uppercase font-bold ${[proza.className]}`}>{category.attributes.name}</h2>

                  </div>
                  <div className='hidden md:flex md:columns-2 lg:columns-3 mb-4 gap-4'>
                    {
                      category.attributes.blogs.data.length ? category.attributes.blogs.data.map((blog: any, ind: any) => (
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
                  <Link href={`/blogs/${category.attributes.slug}`} className={`block text-sm text-right text-secondary font-semibold`}>More related blogs</Link>
                </div> : null
                )
              )
            }
          </div>
        </div>
      </section>
      <Contact></Contact>
    </Layout>
  )
}