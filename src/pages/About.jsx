import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import FloatingBtn from "../components/FloatingBtn";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <>
      <FloatingBtn></FloatingBtn>
      <section className="max-container relative">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Vinay
          </span>{" "}
          👋
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Web Developer passionate about building user-friendly interfaces
            with expertise in frontend technologies. My experience in technical
            support informs a practical and problem-aware development style.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center flex-col gap-1">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <div className="text-sm text-zinc-600 text-center">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-zinc-600 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="py-2 font-medium">Tech Stack</div>
                  <div className="techStack flex flex-wrap gap-1">
                    {experience.techStack.map((exp, i) => (
                      <div className="p-1 border bg-[#f6f7f9] text-sm rounded-lg  text-zinc-800 border-zinc-800">
                        {exp}
                      </div>
                    ))}
                  </div>
                  
                  <div className="py-2 font-medium">Other Tools</div>
                  <div className="techStack flex flex-wrap gap-1">
                    {experience.OtherSkills.map((exp, i) => (
                      <div className="p-1 border bg-[#f6f7f9] text-sm rounded-lg  text-zinc-800 border-zinc-800">
                        {exp}
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        {/* <hr className='border-slate-200' /> */}

        {/* <CTA /> */}
      </section>
    </>
  );
};

export default About;
