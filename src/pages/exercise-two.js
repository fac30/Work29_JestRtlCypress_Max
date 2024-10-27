import { useEffect, useState } from "react";
import ExerciseTwoComponent from "../components/ExerciseTwo/ExerciseTwoComponent";

const ExerciseTwo = () => {
  const [randomName, setRandomName] = useState(null);

  const getData = async () => {
    const url = "https://randomuser.me/api/?results=1";

    try {
      const response = await fetch(url);
      const json = await response.json();

      const { first, last, title } = json.results[0].name;

      setRandomName(`${title} ${first} ${last}`);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ExerciseTwoComponent randomName={randomName} />
    </>
  );
};

export default ExerciseTwo;
