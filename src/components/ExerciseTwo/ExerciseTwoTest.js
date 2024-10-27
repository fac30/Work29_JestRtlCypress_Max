import Link from "next/link";

const ExerciseTwoComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Exercise Two</h1>

      <form className="form">
        <label className="label">
          Your Name
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            required
          />
        </label>
        <label className="label">
          Select a Course
          <select className="select" required>
            <option value="">Pick one</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
          </select>
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </form>

      <ul className="list">
        <li className="list-item">Item 1</li>
        <li className="list-item">Item 2</li>
        <li className="list-item">Item 3</li>
      </ul>

      <div className="link-group">
        <Link href="/">
          <a className="link">Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default ExerciseTwoComponent;
