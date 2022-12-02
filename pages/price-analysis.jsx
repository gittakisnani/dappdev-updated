import PriceChart from '../components/content/Price/PriceChart'
import PriceRight from '../components/content/Price/PriceRight'
import Meta from '../components/Meta'

const PriceAnalysisPage = () => {
  return (
    <>
        <Meta
            title='Price Analysis'
            desc='Price Analysis page'
        />
        <PriceChart />
        <PriceRight />
    </>
  )
}

export default PriceAnalysisPage