import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5', color: '#555' }}>
        © {new Date().getFullYear()} My React App. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer