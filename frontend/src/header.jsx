import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#9DB2BF' }}>
      <div
        className="header"
        style={{
          width: '100%',
          backgroundColor: '#27374D',
          margin: 0,
          padding: 0,
          height: 60,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          className="mainApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '100px',
          }}
        >
          <img
            style={{
              width: 40,
              height: 40,
              background: 'black',
              marginRight: 10,
            }}
            src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
            alt="Logo"
          />
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          >
            100x Devs
          </div>
        </div>
        <div
          className="login-signup"
          style={{
            display: 'flex',
            gap: '10px',
            marginRight: '100px',
          }}
        >
          <button
            onClick={() => navigate('/login')} // Navigate to login page
            style={{
              padding: '10px 15px',
              borderRadius: '10px',
              backgroundColor: 'gray',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')} // (Optional) Add a signup page
            style={{
              padding: '10px 15px',
              borderRadius: '10px',
              backgroundColor: '#3361ee',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
