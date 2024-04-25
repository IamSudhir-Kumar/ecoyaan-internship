const AboutUs = () => {
  return (
    <div className="m-7">
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {/* About Company */}
        {/* <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-gray-200 p-8 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">About Company</h2>
          <p className="text-lg">
            [Company Name] is a leading provider of [product/service] dedicated to providing our customers with the best [product/service] available. Since our founding, we have been committed to [mission of the company]. With a focus on innovation and customer satisfaction, we strive to exceed expectations in everything we do.
          </p>
        </div> */}

        {/* Our Values */}
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-gray-300 p-6 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">Quality: We are committed to delivering the highest quality [product/service] to our customers.</li>
            <li className="text-lg">Integrity: We conduct our business with the highest standards of integrity and honesty.</li>
            <li className="text-lg">Innovation: We continually strive to innovate and improve our [product/service] to better serve our customers.</li>
            <li className="text-lg">Customer Satisfaction: Our customers are our top priority, and we are dedicated to providing them with exceptional service and support.</li>
          </ul>
        </div>

        {/* Our Story */}
        <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-[#9EB384] p-6 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">
            [Company Name] was founded in [year] by [founder's name] with the vision of [vision of the company]. Since then, we have grown into a successful and reputable [industry] company, serving thousands of satisfied customers nationwide. Our journey has been filled with challenges and triumphs, but our commitment to excellence has never wavered.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="col-start-2 col-end-4 row-start-2 row-end-3 bg-[#435334] p-6 rounded-xl">
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
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-[#FAF1E4] p-6 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 gap-4">
            <Testimonial name="John Smith" />
            <Testimonial name="Sarah Johnson" />
            <Testimonial name="Alex Davis" />
          </div>
        </div>

        {/* Awards */}
        {/* <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-gray-600 p-6 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Awards</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">Best Customer Service Award</li>
            <li className="text-lg">Innovative Product of the Year</li>
            <li className="text-lg">Top Rated Company</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

const TeamMember = ({ name, role }) => {
  return (
    <div className="bg-white border rounded-lg p-6">
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
    <div className="bg-white border rounded-lg p-6">
      <p className="text-lg italic">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam, metus vel porttitor suscipit, dui dolor fermentum odio, eu ullamcorper sapien lectus at lorem."
      </p>
      <p className="text-lg font-semibold mt-4">- {name}</p>
    </div>
  );
};

export default AboutUs;
