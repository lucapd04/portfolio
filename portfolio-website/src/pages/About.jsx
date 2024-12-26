import Profile from '../components/Profile'

export default function About() {
  
  return (
    <>
        <div className="inset-0 z-0 min-h-screen pb-16" style={{
            background: 'linear-gradient(to right, rgb(4, 10, 29) 0%, black 10%, black 90%, rgb(4, 10, 29) 100%)'
        }}>
          <Profile/>
        </div>
    </>
  );
}
