import Header from "./components/Header";
import CourseGoals from "./components/CourseGoals";

import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals
        goals={[
          {
            id: 1,
            title: "Learn TS React",
            description: "Learn TS from the ground up.",
          },
          {
            id: 2,
            title: "Practice TS",
            description: "Practice working with TypeScript",
          },
        ]}
      />
    </main>
  );
}

export default App;
