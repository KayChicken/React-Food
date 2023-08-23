import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props : any) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="87" r="84" /> 
    <rect x="50" y="180" rx="0" ry="0" width="168" height="33" /> 
    <rect x="50" y="224" rx="0" ry="0" width="168" height="47" /> 
    <rect x="50" y="288" rx="0" ry="0" width="168" height="20" />
  </ContentLoader>
)

export default Skeleton