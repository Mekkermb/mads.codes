import { styled } from '@pigment-css/react';
import './styles.css';

export const metadata = {
  title: 'Mads Codes',
  description: 'A site about my hobbies and projects',
};

const MainWrapper = styled.main`
  background-color: red;
`;

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
