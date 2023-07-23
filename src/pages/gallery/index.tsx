import React from 'react'
import GallerySection from 'src/app/components/GallerySection'
import Layout from 'src/app/components/Layout'
// import SliderV2 from 'src/app/components/SliderV2'

type Props = {}

export default function index({ }: Props) {
  return (
    <Layout>
      {/* <SliderV2></SliderV2> */}
      <GallerySection></GallerySection>
    </Layout>
  )
}