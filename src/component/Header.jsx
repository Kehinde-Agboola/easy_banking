import React from "react";
import online from "../images/icon-online.svg";
import budget from "../images/icon-budgeting.svg";
import board from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";
const Header = () => {
  return (
    <>
      <section className="sect-1">
        <div className="container text-center p-7  md:text-left">
          <div className="heading max-w-sm">
            <h1>Why choose Easybank?</h1>
            <p className="pt-4">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="groups md:grid md:grid-cols-4 md:gap-5">
            <article>
              <img src={online} alt="" className="w-20 md:w-50 pt-5" />
              <h3 className="pt-5 pb-5"> Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </article>
            <article>
              <img src={budget} alt="" className="w-20 md:w-50 pt-5" />
              <h3 className="pt-5 pb-5">Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </article>
            <article>
              <img src={board} alt="" className="w-20 md:w-50 pt-5" />
              <h3 className="pt-5 pb-5"> Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </article>
            <article>
              <img src={api} alt="" className="w-20 md:w-50 pt-5" />
              <h3 className="pt-5 pb-5">Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
