import React from 'react'
const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1769012773~exp=1769016373~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=1a4e138201c76ab60cfc7e2ef6daacf54eae1f5cfb398faa9f2c227667728aa3&r=dXMtZWFzdDE%3D"
      />
    </div>
  )
}
export default Video