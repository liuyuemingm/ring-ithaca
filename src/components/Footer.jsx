import React from 'react'

function Footer() {
  return (
    <div>
      <p style={{ fontWeight: '100', position: "fixed", bottom: "0", width: "100%", textAlign: 'center', color: 'black' }}>Copyright &copy; {new Date().getFullYear()} Yueming Liu</p>
    </div>
  )
}

export default Footer
