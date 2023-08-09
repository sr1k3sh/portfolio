import { GetStaticProps } from 'next'
import React from 'react'
import GallerySection from 'src/app/components/GallerySection'
import Layout from 'src/app/components/Layout'
import { GET_BLOGS_IDS, GET_GALLERY_IMAGES, client } from 'src/utils/config'
// import SliderV2 from 'src/app/components/SliderV2'

type Props = {
  blogData: any
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
    query: GET_GALLERY_IMAGES,
    variables: {
      blogId: params.id
    }
  })



  return {
    props: {
      blogData: data.blog,
      // dataBlogList,
    },
    revalidate: 10,
  }
}

export default function index({ blogData }: Props) {

  // console.log(blogData.data.attributes.blocks[1])
  return (
    <Layout>
      {/* <SliderV2></SliderV2> */}
      <GallerySection galleryData={blogData.data.attributes.blocks[1] || null}></GallerySection>
    </Layout>
  )
}