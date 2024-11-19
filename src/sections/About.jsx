import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' bhawanak768@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Bhawana Kumari</p>
              <p className="grid-subtext">
              I’m a curious explorer in the world of Computer Science, currently pursuing my B.Tech. With a blend of creativity and logic, I’m driven to solve complex problems and push the boundaries of what technology can do. 
              My journey is fueled by a passion to turn ideas into impactful solutions, and I’m excited about shaping the future with innovative tech.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I thrive at the intersection of creativity and technology, wielding programming languages like Python, C++, and Java to bring innovative ideas to life. 
              With a robust foundation in databases, data structures, and algorithms, I’m equipped to tackle complex challenges. My passion for understanding computer systems and networks fuels my ability to create seamless, scalable applications that make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
  <p className="grid-headtext">Eager for New Opportunities</p>
  <p className="grid-subtext">
    As a B.Tech student in Computer Science, I thrive on the flexibility of working across various time zones and locations. 
    I’m enthusiastic about discovering opportunities that resonate with my skills and passions, whether they are remote or on-site. 
    Let’s join forces and innovate impactful solutions together!
  </p>
  <Button name="Let's Connect" isBeam containerClass="w-full mt-10" />
</div>


          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
  <p className="grid-headtext">Fuelled by My Passion for Coding</p>
  <p className="grid-subtext">
    For me, coding transcends mere skill—it’s a vibrant passion that drives my creativity. I revel in the challenge of solving intricate problems and transforming ideas into innovative solutions. 
    Always eager to explore emerging technologies, I continuously seek opportunities to expand my skill set and elevate my craft.
  </p>
</div>

          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">bhawanak768@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
