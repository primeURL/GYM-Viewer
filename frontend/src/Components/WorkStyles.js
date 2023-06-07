import React from 'react';
import WorkStyle from './WorkStyle';
import '../css/workStyles.css';
// import { Outlet } from 'react-router-dom' ;
import bgVideo from '../assets/bg-video.mp4';

const WorkStyles = () => {
  let basicTimerInfo = 'This is basic Time Timer. For New Bies. This is basic Time Timer. This is basic Time Timer. For New Bie';
  let armapInfo = 'This is TABATA Timer. For New Bies. This is TABATA Timer. For New Bies. This is TABATA Timer. For New Bies.';
  let amomTimerInfo = 'This is EMOM. For New Bies. This is TABATA Timer. For New Bies. This is TABATA Timer. For New Bies.';
  let tabataTimerInfo = 'This is TABATA. For New Bies. This is TABATA Timer. For New Bies. This is TABATA Timer. For New Bies. TABATA'
  return (
    <>
      <div className="grid-workStyles">
        <div className="grid-style">
          <WorkStyle
            title="Basic Timer"
            info={basicTimerInfo}
            routePath="/basic" />
        </div>
        <div className="grid-style">
          <WorkStyle
            title="ARMAP Timer"
            info={armapInfo}
            routePath="/armap" />
        </div>
        <div className="grid-style">
          <WorkStyle
            title="EMOM Timer"
            info={amomTimerInfo}
            routePath="/emom" />
        </div>
        <div className="grid-style">
          <WorkStyle
            title="TABATA Timer"
            info={tabataTimerInfo}
            routePath="/tabata" />
        </div>
      </div>
      <video autoPlay muted loop id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </>
  );
}
export default WorkStyles