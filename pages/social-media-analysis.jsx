import LeftSocialMedia from '../components/content/socialmedia/LeftSocialMedia'
import RightSocialMedia from '../components/content/socialmedia/RightSocialMedia'
import Meta from '../components/Meta'

const SocialMediaAnalysis = () => {
  return (
    <>
        <Meta
        title='Social Media'
        desc='Social Media page'
        />
        <LeftSocialMedia />
        <RightSocialMedia />
    </>
  )
}

export default SocialMediaAnalysis