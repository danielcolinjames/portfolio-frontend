import React from 'react';
import './ChartHoverCard.css';

import PercentageChangeIndicator from '../Global/PercentageChangeIndicator';

import convertArrow from '../../assets/images/ui-icons/icon-arrow-large@3x.png';
import CryptoIcon from 'react-webfont-cryptocoins'


const ChartHoverCardTopBarFrom = (props) => (
  <div className='chartHoverCardTopBarFrom'>
    <CryptoIcon className='chartHoverCardTopBarFromLogo' coin={props.base} />
    <p className='chartHoverCardTopBarFromName'>
      {props.amount && parseFloat(props.amount).toFixed(4)}
    </p>
  </div>
)

const ChartHoverCardTopBarTo = (props) => (
  <div className='chartHoverCardTopBarTo'>
    <p className='chartHoverCardTopBarToAmount'>
      {/* <span className='dollars'> */}
        <CryptoIcon className='chartHoverCardTopBarFromLogo' coin={props.quote} />
        {props.cost && parseFloat(props.cost).toFixed(4)}
      {/* <span className='cents'>.{Math.round((props.amount * props.price) * 100) % 100}</span> */}
    </p>
  </div>
)


const ChartHoverCard = (props) => {
    return (
        <div className='chartHoverCardContainer'>
          <div className='chartHoverCardContent'>

            {/* Top bar */}
            <div className='chartHoverCardTopBarContainer'>
              <div className='chartHoverCardTopBarWrapper'>
                {/* TODO: Conditional logic for swapping the order of "From" and "To" */}
                <div className='chartHoverCardTopBarContent'>
                  {
                    props.side === 'sell' ?
                      <ChartHoverCardTopBarFrom {...props} /> :
                      <ChartHoverCardTopBarTo {...props} />
                  }

                  {/* -> */}
                  <div className='chartHoverCardTopBarArrow'>
                    <img className='chartHoverCardTopBarArrowImg' src={convertArrow} alt="" />
                  </div>

                  {
                    props.side === 'sell' ?
                      <ChartHoverCardTopBarTo {...props} /> :
                      <ChartHoverCardTopBarFrom {...props} />
                  }
                </div>
              </div>
            </div>

            {/* Middle section */}
            <div className='chartHoverCardPriceSectionContainer'>
              <div className='chartHoverCardPriceSectionContent'>
                <p className='chartHoverCardPriceSectionLabel'>
                  Price
                </p>
                <div className='chartHoverCardPriceSectionPriceContainer'>
                  <p className='chartHoverCardPriceSectionPrice'>
                    {/* <span className='dollars'> */}
                      <CryptoIcon className='chartHoverCardTopBarFromLogo' coin={props.quote} />
                      {props.price && parseFloat(props.price.toFixed(4))}
                      {/* {props.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span> */}
                    {/* <span className='cents'>.{Math.round(props.price * 100) % 100}</span> */}
                  </p>
                  <PercentageChangeIndicator valueChange={props.valueChange} />
                </div>
              </div>
            </div>
            {/* <div className='chartHoverCardAverageSectionContainer'>
              <div className='chartHoverCardAverageSectionContent'>
                <p className='chartHoverCardAverageSectionLabel'>
              My Avg. Sell Price
                </p>
                <div className='chartHoverCardAverageSectionPriceContainer'>
              <p className='chartHoverCardAverageSectionPrice'>
              <span className='dollars'>${props.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
              <span className='cents'>.{Math.round(props.price * 100) % 100}</span>
              </p>
              <PercentageChangeIndicator valueChange={props.valueChange} />
                </div>
              </div>
            </div> */}
            <div className='chartHoverCardTimeSectionContainer'>
              <div className='chartHoverCardTimeSectionContent'>
                <p className='chartHoverCardTimeSectionTime'>
                  {props.datetime.format("D MMM Y, h:m a")}
                </p>
              </div>
            </div>
            </div>
        </div>
    );
}

export default ChartHoverCard;
