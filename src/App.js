import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Question } from "./components/Question";
import { QuizCard } from "./components/QuizCard";
import { QuizSelection } from "./components/QuizSelection";
import quizes from "./quizes.json"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App font-mono">
        <div className="bg-white w-full h-screen">
          <div className="bg-red-300 h-fit">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizSelection quizes={quizes} />} />
            {quizes.map((quiz) => (
              <Route key={quiz.id} path={`/quiz/${quiz.id}`} element={<Question questions={quiz.questions} />} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
