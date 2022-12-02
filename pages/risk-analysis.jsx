import Head from 'next/head'
import Image from 'next/image'
import Priviledges from '../components/content/risk/Priviledges'
import RiskLast from '../components/content/risk/RiskLast'
import RiskMedium from '../components/content/risk/RiskMedium'
import Meta from '../components/Meta'


export default function RiskAnalysis() {

  return (
    <>
        <Meta
            title='Risk Analysis'
            desc='Risk Analysis page'
        />
        <Priviledges />
        <RiskMedium />
        <RiskLast />
    </>
  )
}