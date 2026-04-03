import { Link } from "react-router-dom";

function About() {
  <div>
    <div>About</div>
    <div>
      <div>
        I am Mena, former pre-k teacher turned web dev. Since mid July of 2025 I
        have been teaching myself the basics of CSS/HTML, JavaScript, SQL,
        PostgreSQL/Prisma through the sage teachings of those who put created
        and continue to maintain
        <a href="https://www.theodinproject.com/">The Odin Project (TOP).</a>
      </div>
      <div>
        Although I feel I have learned a lot - there is still more to learn and
        will *always* be more to learn. I have completed the last project in the
        curriculum from TOP on March 31st, 2026. I'm continuing to reinforce my
        skills and gain deeper understanding of these tools and frameworks
        through personal projects that I'm continuing on my own which you will
        find <a>here</a>. I am incredibly and humbly thankful for this resource
        for allowing me and others an accessible way to learning programming.
        Without the Odin Project I genuinely do not think I would be where I am
        today. There is so much to say but I will leave it at that for now.
      </div>
      {/* <div> if you want to dive a bit deeper into how I got to where I am today you can check out my blog post here <a>inssert link to personal blog post</a> </div> */}
      <div>
        Go down <Link to="/contact">this</Link> dark alley to find me
      </div>
    </div>
  </div>;
}

export default About;
