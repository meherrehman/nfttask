import React from 'react'
import Footer from '../components/footer';
import Scroller from '../components/Scroller';


const NewsLetter = () => {
  return (
    <div>
      <section
        className="jumbotron breadcumb no-bg"
        style={{ backgroundImage: 'url("./img/background/8.jpg")' }}
      >
        <div className="mainbreadcumb" bis_skin_checked={1}>
          <div className="container" bis_skin_checked={1}>
            <div className="row align-items-center" bis_skin_checked={1}>
              <div
                className="col-lg-5 text-light wow fadeInRight"
                data-wow-delay=".5s"
                bis_skin_checked={1}
              >
                <div className="spacer-10" bis_skin_checked={1} />
                <h1>Sign up for Listmonk, Ideal’s newsletter!</h1>
                <p className="lead">
                  Sign up to receive our monthly newsletter, featuring updates from
                  the team, new decentralized applications and NFT projects, and
                  trends we’re seeing in the space.
                </p>
              </div>
              <div
                className="col-lg-4 offset-lg-2 wow fadeIn"
                data-wow-delay=".5s"
                bis_skin_checked={1}
              >
                <div className="box-login" bis_skin_checked={1}>
                  <h3 className="mb10">Subscription</h3>
                  <p>
                    Enter your email and your name (optional) to subscribe to our
                    newsletter.
                  </p>
                  <form
                    name="contactForm"
                    id="contact_form"
                    className="form-border"
                    method="post"
                  >
                    <div className="field-set" bis_skin_checked={1}>
                      <div bis_skin_checked={1}>
                        <h5>Email address</h5>
                        <input
                          label="Email address"
                          placeholder="Enter your email"
                          type="email"
                          name="email"
                          required=""
                          id="item_title"
                          className="form-control error"
                          defaultValue=""
                        />
                        <div
                          className="MuiBox-root jss997 jss996"
                          bis_skin_checked={1}
                        >
                          Email is required
                        </div>
                        <div className="spacer-10" bis_skin_checked={1} />
                      </div>
                    </div>
                    <div className="field-set" bis_skin_checked={1}>
                      <div bis_skin_checked={1}>
                        <h5>Name (optional)</h5>
                        <input
                          label="Name (optional)"
                          placeholder="Enter your name"
                          type="text"
                          name="name"
                          id="item_title"
                          className="form-control"
                          defaultValue=""
                        />
                        <div className="spacer-10" bis_skin_checked={1} />
                      </div>
                    </div>
                    <div className="field-set" bis_skin_checked={1}>
                      <input type="hidden" name="l" defaultValue="" />
                    </div>
                    <div className="field-set" bis_skin_checked={1}>
                      <input
                        style={{ background: "#858194;" }}
                        type="submit"
                        className="btn-main"
                        disabled=""
                        defaultValue="SUBSCRIBE"
                      />
                    </div>
                    <div className="clearfix" bis_skin_checked={1} />
                    <div className="spacer-single" bis_skin_checked={1} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Scroller/>

      <Footer />
    </div>

  )
}

export default NewsLetter
