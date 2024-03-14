import React, { useState } from 'react'

const TextHoverBtn = ({ defaulttxt, hovertxt }) => {
    const [show, setShow] = useState(false)
  return (
    <>
     <button type="button" 
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}>
                            {defaulttxt}
                            {show && (
                                <div>
                                  <i>
                                    {hovertxt}
                                  </i>
                                </div>
                            )}
                        </button>
    </>
  )
}

export default TextHoverBtn