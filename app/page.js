export default function Home() {
  return (
    <section id="home" className="welcome-hero">
      <div className="container">
        <div className="welcome-hero-txt">
          <h2>get your desired car in resonable price</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.
          </p>
          <button className="welcome-btn">contact us</button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="model-search-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <div className="single-model-search">
                    <h2>select year</h2>
                    <div className="model-select-icon">
                      <select className="form-control">

                        <option value="default">year</option>

                        <option value="2018">2018</option>

                        <option value="2017">2017</option>
                        <option value="2016">2016</option>

                      </select>
                    </div>
                  </div>
                  <div className="single-model-search">
                    <h2>body style</h2>
                    <div className="model-select-icon">
                      <select className="form-control">

                        <option value="default">style</option>

                        <option value="sedan">sedan</option>

                        <option value="van">van</option>
                        <option value="roadster">roadster</option>

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <div className="single-model-search">
                    <h2>select make</h2>
                    <div className="model-select-icon">
                      <select className="form-control">

                        <option value="default">make</option>

                        <option value="toyota">toyota</option>

                        <option value="holden">holden</option>
                        <option value="maecedes-benz">maecedes-benz.</option>

                      </select>
                    </div>
                  </div>
                  <div className="single-model-search">
                    <h2>car condition</h2>
                    <div className="model-select-icon">
                      <select className="form-control">

                        <option value="default">condition</option>

                        <option value="something">something</option>

                        <option value="something">something</option>
                        <option value="something">something</option>

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <div className="single-model-search">
                    <h2>select model</h2>
                    <div className="model-select-icon">
                      <select className="form-control">

                        <option value="default">model</option>

                        <option value="kia-rio">kia-rio</option>

                        <option value="mitsubishi">mitsubishi</option>
                        <option value="ford">ford</option>

                      </select>
                    </div>
                  </div>
                  <div className="single-model-search">
                    <h2>select price</h2>
                    <div className="model-select-icon">
                      <select className="form-control">

                        <option value="default">price</option>

                        <option value="$0.00">$0.00</option>

                        <option value="$0.00">$0.00</option>
                        <option value="$0.00">$0.00</option>

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-12">
                  <div className="single-model-search text-center">
                    <button className="welcome-btn model-search-btn" >
                      search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}
