import './css/styles.css';
import Me from './assets/img/ME.JPG';
import gitlogo from './assets/img/Github-Logo-Transparent-Background-PNG.png';
import linkedIn from './assets/img/Linkedin-Logo-Png-Transparent-Background.png';
import diploma from './assets/img/diploma.png';
import cert from './assets/img/cert.png';





function App() {
  return (
    <div className="App">
          <head>
        
        <title>Charles Naranjo</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top"/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Charles Naranjo</span>
                <span className="d-none d-lg-block"><img style={{width: '200px',borderRadius: '30px', marginBottom: '50px'}} src={Me} alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Charles
                        <span className="text-primary">Naranjo</span>
                    </h1>
                    <div className="subheading mb-5">
                         Miami, Florida 33183 · (786) 210-0667 ·
                        <a href="mailto:name@email.com"> charlienaranjo19@gmail.com</a>
                    </div>
                    <p className="lead mb-5">My name is Charlie Naranjo and I am an aspiring junior developer. In 2020, I invested in myself and completed a Full-stack Development boot camp at the University of Miami
                        to deepen my understanding of web development. Here, I sharpened my skills in programming and was introduced to HTML, JavaScript, CSS, react.js, and MySQL. Back in late 2019, I graduated from Florida 
                        International University with my Bachelors of Science in Information Technology. In pursuit of my Bachelors degree in Information Technology, I took a lot of different courses involving major computer concepts such Programming, Database Administration, Networking, Cyber Security, and 
                        was exposed to the many opportunities the technology industry has to offer. I really enjoyed programming and the vast oppurtunities that it presented, thus, decided this was the path I wanted to pursue.</p>

                        <br/>
                        <p className="lead mb-5"> Currently as of today, I have accrued about 3 years of experience as a Software Support Engineer. Under this role I have had the honor of handling escalated issues, solving out issues on a software level, and identifying root causes with extensive troubleshooting. 
                            I am eagerly trying to find a company where I can continue to develop my skills in programming and pursue my dream of becoming a well-rounded developer.
               
                             
                           
               
                        </p>
          
                    <div className="social-icons">
                        <a  href="https://www.linkedin.com/in/charlienaranjo1994/"> <img style = {{width: "50px"}} src={linkedIn} alt="" /></a>
                        <a  href="https://www.github.com/cnara018"> <img style = {{width: "100px"}} src={gitlogo} alt="" /></a> 
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Software Support Engineer: Tier 2</h3>
                            <div className="subheading mb-3">OrangeTheory Fitness</div>
                            <p>
                               - Manage and respond to escalated software support tickets. 
                               <br/>
                               - Support and reinforce daily execution of Orangetheory Fitness systems and processes. 
                               <br/>
                               - Log and track inquiries using a problem management database and maintains detailed history of all issues and resolutions. 
                               <br/>
                               - Coordinate the resolution of advanced issues with appropriate teams.  Contribute to our Knowledgebase. 
                               <br/>
                               - Conducted trainings for OTF’s offshore team on how to support certain products and creating macros that would assist in solving out common tickets.
                               <br/>
                               - Provide excellent support for all current In-Studio applications and Wearables. 
                               <br/>
                               - Assist in working with all functional teams to set up, maintain and support databases. 
                               <br/>
                               - Serve as the subject matter expert in supporting Orangetheory Fitness Business Policies and reinforce best practices and technical protocol for technology program use in studios. 
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Jan 2021 - March 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Junior Software Engineer</h3>
                            <div className="subheading mb-3">IdentyTech Solutions America Inc.</div>
                            <p>
                                - Assisting the Development team with all aspects of software design and coding.  
                               <br/>
                               - Attending and contributing to company development meetings. 
                               <br/>
                               - Learning the codebase and improving coding skills in C# and Web Development (HTML, CSS, JavaScript). 
                               <br/>
                               - Writing and maintaining code to minimize the chance of bugs and errors. 
                               <br/>
                               - Conducting development tests and gathering data for reports.
                               <br/>
                               - Work on developing Web GUI’s for Biometric scanners and Cameras. 
                               <br/>
                               - Provide as a source of information for support team on escalated software issues. 
                               <br/>
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Sep 2020 - January 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Technical Support Engineer</h3>
                            <div className="subheading mb-3">IdentyTech Solutions America Inc.</div>
                            <p>
                                - Responsible to troubleshoot, fault isolate, repair, and test to verify proper functionality of any IdentyTech equipment. 
                               <br/>
                               - Configuration of software, hardware, and perform installs and upgrades as needed.  
                               <br/>
                               - Respond to all service tickets timely, keep the customer fully updated, and ensure service call completions are 
                               documented accurately and with comprehensive details, as well as any parts/equipment used appropriately accounted for. 
                               <br/>
                               - Utilize software's such as PuTTY and WinSCP to connect VIA serial/IP into devices in order to transfer files and update 
                               Firmware or settings.  
                               <br/>
                               - Provide remote Technical services with the use of applications such as LogMeIn Rescue in order to troubleshoot, 
                               diagnose, and correct software/technical issues
                               <br/>
                               - Manage all IdentyTech inventory and properly keep updated counts with the use of Excel worksheets.  
                               <br/>
                               - Perform RMAs on devices and ensure that all company guidelines and procedures are followed when it comes to 
                               advanced replacements, repair, and warranty. 
                                
                               <br/>
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary"> April 2019 - September 2020</span></div>
                    </div>
                   
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University of Miami</h3>
                            <div className="subheading mb-3">Certificate</div>
                            <div>FullStack Web Development</div>
                            <br/>
                            <img style = {{width: '450px'}} src = {cert} alt=''></img>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Mar 2020 - September 2020</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Florida International University</h3>
                            <div className="subheading mb-3">Bachelor's of Science</div>
                            <div>Information Technology</div>
                            <br/>
                            <p>GPA: 3.1</p>
                            <img style = {{width: '450px'}} src = {diploma} alt=''></img>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Aug 2016 - Dec 2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Miami-Dade Community College</h3>
                            <div className="subheading mb-3">Associate in Psychology</div>
                            
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Aug 2013 - Aug 2016</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3"> Summary</div>
                    <p style = {{float: 'Left'}}> 
                      - Full-stack development - JavaScript, HTML, CSS, 
                        Intermediate C#, node.js, React.js, and MySQL (Much 
                        more proficient in Front-End development, but strong 
                        desire to improve backend knowledge). 
                        <br/>
                      - Network infrastructure/stacks – Understand switches, routers, servers, and general topology.
                        <br/> 
                      - Technical Help Desk and Software Support fluency – 
                        Use of ticketing systems such as Zendesk or 
                        Salesforce. 
                        <br/>
                      - Technical communication/documentation Preparing internal documents with Jira and Confluence. (Fluent in both English and 
                        Spanish) 
                        <br/>
                      - Remote Technical Support - with LogMeIn Technician 
                        Rescue/TeamViewer/GoToAssist. 
                        <br/>
                      - PuTTY and WinSCP – Used to connect via IP or Serial 
                        into devices to update firmware or network settings with 
                        the use of many Linux commands and scripts. 
                        <br/>
                      - Root cause analysis and diagnostics. 
                        <br/>
                      - SQL Server/MySQL – Operated on servers 
                        that contained large databases containing personal 
                        information and biometric Templates. Able to write basic T-SQL queries.
                        <br/>
                      - Microsoft Office proficiency – Creating Excel Reports, 
                        preparing presentations, and technical manuals for knowledge transfer.
                        <br/>

                        </p>
                   
                    
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>On my off time, I am a die hard Nintendo Fan and basically an overall tech nerd. I love to play video games, music, being with my family/friends, and I enjoy trying new food and traveling! I recently picked up a new hobby in animation and pixel art. I hope to be utilizing these skills soon with maybe some game development within Unity projects. </p>
                    <p className="mb-0"></p>
                </div>
            </section>
            <hr className="m-0" />
            <br/>
            
            <footer style= {{textAlign: 'center'}}> <p>&copy; 2021</p></footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="js/scripts.js"></script>
  
    </div>
    </div>
  );
}

export default App;
