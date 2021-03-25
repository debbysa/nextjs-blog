import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  // paths contains the array of known paths returned by getAllPostIds()
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
