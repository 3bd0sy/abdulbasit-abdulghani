import { SectionTitle } from "./SectionTitle";

import CardSlider from "./Slider";
const Projects = () => {
  return (
    <section>
      <SectionTitle title="PROJECTS" iconName="console" />
      <div className="mt-[90px] mx-auto">
        <CardSlider />
      </div>
    </section>
  );
};

export default Projects;
