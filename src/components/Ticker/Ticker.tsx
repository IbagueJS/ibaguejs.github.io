import './Ticker.scss'

export const Ticker = () => {
  return (
    <div className="ticker">
        <div className="slide-track">
          <div className="slide">
            <img
              src="colombia-dev.svg"
              height="32"
              width="33"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="sociedad-ingenieros.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="ucc.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="unad.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="uni-ibague.png"
              height="32"
              width="250"
              alt=""
            />
          </div>

          {/* repeat */}
          <div className="slide">
            <img
              src="colombia-dev.svg"
              height="32"
              width="33"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="sociedad-ingenieros.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="ucc.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="unad.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="uni-ibague.png"
              height="32"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
  )
}
