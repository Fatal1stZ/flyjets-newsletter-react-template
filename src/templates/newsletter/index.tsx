import React, { CSSProperties, Fragment } from 'react';
import newsletter from './newsletter.json'

import { camelCase } from 'lodash';
import classNames from 'classnames';
import { format, parseISO } from 'date-fns';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function EmptyLegs() {
  return (<Fragment>
    <table className="header bg-color-black fs-12 uppercase color-white">
      <tr>
        <td width="25%">
          <span className="ff-roboto-condensed fw-300">For <span className="fw-700">Flyers</span></span>
        </td>
        <td width="50%">
          <img
            className="img-logo"
            src="https://res.cloudinary.com/flyjetsdigital/image/upload/v1604499558/pictures/logo_itgpdy.png"
            alt="logo"/>
        </td>
        <td width="25%">
          <span className="ff-roboto-condensed fw-300">For <span className="fw-700">aircraft providers</span></span>
        </td>
      </tr>
    </table>
    <div className={'ph-25 mt-30 mb-15 fs-16 fw-300 ta-center'}>After much ado, the first edition of our [weekly]
      newsletter and "blog,"
      The FLY Report, launches today. We welcome your feedback and hope you enjoy!
    </div>
    {/* TOP STORIES */}
    <div className={'ph-25 pv-20 bg-color-gray ta-center mb-30'}>
      <div className={'mb-10 uppercase fs-14 fw-400'}>Today's top stories:</div>
      {newsletter.topStories.map(topStory => <div
        className={'mb-5 bg-color-white br-8 ph-15 pv-10'}><a href={topStory.link}
                                                              className={'color-black fw-500 tdec-none'}
                                                              target={'_blank'} rel="noreferrer">{topStory.title}</a>
      </div>)}
      <div className={'mt-25 fs-12'}>Happy flying.</div>
      <div className={'mt-10 mb-10 fs-16'}>🚀</div>
      <div className={'fs-12'}>FLYJETS</div>
    </div>
    {/* TOP ARTICLES */}
    <div className={'mb-40'}>
      <div className={'ph-25 mb-15 fs-18 fw-700'}>TOP ARTICLES</div>
      {newsletter.topArticles.map((topArticle, index) => (<Fragment>
        <div className={'ph-25'}>
          <table className="p-0" cellPadding={0} cellSpacing={0}>
            <tr>
              <td width={'50%'} valign={'top'}>
                <div className={'fw-400 fs-14 color-dark-gray mb-5'}>
                  {format(parseISO(topArticle.published), 'MMM. d')}
                </div>
                <div className={'fw-600 fs-16 mb-5'}>{topArticle.title}</div>
                <div className={'fw-400 fs-13 color-dark-gray mb-15'}>{topArticle.subtitle}</div>
                <div className={'fw-400 fs-12'}><a href={topArticle.link} className={'color-black'} target={'_blank'}
                                                   rel="noreferrer">Read article</a></div>
              </td>
              <td width={'50%'} align={'center'}>
                <img className='ml-25' src={topArticle.cover} alt={topArticle.title} width={'267px'}/>
              </td>
            </tr>
          </table>
        </div>
        {index !== newsletter.topArticles.length -1 && <div className={'bg-color-light-gray line mt-15 mb-15'}/>}
      </Fragment>))}
    </div>
    {/* BUTTONS */}
    <div className={'centered buttons ta-center mb-40'}>
      <a href="https://flyjets.com" target={'_blank'}
         className="button w-280 uppercase ff-roboto-condensed fs-14 fw-700 bg-color-green color-white mr-10"
         rel="noreferrer">BUSINESS JET PRICE MONITOR</a>
      <a href="https://flyjets.com" target={'_blank'}
         className="button w-280 uppercase ff-roboto-condensed fs-14 fw-700 bg-color-black color-white"
         rel="noreferrer">PLATTS' JET FUEL PRICE MONITOR</a>
    </div>
    {/* ALL ARTICLES */}
    <div className={'mb-80'}>
      <div className={'ph-25 mb-15 fs-18 fw-700'}>ALL ARTICLES</div>
      {newsletter.allArticles.map(allArticle => <div className={'bg-color-gray ph-25 pv-15 mb-5 br-8'}>
        <div className={'mb-5 fs-14 color-dark-gray'}>
          {format(parseISO(allArticle.published), 'MMM. d')}
        </div>
        <div className={'fw-600 fs-15 mb-10'}>{allArticle.title}</div>
        <div className={'fw-400 fs-12'}><a href={allArticle.link} className={'color-black'} target={'_blank'}
                                           rel="noreferrer">Read article</a></div>
      </div>)}
    </div>
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
            <a href={'https://www.instagram.com/flyjetsflying'} target={'_blank'} rel="noreferrer">
              <img width="29" height="29"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/7388755e-422f-42cf-ae6f-e250a1c035c2.png"/>
            </a>
          </td>
          <td width="25"></td>
          <td>
            <a href={'https://www.twitter.com/flyjetsflying'} target={'_blank'} rel="noreferrer">
              <img width="29" height="29"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/d3a967ad-6630-4db6-933e-a69f6eaa8790.png"/>
            </a>
          </td>
          <td width="25"></td>
          <td>
            <a href={'https://www.facebook.com/flyjetsflying/'} target={'_blank'} rel="noreferrer">
              <img width="29" height="29"
                   src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/93ef4c20-b3a1-4052-aabf-733c909c97a2.png"/>
            </a>
          </td>
        </tr>
      </table>
      <table className="socials" cellPadding="0" cellSpacing="0" align="center">
        <tr>
          <td colSpan={5}>
            <a href={'https://apps.apple.com/ro/app/flyjets/id1631026300'} target={'_blank'} rel="noreferrer">
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
  </Fragment>);
}

export default EmptyLegs;
