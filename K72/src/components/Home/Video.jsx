import React from 'react'
const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1769016806~exp=1769020406~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=f464cb0df718377eb20985a8f26ee12649fe32ef1cbdfede2137cb1c135d7155&r=dXMtZWFzdDE%3D"
      />
    </div>
  )
}
export default Video