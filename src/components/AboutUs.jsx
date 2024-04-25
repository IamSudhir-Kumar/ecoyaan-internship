import { useEffect } from "react";
import { gsap } from "gsap";

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
    <div className="m-7">
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {/* About Company */}
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-yellow-300 p-8 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">About Company</h2>
          <p className="text-lg">
            [Company Name] is a leading provider of [product/service] dedicated to providing our customers with the best [product/service] available. Since our founding, we have been committed to [mission of the company]. With a focus on innovation and customer satisfaction, we strive to exceed expectations in everything we do.
          </p>
        </div>

        {/* Our Values */}
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-green-300 p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.032 2.113c.235-.52.908-.738 1.433-.496l7.188 3.25c.524.237.742.91.507 1.43L14.52 16.28c-.234.522-.907.74-1.432.498l-7.19-3.25c-.523-.236-.743-.91-.507-1.43l4.82-10.75zM12 11a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              Trust: We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.
            </li>
            <li className="text-lg flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.032 2.113c.235-.52.908-.738 1.433-.496l7.188 3.25c.524.237.742.91.507 1.43L14.52 16.28c-.234.522-.907.74-1.432.498l-7.19-3.25c-.523-.236-.743-.91-.507-1.43l4.82-10.75zM12 11a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              Impact: We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.
            </li>
            <li className="text-lg flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.032 2.113c.235-.52.908-.738 1.433-.496l7.188 3.25c.524.237.742.91.507 1.43L14.52 16.28c-.234.522-.907.74-1.432.498l-7.19-3.25c-.523-.236-.743-.91-.507-1.43l4.82-10.75zM12 11a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              Authenticity: We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.
            </li>
            <li className="text-lg flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.032 2.113c.235-.52.908-.738 1.433-.496l7.188 3.25c.524.237.742.91.507 1.43L14.52 16.28c-.234.522-.907.74-1.432.498l-7.19-3.25c-.523-.236-.743-.91-.507-1.43l4.82-10.75zM12 11a1 1 0 11-2 0 1 1 0 012 0zm0-4a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              Fun & Engaging: Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.
            </li>
          </ul>
        </div>

        {/* Our Story */}
        <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-[#9EB384] p-6 rounded-xl text-section">
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
          <p>
            As founders, we are not perfect, but we are passionate. We believe that every small
            step matters. Join us and be a part of the Ecoyaan community — together, we’ll make
            a difference.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="col-start-2 col-end-4 row-start-2 row-end-3 bg-[#435334] p-6 rounded-xl text-section">
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
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-[#FAF1E4] p-6 rounded-xl text-section">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 gap-4">
            <Testimonial name="John Smith" />
            <Testimonial name="Sarah Johnson" />
            <Testimonial name="Alex Davis" />
          </div>
        </div>

        {/* Awards */}
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-blue-400 p-6 rounded-xl text-section">
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
