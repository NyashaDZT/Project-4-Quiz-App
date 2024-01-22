
const footerStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <p>Created by Nyasha Dzvoti</p>
      <a href="https://github.com/NyashaDZT" target="_blank" rel="noopener noreferrer">
        Visit my GitHub
      </a>
    </div>
  );
}