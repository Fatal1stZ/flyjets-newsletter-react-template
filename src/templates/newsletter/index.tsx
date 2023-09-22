import React, { CSSProperties, Fragment } from 'react';
import newsletter from './newsletter.json';

import { camelCase } from 'lodash';
import classNames from 'classnames';
import { format, parseISO } from 'date-fns';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function Newsletter() {
  return (<Fragment>
    {/* HEADER */}
    {/*<div className={'non-mobile'}>*/}
    {/*  <table className="header bg-color-black fs-12 uppercase color-white ">*/}
    {/*    <tr>*/}
    {/*      <td align={'left'}>*/}
    {/*        <img*/}
    {/*          className="img-logo"*/}
    {/*          src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/d1e06636-abe3-47fe-b588-4df414a33b7a.png"*/}
    {/*          alt="logo"/>*/}
    {/*      </td>*/}
    {/*      <td align={'center'}>*/}
    {/*        <span className="ff-roboto-condensed fs-24 fw-400">THE FLY REPORT</span>*/}
    {/*      </td>*/}
    {/*      <td align={'right'}>*/}
    {/*        <span className="ff-roboto-condensed fs-16 fw-400">{format(parseISO('2023-09-18'), 'd MMMM, yyyy')}</span>*/}
    {/*      </td>*/}
    {/*    </tr>*/}
    {/*  </table>*/}
    {/*</div>*/}
    {/* MOBILE HEADER */}
    <div className={'centered bg-color-black color-white ff-roboto-condensed ta-center pv-15 w-100'}>
      <div className={'mb-25'}>
        <img
          className="img-logo"
          src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/d1e06636-abe3-47fe-b588-4df414a33b7a.png"
          alt="logo"/>
      </div>
      <div className={'fs-24 fw-400'}>THE FLY REPORT</div>
      <div className={'fs-16 fw-400'}>{format(parseISO('2023-09-18'), 'd MMMM, yyyy')}</div>
    </div>

    <div className={'ph-25 m-ph-15 mt-30 m-mt-25 mb-15 m-mb-25 fs-16 m-fs-18 fw-300 ta-center'}>After much ado, the
      first edition of our [weekly]
      newsletter and "blog,"
      The FLY Report, launches today. We welcome your feedback and hope you enjoy!
    </div>
    {/* TOP STORIES */}
    <div className={'ph-15 m-ph-0 pv-20 m-pv-25 bg-color-gray ta-center mb-30 m-mb-25'}>
      <div className={'mb-10 uppercase fs-14 m-fs-16 fw-400'}>Today's top stories:</div>
      {newsletter.topStories.map(topStory => <div
        className={'mb-5 bg-color-white br-8 ph-15 pv-10 m-fs-16 m-fw-500'}><a href={topStory.link}
                                                                               className={'color-black fw-500 tdec-none'}
                                                                               target={'_blank'}
                                                                               rel="noreferrer">{topStory.title}</a>
      </div>)}
      <div className={'mt-25 fs-12 m-fs-14'}>Happy flying.</div>
      <div className={'mt-10 mb-10 fs-16'}><img
        src={'https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/6a67bd18-df24-497d-bf60-f5670368c0f7.png'}
        width={16}/></div>
      <div className={'fs-12 m-fs-14'}>FLYJETS</div>
    </div>
    {/* TOP ARTICLES */}
    <div className={'mb-40 m-mb-25'}>
      <div className={'ph-25 mb-15 fs-18 fw-700 m-ta-center'}>TOP ARTICLES</div>
      {newsletter.topArticles.map((topArticle, index) => (<Fragment>
        {/* TOP ARTICLE */}
        <div className={'ph-25 non-mobile'}>
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
                <img className="ml-25" src={topArticle.cover} alt={topArticle.title} width={'267px'}/>
              </td>
            </tr>
          </table>
        </div>
        {/* TOP ARTICLE MOBILE */}
        <div className={'ph-15 mb-20 d-mobile'}>
          <div className={'fw-400 fs-14 color-dark-gray mb-5'}>
            {format(parseISO(topArticle.published), 'MMM. d')}
          </div>
          <div className={'fw-600 fs-16 mb-5'}>{topArticle.title}</div>
          <div className={'fw-400 fs-13 color-dark-gray mb-15'}>{topArticle.subtitle}</div>
          <div className={'mb-10 fw-400 fs-12'}><a href={topArticle.link} className={'color-black'} target={'_blank'}
                                                   rel="noreferrer">Read article</a></div>
          <img className="" src={topArticle.cover} alt={topArticle.title} width={'100%'}/>
        </div>
        {index !== newsletter.topArticles.length - 1 &&
          <div className={'bg-color-light-gray line mt-15 mb-15 non-mobile'}/>}
      </Fragment>))}
    </div>
    {/* BUTTONS */}
    {/*<div className={'non-mobile'}>*/}
    {/*  <table cellSpacing={0} cellPadding={0} width="100%" className={'centered buttons ta-center mb-40 ph-25'}>*/}
    {/*    <tr>*/}
    {/*      <td width={'49%'} className={'mr-10'}>*/}
    {/*        <a href="https://flyjets.com" target={'_blank'}*/}
    {/*           className="button w-100 uppercase ff-roboto-condensed fs-14 fw-700 bg-color-green color-white"*/}
    {/*           rel="noreferrer">BUSINESS JET PRICE MONITOR</a>*/}
    {/*      </td>*/}
    {/*      <td>*/}
    {/*        <div/>*/}
    {/*      </td>*/}
    {/*      <td width={'49%'}>*/}
    {/*        <a href="https://flyjets.com" target={'_blank'}*/}
    {/*           className="button w-100 uppercase ff-roboto-condensed fs-14 fw-700 bg-color-black color-white"*/}
    {/*           rel="noreferrer">PLATTS' JET FUEL PRICE MONITOR</a>*/}
    {/*      </td>*/}
    {/*    </tr>*/}
    {/*  </table>*/}
    {/*</div>*/}
    {/* BUTTONS MOBILE */}
    <div className={'centered buttons ta-center mb-30 ph-15'}>
      <a href="https://flyjets.com" target={'_blank'}
         className="button mb-5 w-100 uppercase ff-roboto-condensed fs-14 fw-700 bg-color-green color-white"
         rel="noreferrer">BUSINESS JET PRICE MONITOR</a>
      <a href="https://flyjets.com" target={'_blank'}
         className="button w-100 uppercase ff-roboto-condensed fs-14 fw-700 bg-color-black color-white"
         rel="noreferrer">PLATTS' JET FUEL PRICE MONITOR</a>
    </div>
    {/* ALL ARTICLES */}
    <div className={'mb-80 m-mb-50'}>
      <div className={'ph-25 mb-15 fs-18 fw-700'}>ALL ARTICLES</div>
      {newsletter.allArticles.map(allArticle => <div className={'bg-color-gray ph-25 pv-15 mb-5 br-8'}>
        <div className={'mb-5 fs-14 color-dark-gray'}>
          {format(parseISO(allArticle.published), 'MMM. d')}
        </div>
        <div className={'fw-600 fs-15 mb-10'}>{allArticle.title}</div>
        <div className={'fw-400 fs-12'}><a href={allArticle.link} className={'color-black'} target={'_blank'}
                                           rel="noreferrer">{allArticle.author}</a></div>
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
    <div className="centered ta-center">
      <div className="socials">
        <a className="tdec-none mr-25" href={'https://www.instagram.com/flyjetsflying'} target={'_blank'}
           rel="noreferrer">
          <img width="29" height="29"
               src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/7388755e-422f-42cf-ae6f-e250a1c035c2.png"/>
        </a>
        <a className="tdec-none mr-25" href={'https://www.twitter.com/flyjetsflying'} target={'_blank'}
           rel="noreferrer">
          <img width="29" height="29"
               src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/d3a967ad-6630-4db6-933e-a69f6eaa8790.png"/>
        </a>
        <a className="tdec-none" href={'https://www.facebook.com/flyjetsflying/'} target={'_blank'} rel="noreferrer">
          <img width="29" height="29"
               src="https://d3k81ch9hvuctc.cloudfront.net/company/SZYCZY/images/93ef4c20-b3a1-4052-aabf-733c909c97a2.png"/>
        </a>
      </div>
    </div>
    <table className="contacts mb-25">
      <tr>
        <td>
            <span>Contact us: <a className="fw-700 color-black"
                                 href="mailto:fly@flyjets.com">FLY@flyjets.com</a> </span>
        </td>
      </tr>
    </table>
    <div className="footer ta-center fs-14 m-fs-12 bg-color-black">
      <div className={'mb-15'}>
        <span className="color-white uppercase">Copyright © 2023 FLY I CORPORATION, All rights reserved.</span>
      </div>
      <div>
        <a className="color-white uppercase fw-700" href="{% unsubscribe_link %}">Unsubscribe</a>
      </div>
    </div>
  </Fragment>);
}

export default Newsletter;
