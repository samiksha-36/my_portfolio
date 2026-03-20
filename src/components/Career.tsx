import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Electrical Engineering</h4>
                <h5>NIT Jalandhar</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing B.Tech at Dr. B.R. Ambedkar NIT Jalandhar with a CGPA
              of 8.06. Building a strong foundation in problem-solving with
              400+ DSA problems solved across LeetCode and GeeksforGeeks.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Xceed NITJ</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built a regex-based faculty search API for the institute's
              timetable platform used by 1000+ students. Developed a Smart
              Attendance System using FastAPI & InsightFace achieving 100%
              accuracy, integrated with Node.js via REST API.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & AI Development</h4>
                <h5>Self-driven Growth</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-ready full-stack applications with MERN stack
              and integrating AI features using Groq API, LangChain & MCP.
              Focused on creating intelligent, scalable solutions that solve
              real-world problems.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;