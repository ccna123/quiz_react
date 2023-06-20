import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Question } from "./components/Question";
import { QuizSelection } from "./components/QuizSelection";
import quizes from "./quizes.json"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App font-mono relative">
        <div style={{ border: ['1px solid red'] }} className="bg-gradient-to-r from-cyan-300 to-blue-400 w-full min-h-screen">
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
