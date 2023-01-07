import { MainHeader } from './MainHeader';

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </>
  );
};