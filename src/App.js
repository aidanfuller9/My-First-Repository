import "./styles.css";

function displayPerson(first, last, pronouns, school, gradYear, color) {
  return (
    <div>
      {first} {last} {pronouns} {school} {gradYear} {color}
    </div>
  );
}

export default function App() {
  let people = [
    ["Victor", "Lymar", "he/him", "LaunchDarkly", "1923", "green"],
    ["Ida", "Voong", "she/her", "Oakland Tech", "2022", "blue"],
    ["Ana", "Rivera", "she/her", "CSU East Bay", "2051", "green"],
    ["Aidan", "Fuller", "he/him", "Oakland Tech", "2023", "red"],
    ["Kyle", "Wan", "he/him", "Oakland Tech", "2023", "yeah"],
    ["Enjun", "Li", "he/him", "John O' Connell", "2022", "black"],
    ["Luis", "Garcia", "he/him", "CSU East Bay", "2025", "black"],
    ["Amanda", "Yu", "she/her", "Oakland Tech", "2022", "blue"],
    ["Yifei", "Du", "he/him", "Balboa HS", "2022", "black"],
    ["Hector", "Del Valle", "he/him", "John O' Connel", "2022", "gray"]
  ];

  let pronouns = [["he/him"]];

  let elements = [];
  for (let person of people) {
    let first = person[0];
    let last = person[1];
    elements.push(
      displayPerson(first, last, pronouns, school, gradYear, color)
    );
  }
  return <div> {elements} </div>;
}
