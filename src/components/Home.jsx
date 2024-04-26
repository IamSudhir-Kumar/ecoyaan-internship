import { useEffect } from "react";
import { gsap } from "gsap";


const Home = () => {
  useEffect(() => {
    // Animation for loading grid
    gsap.from(".grid", { opacity: 0, duration: 1, stagger: 0.2 });

    // // Animation for navbar
    // gsap.from("nav", { opacity: 0, duration: 1, delay: 1 });

    // Animation for background picture
    gsap.from(".bg-image", { opacity: 0, duration: 1, delay: 1.5 });
  }, []);

  return (
    <div className="mt-5 pb-10">
      <div className="flex justify-center items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="col-start-3 col-end-4 row-start-1 row-end-8 border">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-4xl border-black bg-[#436850] px-4 py-0 text-center">
              <h2 className="font-bold text-2xl text-left">
                Join our community in creating a more sustainable future for everyone
              </h2>
              <p className="text-left">
                At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
                Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information
                about climate change, the latest updates on climate policies and lifestyle tips that
                you can adopt to reduce your impact on the environment.
              </p>
              <img src="/OurStory4-removebg-preview.png" className="bg-image" alt="background" />
            </div>
          </div>
          <div className="col-start-1 col-end-3 row-span-3 md:row-span-4 bg-[url('/1.png')] bg-cover border rounded-3xl flex flex-col px-10 py-16">
            <h1 className="text-4xl font-bold text-left text-black mb-4">Buy Less, Buy Better</h1>
            <p className="text-lg text-left text-black">Authentic source of truth for your sustainability needs.</p>
          </div>
          <div className="col-start-1 col-end-2 md:row-span-3 bg-[#FDCB9E] border rounded-3xl p-5 content-center">
            <img src="/image.gif" className="h-80" alt="image" />
          </div>
          <div className="col-start-2 col-end-2 md:row-span-3 flex flex-col justify-center items-center bg-[#3F3F44] border rounded-3xl p-5">
            <h1 className="font-bold text-2xl text-white text-center mb-4">Carefully curated Eco-friendly products</h1>
            <p className="text-white text-center mb-4">We believe that every purchase you make can have a positive impact on the planet and the future.</p>
            <p className="text-white text-center mb-4">Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
            <img src="/icon.gif" alt="icon" className="h-15 w-15 justify-center border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
