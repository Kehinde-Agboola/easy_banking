import React from "react";
import confetti from "../images/image-confetti.jpg";
import currency from "../images/image-currency.jpg";
import plane from "../images/image-plane.jpg";
import rest from "../images/image-restaurant.jpg";
const Articules = () => {
  return (
    <>
      <section className="sect-2 ">
        <div className="container articule">
          <div className="heading text-center md:text-left">
            <h1>Latest Articles</h1>
          </div>
          <div className="groups md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-5 placecontent-center text-left">
            <article className="rounded-b-lg shadow-lg">
              <img
                src={currency}
                alt=""
                className="rounded-t-lg md:object-cover"
              />
              <p className="p-2 px-3">By Claire Robinson</p>
              <h3 className="pt-2 px-3">
                Receive money in any currency with no fees
              </h3>
              <p className="p-2 px-3 pb-5">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </article>
            <article className="rounded-b-lg shadow-lg">
              <img src={rest} alt="" className="rounded-t-lg md:object-cover" />
              <p className="p-2 px-3">By Wilson Hutton</p>
              <h3 className="pt-2 px-3 ">
                Treat yourself without worrying about money
              </h3>
              <p className="p-2 px-3 pb-5">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </article>
            <article className="rounded-b-lg shadow-lg  ">
              <img
                src={plane}
                alt=""
                className="rounded-t-lg md:object-cover"
              />
              <p className="p-2 px-3">By Wilson Hutton</p>
              <h3 className="pt-2 px-3 ">
                Take your Easybank card wherever you go
              </h3>
              <p className="p-2 px-3 pb-5">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </article>
            <article className="rounded-b-lg shadow-lg ">
              <img
                src={confetti}
                alt=""
                className="rounded-t-lg md:object-cover"
              />
              <p className="p-2 px-3">By Claire Robinson</p>
              <h3 className="pt-2 px-3 ">
                Our invite-only Beta accounts are now live!
              </h3>
              <p className="p-2 px-3 pb-5">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articules;
