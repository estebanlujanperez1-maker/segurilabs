import React from "react";

const teamMembers = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder & CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",

    bio: "Leslie leads the strategic vision of the company and oversees international partnerships, innovation processes, and product development. Her professional career combines leadership, technology, and digital transformation for enterprise organizations.",

    experience: [
      "12+ years leading software and technology companies.",
      "Directed international digital transformation projects.",
      "Managed multidisciplinary teams across North America and Europe.",
      "Specialized in product strategy and innovation leadership.",
    ],

    education: [
      "Master's Degree in Computer Science - Stanford University.",
      "Bachelor's Degree in Digital Media & Communication.",
      "Executive Leadership Program - Harvard Business School.",
    ],

    skills: [
      "Leadership",
      "Product Strategy",
      "Innovation",
      "Business Development",
      "Digital Transformation",
    ],

    professionalProjects: [
      "Directed the launch of an enterprise SaaS platform used by more than 200 companies worldwide.",
      "Led the redesign of a financial management system that improved operational efficiency by 45%.",
      "Coordinated the implementation of AI-based automation tools for international clients.",
    ],

    personalProjects: [
      "Founder of a mentorship community for women in technology.",
      "Develops educational workshops for young programmers.",
      "Passionate about photography and independent creative projects.",
    ],
  },

  {
    name: "Michael Foster",
    role: "Co-Founder & CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",

    bio: "Michael is responsible for the technical architecture of the company and the development of secure and scalable infrastructures. His expertise focuses on cloud systems, cybersecurity, and enterprise backend engineering.",

    experience: [
      "10+ years working in cloud computing and enterprise systems.",
      "Designed infrastructures supporting millions of users.",
      "Led DevOps and backend engineering teams internationally.",
      "Implemented advanced cybersecurity frameworks for fintech projects.",
    ],

    education: [
      "Bachelor's Degree in Network Engineering - MIT.",
      "AWS Certified Solutions Architect.",
      "Advanced Certification in Cloud Security.",
    ],

    skills: [
      "Cloud Architecture",
      "Cybersecurity",
      "DevOps",
      "Backend Engineering",
      "Infrastructure Design",
    ],

    professionalProjects: [
      "Architected a multi-region cloud infrastructure reducing operational costs by 40%.",
      "Developed secure authentication systems for enterprise platforms.",
      "Led migration of legacy systems into scalable cloud environments.",
    ],

    personalProjects: [
      "Builds open-source tools for developer communities.",
      "Creates drone photography content during his travels.",
      "Collaborates in local STEM education initiatives.",
    ],
  },

  {
    name: "Dries Vincent",
    role: "Business Relations Director",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",

    bio: "Dries specializes in international business expansion, strategic negotiations, and enterprise growth. He focuses on building long-term relationships and creating opportunities in global markets.",

    experience: [
      "15+ years in business development and commercial strategy.",
      "Negotiated enterprise agreements with multinational companies.",
      "Managed expansion projects in LATAM and Europe.",
      "Specialized in strategic partnerships and investor relations.",
    ],

    education: [
      "Bachelor's Degree in Business Administration - Wharton School.",
      "MBA in International Business.",
      "Certification in Corporate Negotiation & Leadership.",
    ],

    skills: [
      "Business Strategy",
      "Negotiation",
      "Project Management",
      "International Relations",
      "Market Expansion",
    ],

    professionalProjects: [
      "Secured long-term contracts with international enterprise clients.",
      "Led commercial expansion projects into emerging technology markets.",
      "Developed strategic partnerships with fintech and software companies.",
    ],

    personalProjects: [
      "Founder of a local entrepreneurship networking community.",
      "Writes articles about innovation and modern business culture.",
      "Volunteers in educational programs for young entrepreneurs.",
    ],
  },
];

export default function Infnosotros() {
  return (
    <section className="bg-white min-h-screen py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-10">

        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-4 mb-14 lg:mb-0 lg:sticky lg:top-10 self-start">

          <div className="border border-gray-200 rounded-3xl p-8 bg-white">

            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              Our Team
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-black leading-tight">
              Meet the people behind our company
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our team combines leadership, engineering, innovation, and
              business strategy to create modern digital solutions for growing
              companies around the world.
            </p>

            <div className="mt-10 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 leading-relaxed">
                Beyond technology and business, every member of our team is
                involved in personal initiatives, mentorship programs, creative
                communities, and educational projects.
              </p>
            </div>

          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="lg:col-span-8 space-y-14">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-6 sm:p-8 bg-white"
            >

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* FOTO + INFO */}
                <div className="md:col-span-5">

                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full max-w-[220px] rounded-2xl object-cover"
                  />

                  <div className="mt-5">
                    <h3 className="text-2xl font-bold text-black">
                      {member.name}
                    </h3>

                    <p className="text-sm font-medium text-gray-500 mt-1">
                      {member.role}
                    </p>

                    <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* INFORMACION */}
                <div className="md:col-span-7 space-y-8">

                  {/* EXPERIENCE */}
                  <div>
                    <h4 className="text-base font-semibold text-black mb-3">
                      Professional Experience
                    </h4>

                    <ul className="space-y-2">
                      {member.experience.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 leading-relaxed flex gap-2"
                        >
                          <span>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EDUCATION */}
                  <div>
                    <h4 className="text-base font-semibold text-black mb-3">
                      Education
                    </h4>

                    <ul className="space-y-2">
                      {member.education.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 leading-relaxed flex gap-2"
                        >
                          <span>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PROFESSIONAL PROJECTS */}
                  <div>
                    <h4 className="text-base font-semibold text-black mb-3">
                      Professional Projects
                    </h4>

                    <ul className="space-y-2">
                      {member.professionalProjects.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 leading-relaxed flex gap-2"
                        >
                          <span>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PERSONAL PROJECTS */}
                  <div>
                    <h4 className="text-base font-semibold text-black mb-3">
                      Personal Projects & Interests
                    </h4>

                    <ul className="space-y-2">
                      {member.personalProjects.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 leading-relaxed flex gap-2"
                        >
                          <span>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SKILLS */}
                  <div>
                    <h4 className="text-base font-semibold text-black mb-3">
                      Core Skills
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full border border-gray-300 text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}