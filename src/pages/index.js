import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Coding Exercises</h1>
      <p className="text">Choose an exercise below to get started!</p>
      <div className="link-group">
        <Link href="/exercise-one">
          <a className="link">Go to Exercise One 👉</a>
        </Link>
        <Link href="/exercise-two">
          <a className="link">Go to Exercise Two 👉</a>
        </Link>
      </div>
    </div>
  );
}
