import LeftReport from '../components/content/report/LeftReport'
import ReportChart from '../components/content/report/ReportChart'
import RightReport from '../components/content/report/RightReport'
import Meta from '../components/Meta'

const AuditReport = () => {
  return (
    <>
        <Meta
            title='Audit Report'
            desc='Audit Report page'
        />
        <LeftReport />
        <ReportChart />
        <RightReport />
    </>
  )
}

export default AuditReport