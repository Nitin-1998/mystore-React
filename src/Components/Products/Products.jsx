import React from "react";
import head1 from "../../assets/Headphones/head1.jpg";
import watch1 from "../../assets/Headphones/watch1.jpg";
import head2 from "../../assets/Headphones/head2.jpg";
import head3 from "../../assets/Headphones/head3.jpg";
import head4 from "../../assets/Headphones/head4.jpg";
import head5 from "../../assets/Headphones/head5.jpg";
import head6 from "../../assets/Headphones/head6.jpg";
import head7 from "../../assets/Headphones/head7.jpg";
import BrowsButton from "../Buttons/BrowsButton";

const myData = [
  {
    id: 1,
    title: "Best Headphones",
    price: "$ 120",
    img: head1,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "$ 190",
    img: watch1,
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: "$ 80",
    img: head2,
  },
  {
    id: 4,
    title: "Rocy Mountain",
    price: "$ 620",
    img: head3,
  },
  {
    id: 5,
    title: "Best Headphones",
    price: "$ 120",
    img: head4,
  },
  {
    id: 6,
    title: "Office Headphones",
    price: "$ 40",
    img: head5,
  },
  {
    id: 7,
    title: "Hybrid Headphones",
    price: "$ 160",
    img: head6,
  },
  {
    id: 8,
    title: "Printed Headphones",
    price: "$ 320",
    img: head7,
  },
];

const Products = () => {
  return (
    <>
      <main className="py-10 dark:bg-slate-900 dark:text-white ">
        <div className="container">
          <div className="text-center pb-8">
            <h1 className="text-4xl font-bold">Our Products</h1>
            <p className="text-gray-600">Explore Our Products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center place-items-center overflow-hidden gap-10 container ">
            {/* Card Section */}
            {myData.map((data) => {
              return (
                <div data-aos="fade-up" className=" work  " key={data.id}>
                  <div className=" ">
                    {/* image */}
                    <div>
                      {" "}
                      <img
                        className="h-[200px] w-[250px] rounded-2xl "
                        src={data.img}
                      />{" "}
                    </div>
                    {/* text area */}
                    <div>
                      <p className="font-semibold">{data.title}</p>
                      <p className=" font-bold">{data.price}</p>
                    </div>
                  </div>

                  {/* layer */}
                  <div className="layer">
                    <BrowsButton
                      title="Add To Cart"
                      btnBgColor="bg-[#F42C37]"
                      btnTxtColor="text-white"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
