import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
      <h3 className="text-center mt-5 font-bold text-3xl text-blue-600">About Us</h3>
        <div class="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://m.media-amazon.com/images/I/611ChA2iZAL._AC_SY355_.jpg"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              Newmind USB Handheld Fan Desk Fan!
            </h1>
            <p class="mb-8 leading-relaxed">
              Improved aerodynamics, feel the comfort of natural wind, larger
              than ordinary fans on the market, softer air, larger blowing
              range, and higher comfort feelings
            </p>
          </div>
          <div>
            <ul>
              <li>
                <FontAwesomeIcon
                  className="text-green-600 text-xl"
                  icon={faCheckCircle}
                />
                <span className="mx-2">
                  Mini handheld fan, compact and portable.
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-600 text-xl"
                  icon={faCheckCircle}
                />
                <span className="mx-2">
                  One key switch, easy to operate, lightly press to turn on, and
                  then press to turn off.
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-600 text-xl"
                  icon={faCheckCircle}
                />
                <span className="mx-2">
                  Convenient Table Cooling for Hiking Desktop Bedroom Household
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-green-600 text-xl"
                  icon={faCheckCircle}
                />
                <span className="mx-2">
                it can be held by hand or stand on the desktop, meeting various environmental requirements.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
