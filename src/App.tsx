import React, { CSSProperties } from 'react';
import emptyLegs from './emptyLegs.json'
import aircrafts from './aircrafts.json'

import { camelCase } from 'lodash';
import classNames from 'classnames';
import { format, parseISO } from 'date-fns';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const styles: {
  [key in string]: CSSProperties
} = {
  'bg-color-black': {
    background: '#000'
  }
}

function App() {
  return (<>
    <table className="header bg-color-black">
      <tr>
        <td width="25%">
          <span className="color-white fw-300">For <span className="fw-700">Flyers</span></span>
        </td>
        <td width="50%">
          <img
            className="img-logo"
            src="https://res.cloudinary.com/flyjetsdigital/image/upload/v1604499558/pictures/logo_itgpdy.png"
            alt="logo"/>
        </td>
        <td width="25%">
          <span className="color-white fw-300">For <span className="fw-700">aircraft providers</span></span>
        </td>
      </tr>
    </table>
    <table className="featured-flights">
      <tr>
        <td className="fs-22 fw-700 uppercase">Featured flights (empty legs)</td>
      </tr>
      <tr>
        <td className="fs-22 fw-300 uppercase">as of May 1, 2023</td>
      </tr>
    </table>
    <div className="centered">
      <div className="directions">
        {emptyLegs.map(state => (<a href={`#${camelCase(state.state)}`}>
          <table className="direction bg-color-gray">
            <tr>
              <td>
                <span>{state.state}</span>
              </td>
            </tr>
          </table>
        </a>))}
      </div>
    </div>
    {emptyLegs.map((state, i) => (<>
      <table id={`${camelCase(state.state)}`} className="state-header">
        <tr>
          <td className="noWrap">
            <span className="uppercase">{state.state}</span>
          </td>
        </tr>
      </table>
      {state.directions?.map((direction) => (<>
        <table className="direction-header bg-color-black">
          <tr>
            <td className="noWrap">
              <span className="color-white uppercase">{direction.from}</span>
            </td>
            <td width="100%">
              <table className="flex path ph-25">
                <tr>
                  <td>
                    <span className="dot border-color-white"></span>
                  </td>
                  <td width="50%">
                    <div className="flex line-dotted"></div>
                  </td>
                  <td>
                    <img width="18px" height="18px"
                         src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/5da1beec-f817-4a40-83b5-02212ed87fb0.png"/>
                  </td>
                  <td width="50%">
                    <div className="flex line-dotted"></div>
                  </td>
                  <td>
                    <span className="dot border-color-white bg-color-white"></span>
                  </td>
                </tr>
              </table>
            </td>
            <td className="noWrap">
              <span className="color-white uppercase">{direction.to}</span>
            </td>
          </tr>
        </table>
        <table className="main-table mb-25" cellPadding="0" cellSpacing="0">
          <thead>
          <tr className="va-m color-gray">
            <td className={''}>
            </td>
            <td>
              date
            </td>
            <td className={''}>
              <span className={'noWrap'}>depart -</span> arrive
            </td>
            <td>
              class/model
            </td>
            <td>
              price (full / <span className={'noWrap'}><span className={'non-mobile'}> half /</span> share)</span>
            </td>
          </tr>
          </thead>
          {direction.flights.map(flight => (<tr>
            <td className={''}>
              <img width={66} height={50}
                   src={aircrafts.find(aircraft => aircraft.aircraft === flight.aircraft)?.aircraftImageUrl}/>
            </td>
            <td className={''}><span className={'noWrap'}><span
              className={'non-mobile'}>{format(parseISO(flight.dateRange.start), 'ccc, ')}</span>{format(parseISO(flight.dateRange.start), 'M/d')} -</span>
              {' '}<span className={'noWrap'}><span
                className={'non-mobile'}>{format(parseISO(flight.dateRange.start), 'ccc, ')}</span>{format(parseISO(flight.dateRange.end), 'M/d')}
              </span>
            </td>
            <td><span className={'noWrap'}>{flight.departure} -</span> {flight.arrival}</td>
            <td>{flight.aircraft}</td>
            <td width={'100%'}>
              <span
                className={''}><span className={'noWrap'}>{formatter.format(flight.price.full)} /</span> <span className={'noWrap'}><span
                className={'non-mobile'}>{formatter.format(flight.price.half)} / </span>{formatter.format(flight.price.share)}</span> <span className={'non-mobile'}>({flight.numberOfSeatsAvailable})</span>
              </span>
              <div className={'right non-mobile'}>{flight.numberOfSeatsReserved}</div>
            </td>
          </tr>))}
        </table>
        {/*<table className="d-none main-table-mobile mb-25" cellPadding="0" cellSpacing="0">*/}
        {/*  {direction.flights.map(flight => (<tr>*/}
        {/*    <td className="bordered">*/}
        {/*      <table className="main-table-mobile">*/}
        {/*        <tr>*/}
        {/*          <td className="withImage" rowSpan={2}>*/}
        {/*            <img width={66}*/}
        {/*              src={aircrafts.find(aircraft => aircraft.aircraft === flight.aircraft)?.aircraftImageUrl}/>*/}
        {/*          </td>*/}
        {/*          <td>*/}
        {/*            <span*/}
        {/*              className="fw-700 noWrap">{format(parseISO(flight.dateRange.start), 'ccc, M/d')}{flight.dateRange.start && ` - ${format(parseISO(flight.dateRange.end), 'ccc, M/d')}`}</span>*/}
        {/*          </td>*/}
        {/*          <td rowSpan={2} valign="top">*/}
        {/*            <span className="fw-700">{flight.departure} — {flight.arrival}</span>*/}
        {/*          </td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <td>{flight.aircraft}</td>*/}
        {/*        </tr>*/}
        {/*      </table>*/}
        {/*      <table className="main-table-mobile">*/}
        {/*        <tr>*/}
        {/*          <td colSpan={3} className="color-gray">PRICE (Full / Half / Share)</td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <td align="left">{formatter.format(flight.price.full)}</td>*/}
        {/*          <td className="centered">{formatter.format(flight.price.half)}</td>*/}
        {/*          <td align="right">{formatter.format(flight.price.share)} ({flight.numberOfSeatsAvailable})</td>*/}
        {/*        </tr>*/}
        {/*      </table>*/}
        {/*    </td>*/}
        {/*  </tr>))}*/}
        {/*</table>*/}
        <div className={classNames('centered buttons', i === state.directions?.length - 1 && 'last')}>
          <div>
            <a href="https://flyjets.com" target={'_blank'}
               className="button uppercase fs-18 fw-700 bg-color-green color-white">Go to website</a>
          </div>
        </div>
      </>))}

    </>))}
    <table className="bottom">
      <tr>
        <td>
          <span className="fs-24 fw-700 uppercase">Flyjets</span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="fs-16 fw-300 uppercase">FLY I Corporation</span>
        </td>
      </tr>
    </table>
    <div className="centered">
      <table className="socials" cellPadding="0" cellSpacing="0">
        <tr>
          <td>
            <a href={'https://www.instagram.com/flyjetsflying'} target={'_blank'}>
              <img width="29" height="29"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/7388755e-422f-42cf-ae6f-e250a1c035c2.png"/>
            </a>
          </td>
          <td width="25"></td>
          <td>
            <a href={'https://www.twitter.com/flyjetsflying'} target={'_blank'}>
              <img width="29" height="29"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/d3a967ad-6630-4db6-933e-a69f6eaa8790.png"/>
            </a>
          </td>
          <td width="25"></td>
          <td>
            <a href={'https://www.facebook.com/flyjetsflying/'} target={'_blank'}>
              <img width="29" height="29"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/93ef4c20-b3a1-4052-aabf-733c909c97a2.png"/>
            </a>
          </td>
        </tr>
      </table>
      <table className="socials" cellPadding="0" cellSpacing="0" align="center">
        <tr>
          <td colSpan={5}>
            <a href={'https://apps.apple.com/ro/app/flyjets/id1631026300'} target={'_blank'}>
              <img width="120" height="43"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/a2ba51c6-7ee6-4617-8d62-eeb9305cfc64.png"/>
            </a>
          </td>
        </tr>
      </table>
    </div>
    <table className="contacts mb-25">
      <tr>
        <td>
            <span>Contact us: <a className="fw-700 color-black"
                                 href="mailto:fly@flyjets.com">FLY@flyjets.com</a> </span>
        </td>
      </tr>
    </table>
    <table className="footer bg-color-black">
      <tr>
        <td>
          <span className="color-white uppercase">Copyright © 2023 FLY I CORPORATION, All rights reserved.</span>
        </td>
      </tr>
      <tr>
        <td>
          <a className="color-white uppercase fw-700" href="{% unsubscribe_link %}">Unsubscribe</a>
        </td>
      </tr>
    </table>
  </>);
}

export default App;
