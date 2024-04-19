import { AddQuestion } from "./components/AddQuestion";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Question } from "./components/Question";
import { QuizSelection } from "./components/QuizSelection";
import { QuizProvider } from "./contexts/QuizContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        {/* <AddQuestion /> */}
        <div className="App font-mono relative">
          <div
            style={{ border: ["1px solid red"] }}
            className="bg-gradient-to-r from-cyan-300 to-blue-400 w-full min-h-screen"
          >
            <div className="bg-red-300 h-fit">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<QuizSelection />} />
              <Route path="/quiz/:id" element={<Question />} />
              {/* <Route path="/add_question" element={<AddQuestion />} /> */}
            </Routes>
          </div>
        </div>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
