function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <div className="sign-in user-page__content">
        <main>
          <div>
            <section>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: `${100}px`}}>
                <h1 style={{fontSize: `${80}px`}}>404 Error</h1>
                <b>This page does not exist.</b>
                <p>Would you like to back on the <a style={{textDecoration: 'underline', color: '#4481c3'}} href="main.html">main page</a>?</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundPage;
