function HeaderWithLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <hr className="mb-4" />
      <div>{children}</div>
    </div>
  );
}

export default HeaderWithLineLayout;
