let aboutPageHTML = ``;

aboutPageHTML +=`
<header>
  <h1>
    About me
  </h1>
</header>

<div class="headers">
  <h1>
    Daniel John Argones - Client Support Specialist / Full Stack Developer
  </h1>
  <h2>
    Delivering Results in Sales and Service with a Passion for Process Improvement and a Drive to Master Emerging Technologies.
  </h2>
</div>

<article class="main-article">
    <div class="photo-with-nav">
      <img src="/resources/images/Circular-professional-pic.png"alt="Portrait of Daniel Argones" class="professional-photo">
      
      <nav class="nav-items">
        <ul>
          <li class="nav-li">
          <a href="./index.html">About me</a>
          </li>
          <li class="nav-li">
          <a href="./myResume.html">My Resume</a>
          </li>
          <li class="nav-li">
          <a href="">Portfolio & Sample Works</a>
          </li>
          <li class="nav-li">
          <a href="">Contact Details</a>
          </li>
        </ul>
      </nav>

    </div>
    
    <div class="page-main-content">
      

      <h2>
        About me
      </h2>

      <p class="content-p-tag">
        Hi, I’m Daniel, a results-driven professional recently expanding into tech by developing skills in web development with HTML, CSS, and JavaScript to enhance my problem-solving and innovation capabilities.

      </p>
      <p class="content-p-tag">
        I have extensive experience in appointment setting, inside sales, customer service, and team support across B2B and B2C sectors. Proficient with CRMs like HubSpot and AccuLynx, I’ve helped streamline sales pipeline management. My background includes appointment setting for SaaS and investment firms, operations support with leadership responsibilities, and customer service in outsourcing. I’ve created training materials, led onboarding, and developed process documentation to improve team performance.
      </p>
              
      <p class="content-p-tag">
        Outside of work, I enjoy hobbies like fishing, swimming, hiking, cooking, and gaming. Growing up, video games fascinated me with their complexity and design. Now, as a professional, I’m motivated to learn more and collaborate with companies to develop apps that enhance quality of life and address everyday needs.
      </p>
      <p class="content-p-tag">
        Interested in learning more or exploring collaboration opportunities?
        Download my resume and connect with me on LinkedIn or via email to discuss how I can contribute to your team and projects.
      </p>
    </div>
  </article>
`

document.querySelector(".js-my-about-body-html").innerHTML = aboutPageHTML;