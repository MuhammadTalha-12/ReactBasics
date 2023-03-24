export function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
   export function Bio() {
    return (
      <div>
        <div className="intro">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          <br /><br />
          <b>And <i>pictures</i></b> of scientists!
        </p>
      </div>
    );
  }
  
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }

   