import Profile from '../components/Profile'

export default function About() {
  
  return (
    <>
        <div className="inset-0 z-0 pb-16" style={{
            background: 'linear-gradient(to right, rgb(5, 13, 39) 0%, black 10%, black 90%, rgb(5, 13, 39) 100%)'
        }}>
          <Profile/>
        </div>
    </>
  );
}
