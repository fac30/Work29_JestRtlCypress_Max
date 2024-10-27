import Link from "next/link";

const ExerciseOneTest = () => {
  return (
    <div className="container">
      <h1 className="title">Exercise One</h1>
      <p className="text">
        This is a simple UI exercise page to test navigation and button
        presence.
      </p>

      <button className="button" onClick={() => alert("Button clicked!")}>
        Test Button
      </button>

      <div className="link-group">
        <Link href="/">
          <a className="link">Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default ExerciseOneTest;
