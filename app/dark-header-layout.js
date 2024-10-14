import Header from '../components/Navbar';

export default function DarkHeaderLayout({ children }) {
  return (
    <>
      <Header alwaysDark={true} />
      {children}
    </>
  );
}
