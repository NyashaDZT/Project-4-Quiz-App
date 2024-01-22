
import { Link } from 'react-router-dom';

const footerStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  marginLeft: '10px',
  marginRight: '10px',
  textDecoration: 'none',
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <p style={{ margin: '0' }}>Created by Nyasha Dzvoti</p>
      <Link to="https://github.com/NyashaDZT" target="_blank" style={linkStyle} rel="noopener noreferrer">
        Visit my GitHub
      </Link>
    </div>
  );
}