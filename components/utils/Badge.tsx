import React from 'react';

const Badge = () => {
  return (
    <div className="bz-bdg">
      <a target="_blank" title="BuildZoom.com" href="https://www.buildzoom.com/contractor/metstar-premier-era-innovations?ad_location=co_website">
        <img alt="BuildZoom.com" style={{ width: 230, height: 'auto', border: 0 }} src="https://badges.buildzoom.com/2023/fon1.png"/>
      </a>
      <a target="_blank" href="https://www.buildzoom.com/rockville-md/electricians?ad_location=co_website&bg_ref=92756689">
        Electricians in Rockville
      </a>
      <img src="https://track.buildzoom.com/badge_load?track_id=kGEP05&entity=Contractor&event_type=impression&ad_type=contractor_badge" width="1" height="1" alt=""/>
    </div>
  );
};

export default Badge;