import React from 'react'
import Teamform from '../components/teamform'
import Header from '../components/Header'

const Teams = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [teams, setTeams] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/team/getteams', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setTeams(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Header />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '90vh',
          width: '100vw',
          justifyContent: 'center',
          marginTop: '55px',
          position: 'relative',
        }}
      >
        <h1 style={{ 
          color: 'red',
          position: 'absolute',
          top: 0,
          left: 0,
          marginLeft: 250,
          marginTop: 20,
        }}>Teams</h1>
        <button onClick={() => setShowForm(true)} style={{marginTop:25,position:'absolute',top:4,right:250}}>Add Team</button>
        {showForm && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ position: 'relative', background: '', padding: 32, borderRadius: 8, minWidth: 350 }}>
              <button
                onClick={() => setShowForm(false)}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'red',
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <Teamform />
            </div>
          </div>
        )}

        {loading ? (
          <div style={{ marginTop: 40 }}>Loading teams...</div>
        ) : teams.length === 0 ? (
          <div style={{ marginTop: 40 }}>No teams found.</div>
        ) : (
          <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {teams.map(team => (
              <div
                key={team._id || team.id}
                style={{
                  background: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  padding: 20,
                  minWidth: 220,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                }}
              >
                <h2 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1.2rem' }}>
                  {team.name}
                </h2>
                <p style={{ margin: 0, color: '#666' }}>{team.description}</p>
                {/* You can add more fields here if needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Teams