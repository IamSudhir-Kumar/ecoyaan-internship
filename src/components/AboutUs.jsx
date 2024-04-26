import { useEffect } from "react";
import { gsap } from "gsap";

import { SiAuth0, SiTrustpilot } from "react-icons/si"
import { GiImpactPoint } from "react-icons/gi";


const AboutUs = () => {
  useEffect(() => {
    // Animation for grid loading
    gsap.from(".grid", { opacity: 0, duration: 1, stagger: 0.2 });

    // Animation for text sections
    gsap.from(".text-section", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });

    // Animation for team members
    gsap.from(".team-member", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <div className="m-7 mt-16 md:flex">
      <div className="grid grid-cols-3 gap-6">
        {/* About Company */}
        <div className="col-start-1 col-end-3  bg-yellow-300 p-8 rounded-xl content-between text-section">
          <h2 className="text-3xl font-semibold mb-4"> About Ecoyaan</h2>
          <p className="text-lg">
          At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
          </p>
          <p className="text-lg mb-2">
          We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
          </p>
          <ul className="text-lg text-left mb-6">
            <li className="flex">
              <img src="/d.png" className="h-5 w-5 mx-4"/>
             <p>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</p>
            </li>

            <li className="flex">
            <img src="/d.png" className="h-5 w-5 mx-4"/>
            Videos, posts, and quizzes on climate change and sustainability
            </li>

            <li className="flex">
            <img src="/d.png" className="h-5 w-5 mx-4"/>
            Events and pledges that invite you to adopt a more sustainable lifestyle
            </li>
          </ul>

          <h1 className="text-3xl font-semibold mb-4">
          For businesses that care deeply about sustainability
          </h1>

          <p className="text-lg">
          Do you run a business that is committed to sustainability in every aspect of your work?
          </p>

          <p className="text-lg">
          Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
          </p>

          <p className="text-lg">
          If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:
          </p>
          <button className="bg-green-300 hover:bg-white transition duration-300 ease-in-out text-black font-semibold py-2 px-10 border rounded-full shadow text-base my-5">
      Contact us
      </button>

      <img src="/e.png" />
        </div>

        {/* Our Values */}
        <div className="col-span-1 bg-green-300 p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul>
            <li className="text-lg mb-4">
              <span className="flex text-2xl font-bold">   <img src="/a.gif" className="h-14 w-14"/> Trust:</span> We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.
            </li>
            <li className="text-lg mb-4">
            <span className="flex text-2xl font-bold">   <img src="/b.gif" className="h-14 w-14"/> Impact:</span> We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.
            </li>
            <li className="text-lg mb-4">
            <span className="flex text-2xl font-bold">   <img src="/c.gif" className="h-14 w-14"/> Authenticity :</span> We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.
            </li>
            <li className="text-lg mb-4">
              <span className="flex text-2xl font-bold">
               <img src='/d.gif' className="h-14 w-14"/>
                Fun & Engaging:
                </span> Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.
            </li>
          </ul>
        </div>

        {/* Our Story */}
        <div className="col-span-3 bg-[#9EB384] p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission.
          </p>
          <p className="text-lg">
            Our research suggests that many Indians understand global warming, yet
            access to sustainable practices and products remains limited. We also noticed
            that there is a lack of support for eco-friendly businesses.
          </p>
          <p className="text-lg">
            We created Ecoyaan to connect consumers, businesses, and sustainability experts.
            We want to make it easy and convenient for people to access eco-friendly products
            and services, learn and share best practices, and support sustainability initiatives.
          </p>
          <p className="text-lg">
            As founders, we are not perfect, but we are passionate. We believe that every small
            step matters. Join us and be a part of the Ecoyaan community — together, we’ll make
            a difference.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="col-span-2 bg-[#435334] p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMember name="John Doe" role="CEO" />
            <TeamMember name="Jane Smith" role="COO" />
            <TeamMember name="David Johnson" role="CTO" />
            <TeamMember name="Emily Williams" role="Marketing Manager" />
            <TeamMember name="Michael Brown" role="Sales Manager" />
            <TeamMember name="Jessica Davis" role="HR Manager" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="col-span-1 row-span-2 bg-[#FAF1E4] p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 gap-4">
            <Testimonial name="John Smith" />
            <Testimonial name="Sarah Johnson" />
            <Testimonial name="Alex Davis" />
          </div>
        </div>

        {/* Awards */}
        <div className="col-span-2 bg-blue-400 p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Awards</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">Best Customer Service Award</li>
            <li className="text-lg">Innovative Product of the Year</li>
            <li className="text-lg">Top Rated Company</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role }) => {
  return (
    <div className="bg-white border rounded-lg p-6 team-member">
      <div className="flex flex-col items-center">
        <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} alt={name} className="w-32 h-32 rounded-full mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-lg text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const Testimonial = ({ name }) => {
  return (
    <div className="bg-white border rounded-lg p-6 text-section">
      <p className="text-lg italic">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, metus vel porttitor suscipit, dui dolor fermentum odio, eu ullamcorper sapien lectus at lorem."
      </p>
      <p className="text-lg font-semibold mt-4">- {name}</p>
    </div>
  );
};

export default AboutUs;
