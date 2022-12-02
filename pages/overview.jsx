import Head from 'next/head'
import Image from 'next/image'
import Introduction from '../components/content/overview/Introduction'
import Overview from '../components/content/overview/Overview'
import TokenDetails from '../components/content/overview/TokenDetails'
import Meta from '../components/Meta'


export default function Home() {

  return (
    <>
      <Meta
        title='Overview'
        desc='Overview page'
      />
      <Overview />
      <Introduction />
      <TokenDetails />
    </>
  )
}