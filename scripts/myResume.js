import {skillsArray} from "../data/skills.js";


let myResumeHTML = ``;

myResumeHTML +=`
  <header>
  <h1>
  My Resume
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
  <img src="../resources/images/Circular professional pic.png"alt="Portrait of Daniel Argones" class="professional-photo">

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
    Professional Summary
    </h2>
    <p class="content-p-tag">
      With over 7 years of professional experience since 2018, I specialize in client support, appointment setting, sales, and operations across diverse industries. Skilled in CRM management, lead qualification, and customer engagement, I consistently drive pipeline growth and deliver exceptional service. A self-taught web developer passionate about technology, I have mastered HTML, CSS, and JavaScript, blending technical expertise with strong communication and organizational skills to create impactful solutions and foster seamless team collaboration.
    </p>

    <h2>
    Core Skills
    </h2>
    
    <p class="content-p-tag">
      <b>Technical Aptitude & Software Proficiency</b> -
      Rapidly adapt to new software platforms, with hands-on experience in CRM systems (HubSpot, AccuLynx, GoHighLevel), vendor portals, QuickBooks, and advanced use of Excel/Google Sheets for data management and reporting. Familiarity with project management (ClickUp, Asana, Atlassian), appointment and task automation tools, and collaborative digital workflows.
    </p>
    
    <p class="content-p-tag">
      <b>Analytical & Problem-Solving Skills</b> -
      Skilled in issue diagnosis, process analysis, and solution design; demonstrated by invoice reconciliation, identifying data outliers, accurate measurement and verification tasks, and operational reporting with actionable insights.
    </p>
    
    <p class="content-p-tag">
      <b>Data Handling & Organization</b> -
      Strong experience in maintaining, updating, and verifying sensitive customer records; attention to data integrity and accuracy; proficient in structured data management and reporting.
    </p>
    
    <p class="content-p-tag">
      <b>Communication & Collaboration</b> -
      Effective written and verbal communicator with a track record of translating complex technical or process information for diverse audiences; highly collaborative, experienced in cross-functional team support, knowledge sharing, and customer-facing technical guidance.
    </p>
    
    <p class="content-p-tag">
      <b>Project & Process Management</b> -
      Managed multiple deadlines, shifting priorities, and teamwork across remote and in-person roles; contributed to onboarding, upskilling, documentation, and process improvement initiatives.
    </p>
    
    <p class="content-p-tag">
      <b>Self-Learning & Continuous Improvement</b> -
      Proactive in upskilling through corporate learning management systems, independent research, and adapting to new platforms and technologies—traits necessary for fast-paced software environments.
    </p>
    
    <p class="content-p-tag">
      <b>Task Automation & Workflow Optimization</b> -
      Leveraged scheduling, dialer, and calendar automation tools to streamline workflow processes; consistently sought efficiency improvements using software solutions.
    </p>

    <h2>
    Experience
    </h2>
    
    <p class="content-p-tag">
      <b>Client Support Specialist</b>
      <br>
      <b>SMA Support Services. (Outsourcing Company)</b>
      <br>
      December 2023 - Present
      <br>
      <ul>
        <li class="content-li">
          Called pre-generated leads provided by the company, tracking all call attempts and outcomes using Google Sheets.
        </li>
        <li class="content-li">
          Utilized HubSpot and AccuLynx CRM platforms to manage and move customer profiles through the sales pipeline.
        </li>
        <li class="content-li">
          Scheduled appointments for company sales representatives by engaging with clients over the phone and qualifying their interest.
        </li>
        <li class="content-li">
          Conducted follow-up communications via email to provide requested information about company services and respond to client inquiries.
        </li>
        <li class="content-li">
          Gathered and verified essential property and client details—including address, full name, phone number, and email—to ensure accurate records and facilitate tailored quotes from the sales team.
        </li>
        <li class="content-li">
          Used a proprietary company application to accurately measure roof dimensions—including length, width, pitch, and total areas of components such as rakes, gutters, ridges, valleys, and eaves—leveraging 3D modeling capabilities similar to CAD systems to verify measurement accuracy.
        </li>
        <li class="content-li">
          Maintained organized records of all interactions and appointment bookings to support seamless handoff to sales representatives.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Appointment Setter</b>
      <br>
      <b>Perch Wealth (Investment Consultation Provider)</b>
      <br>
      February 2023 - November 2023
      <br>
      <ul>
        <li class="content-li">
          Conducted outreach to pre-qualified leads provided by the company and proactively identified new prospects through targeted online research.
        </li>
        <li class="content-li">
          Performed cold calls to businesses and individuals within the real estate sector, educating potential clients on the advantages of 1031 exchanges and scheduling introductory meetings with company representatives.
        </li>
        <li class="content-li">
          Qualified leads and coordinated appointments for company representatives, ensuring a seamless transition of prospects into the sales pipeline.
        </li>
        <li class="content-li">
          Utilized Microsoft Outlook to manage appointment scheduling and prepare detailed reports.
        </li>
        <li class="content-li">
          Maintained and organized lead data using Microsoft Excel for efficient tracking and follow-up.
        </li>
        <li class="content-li">
          Leveraged Dialpad as the primary communication tool for engaging with prospective clients.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Appointment Setter</b>
      <br>
      <b>Rocket Level (SAAS company)</b>
      <br>
      July 2022 - December 2022
      <br>
      <ul>
        <li class="content-li">
          Generated and qualified leads through targeted online research, managing prospects within GoHighLevel CRM to advance sales pipeline stages.
        </li>
        <li class="content-li">
          Conducted B2B cold calls, verifying contact with business owners to ensure outreach to key decision-makers.
        </li>
        <li class="content-li">
          Scheduled appointments and generated interest for qualified leads, coordinating demos with the sales team.
        </li>
        <li class="content-li">
          Maintained accurate customer data by updating and managing records in the CRM system.
        </li>
        <li class="content-li">
          Utilized dialer tools and calendar applications (Dialer software, Calendly, Google Calendar) to optimize outreach and appointment scheduling.
        </li>
        <li class="content-li">
          Leveraged project and learning management platforms (ClickUp, Asana, Atlassian) to track tasks and support team collaboration.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Subject Matter Expert/ Operations Support </b>
      <br>
      <b>VXI Global Holdings- AT&t Account (Outsourcing Company)</b>
      <br>
      December 2021 - July 2022
      <br>
      <ul>
        <li class="content-li">
          Managed and resolved escalated customer calls, ensuring timely and effective issue resolution while maintaining high customer satisfaction.
        </li>
        <li class="content-li">
          Prepared and analyzed hourly and daily operational reports using Microsoft Excel to track team performance and identify areas for improvement.
        </li>
        <li class="content-li">
          Developed and delivered upskilling materials and best practice guides focused on sales techniques and customer service excellence to enhance team capabilities.
        </li>
        <li class="content-li">
          Conducted ongoing research within company Learning Management Systems to stay current on product updates, promotions, and discount programs, ensuring accurate information dissemination.
        </li>
        <li class="content-li">
          Maintained customer data integrity by updating, adding, and retrieving information within the CRM system to support seamless customer interactions.
        </li>
        <li class="content-li">
          Provided onboarding support and training for new hires, facilitating their proficiency with company tools, products, and communication protocols.
        </li>
        <li class="content-li">
          Assumed team leadership responsibilities in the absence of the team lead, overseeing daily operations and supporting team productivity.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Subject Matter Expert/ Operations Support </b>
      <br>
      <b>VXI Global Holdings- AT&t Account (Outsourcing Company)</b>
      <br>
      December 2021 - July 2022
      <br>
      <ul>
        <li class="content-li">
          Managed and resolved escalated customer calls, ensuring timely and effective issue resolution while maintaining high customer satisfaction.
        </li>
        <li class="content-li">
          Prepared and analyzed hourly and daily operational reports using Microsoft Excel to track team performance and identify areas for improvement.
        </li>
        <li class="content-li">
          Developed and delivered upskilling materials and best practice guides focused on sales techniques and customer service excellence to enhance team capabilities.
        </li>
        <li class="content-li">
          Conducted ongoing research within company Learning Management Systems to stay current on product updates, promotions, and discount programs, ensuring accurate information dissemination.
        </li>
        <li class="content-li">
          Maintained customer data integrity by updating, adding, and retrieving information within the CRM system to support seamless customer interactions.
        </li>
        <li class="content-li">
          Provided onboarding support and training for new hires, facilitating their proficiency with company tools, products, and communication protocols.
        </li>
        <li class="content-li">
          Assumed team leadership responsibilities in the absence of the team lead, overseeing daily operations and supporting team productivity.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Sales Representative/Customer Service Representative </b>
      <br>
      <b>VXI Global Holdings(AT&t Account)</b>
      <br>
      December 2021 - July 2022
      <br>
      <ul>
        <li class="content-li">
          Generated interest and conducted inside sales by offering relevant products and bundle deals aligned with customers’ existing services.
        </li>
        <li class="content-li">
          Managed incoming calls, delivering exceptional customer service with a friendly and professional approach.
        </li>
        <li class="content-li">
          Effectively de-escalated customer concerns related to billing, late fees, and other issues, escalating to management when necessary.
        </li>
        <li class="content-li">
          Maintained accurate customer records by updating and managing data within the CRM system.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Human Resource Staff/Generalist</b>
      <br>
      <b>United Wil Manpower Services Inc. (Manpower Agency)</b>
      <br>
      March 2020 - Apr 2021
      <br>
      <ul>
        <li class="content-li">
          Supported recruitment and onboarding processes, including vacancy tracking, applicant screening, and coordinating onboarding events.
        </li>
        <li class="content-li">
          Managed calendars to ensure timely delivery of reports and payroll.
        </li>
        <li class="content-li">
          Collected, organized, and prepared timesheets for weekly and biweekly payroll processing.
        </li>
        <li class="content-li">
          Maintained timesheet templates and generated monthly printouts and employee records for managerial review.
        </li>
        <li class="content-li">
          Assisted in processing and tracking employee lifecycle actions such as hires, transfers, leaves of absence, and terminations.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Social Media Marketing</b>
      <br>
      <b>Aren's Kimchi (Project)</b>
      <br>
      March 2020 - November 2020
      <br>
      <ul>
        <li class="content-li">
          Optimized website information and About pages with clear descriptions, contact details, and business location to enhance user experience.
        </li>
        <li class="content-li">
          Designed engaging visuals using Canva and PosterMyWall to support marketing initiatives.
        </li>
        <li class="content-li">
          Developed content strategies based on audience insights from AnswerThePublic to attract and engage prospects.
        </li>
        <li class="content-li">
          Scheduled and managed social media posts to drive engagement and brand awareness.
        </li>
        <li class="content-li">
          Executed targeted social media advertising campaigns based on demographic and geographic criteria.
        </li>
      </ul>
    </p>

    <p class="content-p-tag">
      <b>Outbound Sales Representative</b>
      <br>
      <b>Sycore Business Solutions Corp. </b>
      <br>
      January 2018 - March 2019
      <br>
      <ul>
        <li class="content-li">
          Conducted cold calls to prospective customers, promoting health improvement products for men and women.
        </li>
        <li class="content-li">
          Generated interest and secured subscriptions by effectively communicating product benefits.
        </li>
        <li class="content-li">
          Maintained accurate customer records by updating and managing data within the CRM system.
        </li>
        <li class="content-li">
          Responded to customer inquiries regarding subscription processes and product usage with clear and informative guidance.
        </li>
      </ul>
    </p>
  </div>
            
  <div class="side-content-div">
    <h4>
    Education
    </h4>

    <p class="side-content-p-tag">
    BS-Business Administration Major in Human    Resources Management
    University of Mindanao
    <br>
    2014-2019
    </p>

    <p class="side-content-p-tag">
    BS-Accountancy
    University of Mindanao
    <br>
    2014-2015
    </p>

    <h4>
    Skills
    </h4>

    <ul class="js-ul-for-skills ul-for-skills">
    </ul>
  </div>
`;
          
document.querySelector(".js--my-resume-body-html").innerHTML = myResumeHTML;

const skillsListUl = document.querySelector(".js-ul-for-skills")
          
skillsArray.forEach((skill) => {
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillItem.classList.add("skill-item");
  console.log(skillItem);
  skillsListUl.appendChild(skillItem);
}); 
