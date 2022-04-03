import React from "react";

const Blog = () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <h2 className="text-center text-3xl font-bold mt-6">
          Our Blogs Articles
        </h2>
        <div class="container px-5 py-14 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <img
                  className="border-4 mt-4 p-1 border-yellow-400"
                  src="https://miro.medium.com/max/1400/1*Yo1nkzOAMihE8Ia5O411PQ.jpeg"
                  alt="context"
                />
                <span class="mt-2 text-center text-gray-500 text-sm">
                  4 April 2022
                </span>
              </div>
              <div class="md:flex-grow mx-5">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is Context API?
                </h2>
                <p class="leading-relaxed">
                  A React app may use the React Context API to generate global
                  variables that can be passed around. This is an alternative to
                  "prop drilling," which entails passing props from grandparent
                  to child to parent and so on. Context is also marketed as a
                  simpler, lighter way to Redux state management. Context API is
                  a (sort of) new feature in React 16.3 that allows you to
                  easily and lightly communicate state across the entire project
                  (or portion of it).
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <img
                  className="border-4 mt-4 p-1 border-yellow-400"
                  src="https://theadvansity.com/wp-content/uploads/2021/06/HTML5-Semantic-Elements.jpg-copy.jpg"
                  alt="context"
                />
                <span class="mt-2 text-center text-gray-500 text-sm">
                  4 April 2022
                </span>
              </div>
              <div class="md:flex-grow mx-5">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is Semantic Tag?
                </h2>
                <p class="leading-relaxed">
                  A semantic element's defining feature is that it communicates
                  its meaning to both the developer and the browser. Its content
                  is clearly defined by these aspects. Search engines and other
                  user devices can employ semantic HTML tags to identify the
                  importance and context of online pages. It's much simpler to
                  comprehend pages containing meaningful components. It is more
                  easily accessible. It provides a superior user experience.
                  Some semantic tags are header, nav, section, article, aside,
                  footer etc.
                </p>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <img
              className="border-4 mt-4 p-1 border-yellow-400"
              src="https://i.ytimg.com/vi/hgoFi0fCv3w/maxresdefault.jpg"
              alt="context"
            />
            <span class="mt-2 text-center text-gray-500 text-sm">
              4 April 2022
            </span>
              </div>
              <div class="md:flex-grow mx-5">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p class="leading-relaxed">
                inline-block introduced a new technique to build side-by-side boxes that collapse and wrap appropriately based on the amount of space available in the contained element. It simplifies the creation of layouts that previously required the use of floats. There's no need to clear floats any more.

                The main distinction between inline-block and display: inline is that inline-block allows you to specify the element's width and height. Also, top and bottom margins and paddings are ignored with display: inline, but they are respected with display: inline-block.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
