import { SectionTitle } from "./SectionTitle";

import CardSlider from "./Slider";
const Projects = () => {
  return (
    <section role="region" aria-label="Projects Section">
      <SectionTitle title="PROJECTS" iconName="console" />
        <CardSlider />
    </section>
  );
};

export default Projects;
