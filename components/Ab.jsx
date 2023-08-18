import Image from "next/image";
import React from "react";
import { animated, useSpring } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 2000,
    config: { duration: 4000, masss: 1, tension: 20, frction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Ab = () => {
  return (
    <div className="w-full h-full relative flex lg:flex-col flex-col-reverse lg:py-3">
      <div className=" lg:relative w-full py-10 lg:py-1  lg:w-4/5 mx-auto rounded-lg -top-10 lg:h-[150px]  h-full shadow shadow-gray-300 px-5 bg-[#ffffff]  flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex  flex-col items-center justify-center ">
          <div className=" flex flex-row text-4xl font-extrabold  text-blue-500 gap-2">
            {Number({ n: 10 })} Years{" "}
            <span className="text-sm text-orange-300">+</span>
          </div>
          <p class>Of Service</p>
        </div>
        <div className="flex  flex-col items-center justify-center ">
          <div className=" flex flex-row text-4xl font-extrabold  text-blue-500 gap-2">
            {Number({ n: 6 })} Regions{" "}
            <span className="text-sm text-orange-300">+</span>
          </div>
          <p class> NationWide</p>
        </div>
        <div className="flex  flex-col items-center justify-center ">
          <div className=" flex flex-row text-4xl font-extrabold  text-blue-500 gap-2">
            {Number({ n: 100 })} Thousand{" "}
            <span className="text-sm text-orange-300">+</span>
          </div>
          <p class> Members </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row h-full flex-wrap lg:flex-nowrap w-full justify-between">
        <div className="w-full ">
          <img src="https://bit.ly/3JNczv8" alt="hero" className="h-full" />
        </div>
        <div className="w-full border px-5">
          <h2 className="font-bold text-blue-600 text-xl">Who We are</h2>
          <p className="font-bold text-3xl my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            consequuntur necessitatibus dolore reiciendis non vel omnis
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            veniam obcaecati vitae voluptatibus accusantium fugit voluptatem?
            Optio ipsa odit magni, minima voluptates autem placeat, eos nihil
            quibusdam consequuntur perspiciatis mollitia. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit labore dolorum alias
            quae dolorem dolor perferendis praesentium dignissimos. Laboriosam
            qui quisquam voluptate nulla. Nam illo et reprehenderit qui magnam
            nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            veniam obcaecati vitae voluptatibus accusantium fugit voluptatem?
            Optio ipsa odit magni, minima voluptates autem placeat, eos nihil
            quibusdam consequuntur perspiciatis mollitia. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit labore dolorum alias
            quae dolorem dolor perferendis praesentium dignissimos. Laboriosam
            qui quisquam voluptate nulla. Nam illo et reprehenderit qui magnam
            nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            veniam obcaecati vitae voluptatibus accusantium fugit voluptatem?
            Optio ipsa odit magni, minima voluptates autem placeat, eos nihil
            quibusdam consequuntur perspiciatis mollitia. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit labore dolorum alias
            quae dolorem dolor perferendis praesentium dignissimos. Laboriosam
            qui quisquam voluptate nulla. Nam illo et reprehenderit qui magnam
            nemo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ab;
