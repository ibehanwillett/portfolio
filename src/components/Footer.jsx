import React from 'react'
import "../styles/footer-style.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-body">
      <p>Contact Imogen</p>
          <div className="is-flex is-justify-content-space-evenly">
              <a href="https://github.com/ibehanwillett"> 
                  <img src="../github-mark-white.png" alt="Git Hub Link" className="icon is-medium" />
              </a>

              <a href="https://au.linkedin.com/in/imogen-behan-willett">
                  <img src="../LI-In-Bug.png" alt="LinkedIn Link" className="icon is-medium" />
              </a>

              <a href="mailto:ibehanwillett@gmail.com">
                  <img src="../email.png" alt="Email Imogen" className="icon is-medium" />
              </a>
          </div>
    </div>
</footer>
  )
}

export default Footer