import GlobalStyles from '@/styles/global';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <GlobalStyles />
    </>
  );
}
