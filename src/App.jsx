import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <h1>TechCon 2025</h1>
        <nav>
          <a href="#details">Details</a>
          <a href="#speakers">Speakers</a>
          <a href="#schedule">Schedule</a>
          <a href="#register">Register</a>
        </nav>
      </header>

      {/* Event Details */}
      <section id="details" className="details">
        <h2>About the Event</h2>
        <p>
          TechCon 2025 is the premier technology conference bringing together
          innovators, developers, and entrepreneurs to explore the future of
          AI, Cloud, and Web technologies.
        </p>
        <p><strong>Date:</strong> 20th October 2025</p>
        <p><strong>Time:</strong> 10:00 AM - 5:00 PM</p>
        <p><strong>Venue:</strong> Virtual / Online</p>
      </section>

      {/* Speakers */}
      <section id="speakers" className="speakers">
        <h2>Speakers</h2>
        <div className="speaker-list">
          <div className="speaker-card">
            <img src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_incoming&w=740&q=80" alt="Speaker 1" />
            <h3>Dr. Jane Doe</h3>
            <p>AI Researcher at OpenAI, focusing on machine learning and ethics.</p>
          </div>
          <div className="speaker-card">
            <img src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_incoming&w=740&q=80" alt="Speaker 2" />
            <h3>John Smith</h3>
            <p>Cloud Architect at Google, expert in scalable web applications.</p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="schedule">
        <h2>Schedule</h2>
        <ul>
          <li><strong>10:00 AM</strong> – Opening Keynote</li>
          <li><strong>11:30 AM</strong> – AI & Ethics by Dr. Jane Doe</li>
          <li><strong>1:00 PM</strong> – Lunch Break</li>
          <li><strong>2:00 PM</strong> – Building Scalable Apps by John Smith</li>
          <li><strong>4:00 PM</strong> – Closing Panel</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section id="register" className="cta">
        <h2>Don’t Miss Out!</h2>
        <button className="register-btn">Register Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Contact: info@techcon2025.com | Organized by TechCon Team</p>
      </footer>
    </>
  );
}

export default App;