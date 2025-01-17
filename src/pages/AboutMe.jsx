import React from "react";
import "../css/aboutMe.css";

function AboutMe() {
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>about me</div>
      <div style={{ paddingBottom: "1vw" }}>
        hi, i'm melih durmus, an electrical engineer currently living in ankara,
        turkey.
      </div>

      <div>
        in my free times, i’ve developed a passion for learning software
        languages. since the cost of electrical equipment can be a barrier, i
        focus on software projects as a hobby. this website is a reflection of
        my journey—featuring a summary of what i do, as well as showcasing my
        projects, blog posts, and photos. feel free to explore and enjoy!
      </div>
      <div style={{ marginTop: "15px" }}>and my social media accounts</div>
      <div>
        <a href="https://github.com/melihdr" target="_blank">
          <img
            className="social_medias"
            src="../../images/social_medias/github.png"
            alt="github"
          />
        </a>
        <a href="https://www.instagram.com/melihh_7/" target="_blank">
          <img
            className="social_medias"
            src="../../images/social_medias/instagram.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://open.spotify.com/user/7fw1q1fatu8gv7s5oapmi3sqo?si=9a5673ba2a224c20"
          target="_blank"
        >
          <img
            className="social_medias"
            src="../../images/social_medias/spotify.png"
            alt="spotify"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/melih-durmuş-727947307/"
          target="_blank"
        >
          <img
            className="social_medias"
            src="../../images/social_medias/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
