import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f8f8f8] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-extrabold mb-4 text-blue-700">
              Welcome to Basic Academy
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At Basic Academy, we are dedicated to transforming lives through
              education and nurturing the leaders of tomorrow. Our journey began
              with a simple yet powerful belief: Education should be
              accessible, engaging, and transformative.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Our academy is more than just an institution; it's a community of
              learners, thinkers, and dreamers. We foster an environment where
              creativity, innovation, and curiosity thrive. As we expand our
              horizons and adapt to the ever-changing educational landscape,
              our commitment to excellence remains unwavering.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Join us on this journey of knowledge, growth, and discovery. Let
              us introduce you to the heart and soul of Basic Academy.
            </p>
          </div>
          <div className="md:col-span-1">
            <img
              src="https://assets.materialup.com/uploads/8510e7d6-782e-4e07-b60e-7d2573c6de46/preview.gif"
              alt="Academy Building"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            Our Mission
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Our mission is to empower individuals from all walks of life
            through accessible and high-quality education. We believe that
            education has the power to transform lives, bridge gaps, and open
            doors to endless possibilities.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            We are dedicated to:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-8">
            <li>
              Providing world-class educational resources and experiences.
            </li>
            <li>
              Fostering a diverse and inclusive learning community.
            </li>
            <li>
              Inspiring lifelong learning and personal growth.
            </li>
            <li>
              Nurturing critical thinking, creativity, and innovation.
            </li>
            <li>
              Preparing our students for success in a rapidly changing world.
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            Our Approach
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            What sets Basic Academy apart is our innovative and learner-centric
            approach to education. We understand that every student is unique,
            and we celebrate those differences.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Our approach includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-8">
            <li>
              Personalized learning experiences tailored to individual needs.
            </li>
            <li>
              Engaging and interactive course content.
            </li>
            <li>
              Dedicated and passionate instructors.
            </li>
            <li>
              Accessible and flexible learning options.
            </li>
            <li>
              Opportunities for hands-on experience and real-world application.
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            Our Community
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Basic Academy is more than an educational institution; it's a
            vibrant and supportive community. Our students, alumni, faculty,
            and staff form the heart and soul of our academy.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            We are proud of our diverse and inclusive community, where
            individuals from different backgrounds come together to learn,
            collaborate, and inspire one another.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Join us in shaping the future of education and creating a better
            world through knowledge and learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
