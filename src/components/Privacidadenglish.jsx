import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import React from 'react';

function Privacy() {
  return (
    <div className='politica-privacidad' /* style={{ margin: "20px", padding: "2rem", color:"black"}} */>
      <h1>Privacy Policy</h1>

      <h2>1. Data Controller</h2>
      <p>
        The personal data collected through this website will be processed by the owners of Chili Camper, with the following contact email: <a style={{color: "black", fontWeight: "600"}} href='mailto:info@chilicamper.com'>info@chilicamper.com</a>
      </p>

      <h2>2. Collected Personal Data</h2>
      <p>
        Through the website’s contact form, the following personal data may be collected from users:
      </p>
      <p>
        Name,  
        Surname,  
        Phone number,  
        Email address,  
        Message or inquiry sent by the user.  
      </p>
      <p>No other personal data is collected through this website.</p>

      <h2>3. Purpose of Data Processing</h2>
      <p>
        The personal data provided will be used exclusively to:  
        Manage and respond to inquiries or requests for information sent by the user through the contact form.  
        Maintain the necessary communication regarding the services offered (camper rental for traveling in Chile).
      </p>
      <p>
        The data will not be used for purposes other than those indicated, nor will commercial communications be sent without the user’s consent.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        Personal data will only be retained for as long as necessary to manage the inquiry or request made by the user and, if applicable, to comply with legal obligations.
      </p>

      <h2>5. Communication and Transfer of Data to Third Parties</h2>
      <p>
        Personal data will not be shared or transferred to third parties, except when required by law or by a competent authority.
      </p>

      <h2>6. Users’ Rights</h2>
      <p>
        In accordance with Law No. 19.628 on the Protection of Private Life, users may exercise their rights of access, rectification, cancellation, and opposition regarding their personal data by sending a request to info@chilicamper.com.
      </p>

      <h2>7. Data Security</h2>
      <p>
        The website has reasonable technical and organizational measures in place to protect users’ personal data against loss, unauthorized access, or improper processing.
      </p>

      <h2>8. Policy Updates</h2>
      <p>
        This privacy policy may be updated at any time to reflect possible legal changes or adjustments in the operation of the website. It is recommended to review it periodically.
      </p>

      <p className='mb-10'>
        If you have any additional questions regarding the protection of your personal data, you can write to <a style={{color: "black", fontWeight: "600"}} href='mailto:info@chilicamper.com'>info@chilicamper.com</a>.
      </p>

      <NavLink to={`/english`} className="nav-link-privacidad">
        <FaArrowLeft size={14} /> BACK
      </NavLink>
    </div>
  );
}

export default Privacy;