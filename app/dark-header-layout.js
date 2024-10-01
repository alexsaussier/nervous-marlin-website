import Header from '../components/Header';

export default function DarkHeaderLayout({ children }) {
  return (
    <>
      <Header alwaysDark={true} />
      {children}
    </>
  );
}
