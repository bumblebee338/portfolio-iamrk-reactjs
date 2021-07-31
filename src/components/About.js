import React, {useState, useEffect} from 'react';
// import aboutPic from "../img/about-min-compressed.jpg";
import aboutPic from "../img/about_new.jpeg";

function About() {

    
const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-07-28T05:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

    return(
        <>
            
            <section className="about" id="about">
                <h1 className="ml8">
                   &nbsp;
                </h1>
    
                <div className="about_data">
                    <div className="about_pic">
                        <img src={aboutPic} alt="about" className="about_pic-me animate__pulse animate__animated" />
                    </div>
                    <div className="about_bio">
                        <div className="about_bio-title myinfo">
                            <h6 className="heading-secondary">Let Me Introduce Myself !</h6>
                            <h1 className="heading-primary">Biography</h1>
                        </div>
                    

                        <p className="about_bio-para">
                            I am <span className="para_highlight">Rahul Kumar</span>, currently pursuing B.Tech in <strong>Computer Science and Engineering</strong>
                            &nbsp; from <span className="para_highlight">Indian Institute of Information Technology, Kalyani, West Bengal</span>. I am a Full Stack Web Developer, 
                            still learning new skills to improve my knowledge. I like riding motorbike, watching movies, web series and hanging out with
                            my friends. 
                        </p>
                        <div className="about_bio-para">
                            Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Age/> <br/>
                            Height&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;175cm <br/>
                            {/* City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanpur <br/> */}
                            State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uttar Pradesh <br/>
                            Nationality &nbsp;&rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian <br/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;