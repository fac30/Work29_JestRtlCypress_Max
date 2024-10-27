// import Link from "next/link";

// const ExerciseTwoComponent = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Exercise Two</h1>

//       {/* Form Section */}
//       <h2>This form doesn't do anything</h2>
//       <form className="form">
//         <label className="label">
//           Your Name
//           <input
//             className="input"
//             type="text"
//             placeholder="Enter your name"
//             required
//           />
//         </label>
//         <label className="label">
//           Select a Course
//           <select className="select" required>
//             <option value="">Pick one</option>
//             <option value="course1">Course 1</option>
//             <option value="course2">Course 2</option>
//           </select>
//         </label>
//         <button className="button" type="submit">
//           Submit
//         </button>
//       </form>

//       {/* List Section */}
//       <h2>Here are you random list items</h2>
//       <ul className="list">
//         <li className="list-item">Item 1</li>
//         <li className="list-item">Item 2</li>
//         <li className="list-item">Item 3</li>
//       </ul>

//       <div className="link-group">
//         <Link href="/">
//           <a className="link">Back to Home</a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ExerciseTwoComponent;

import { useState } from "react";
import Link from "next/link";

const formFields = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
];

const courseOptions = [
  { value: "", label: "Pick one" },
  { value: "course1", label: "Course 1" },
  { value: "course2", label: "Course 2" },
];

const ExerciseTwoComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [submittedItems, setSubmittedItems] = useState([]); // List of submitted items

  const isFormComplete =
    formFields.every((field) => formData[field.id]) && formData.course;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (isFormComplete) {
      // Add new entry to the submitted items list
      setSubmittedItems((prevItems) => [
        ...prevItems,
        { name: formData.name, email: formData.email, course: formData.course },
      ]);
      // Clear the form after submission
      setFormData({ name: "", email: "", course: "" });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Exercise Two</h1>

      <form className="form" onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <label key={field.id} className="label">
            {field.label}
            <input
              id={field.id}
              className="input"
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.id]}
              onChange={handleInputChange}
            />
          </label>
        ))}

        <label className="label">
          Select a Course
          <select
            id="course"
            className="select"
            required
            value={formData.course}
            onChange={handleInputChange}
          >
            {courseOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button className="button" type="submit" disabled={!isFormComplete}>
          Submit
        </button>
      </form>

      {/* Dynamic List of Submitted Items */}
      <ul className="list">
        <li className="list-item">
          John Doe - testemail@test.com - First hard coded list item
        </li>
        <li className="list-item">
          Little jimmy - lilj@gmail.com - Second hard coded list item
        </li>
        {submittedItems.map((item, index) => (
          <li key={index} className="list-item">
            {item.name} - {item.email} - {item.course}
          </li>
        ))}
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
