import React from "react";
import img1 from "../../assets/Blogs/smartwatch.jpg";
import img2 from "../../assets/Blogs/Gadgets.jpg";
import img3 from "../../assets/Blogs/vrbox.jpg";
import { Link } from "react-router-dom";
const myBlogs = [
  {
    id: 1,
    img: img1,
    title: "How to choose perfect smartwatch",
    date: "Jan 24, 2024",
    author: "Ryle Jacob",
    description:
      "The first thing to know while choosing a smartwatch is to check if it is compatible with your current smartphone. If you have an Android smartphone, the smartwatch should be compatible with it. If you are an iPhone user, the smartwatch you are looking out for should be compatible with it. Some smartwatches are compatible with both Android and iOS. Smartwatches running Googles Wear OS, Samsungs Tizen, and Amazfits OS are compatible with Android and iOS smartphones.Only Apple Watches run the watchOS operating system. They offer much tighter integration with iPhones and Apples services such as Apple Maps, Apple Music, iMessage, Shortcuts, and Siri. It also has the highest collection of apps that are available on any smartwatch platform. However, Apple Watches are only compatible with iPhones, which means you can use them only if you have an iPhone.They come with a few caveats, though. watchOS does not allow you to use third-party watch faces. You can only use the ones that come pre-installed with the Apple Watch or edit them. And the battery life on Apple Watches is relatively shorter than smartwatches from Amazfit, Samsung, and some other brands.",
  },
  {
    id: 2,
    img: img2,
    title: "How to choose perfect gadget",
    date: "September 9, 2016",
    author: "Mohsin Ali Waheed",
    description:
      "Blogging has become one of the easiest ways to work from home and make money. Though along with all this, blogs need an investment, and its important to have essential Blogging tools and gadgets with you all the time to make most out of it.When we talk about Gadgets for Blogger, it means we are not talking about tools like Windows live writer or WordPress,  but talking about awesome Tech products like Laptop, tablet which you should own for better productivity.Some years ago when blogging was initiated no one has ever thought at that time that one day it will be a business and people leave their jobs to continue with there blogging journey. Many bloggers who started blogging as a part-time hobby have left their jobs, and now they are professional bloggers earning handsome amount of money. It’s the field that need constant study and information so that you will always stay one step ahead of your readers.In order to stay informative and active blogger you need some extra things like gadgets to help you around so that you create something magical. So today we will discuss some of the awesome and essential gadgets for Blogger which is necessary for power blogging.",
  },
  {
    id: 3,
    img: img3,
    title: "How to choose perfect VR headset",
    date: "Jauary 30, 2015",
    author: "Andrew Joseph",
    description:
      "Decisions, decisions. What shall I have for dinner? Which is the best virtual reality headset in the UK? Lifes ultimate questions. Although we cant help you answer the former but go with pizza, definitely pizza, we can help you decide which VR headset to buy.To shine some light on the world of  VR headsets we asked Daniel Colaianni, VR expert and Co-founder of VR Bound to guide us through this labyrinth and help us all make the right choice! Here is what he had to say…Depending on what you want to use it for and your expectations for VR there isnt one perfect headset that will suit your needs.Instead: Well need to look at it from the top-down identifying things such as:Whats your Budget What kind of experience are you after? What systems do you already use? Android or a high-end pc? Where will you be using VR?What accessories are available? And, to make it even easier lets start by splitting this up by their price bracket.A low budget VR headset should be affordable and accessible, which makes them perfect for platforms such as Facebook and Youtube.It doesnt take a rocket scientist to know that quality content on social media can reach a HUGE audience. VR experiences are no different and social media platforms are making this tech right at home.As already mentioned, Facebook and YouTube have dived headfirst into the world of VR with their 360 browsers. One popular example is GoPros 360 surf video, which has been viewed over 2.4m times on Facebook.",
  },
];

const BlogCard = () => {
  return (
    <main>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center gap-10 py-10">
          {myBlogs.map((data) => {
            return (
              <div className="max-w-[300px]" key={data.id}>
                <Link 
                state={{data}}
                onClick={()=>window.scrollTo(0,0)}
                to={`/blogs/${data.title}`}>
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl  ">
                    <img
                      className="h-[260px] w-[290px] rounded-2xl hover:scale-125 transition duration-300 delay-300object-cover "
                      src={data.img}
                    />
                  </div>
                  {/* Text content */}
                  <div>
                    <p className="text-gray-600 text-[14px] ">
                      {data.date} by {data.author}
                    </p>
                    <h1>{data.title}</h1>
                    <p className="line-clamp-2">{data.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default BlogCard;
