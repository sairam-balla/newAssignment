import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PullRequestList from "./components/PullRequests/PullRequestList";
import PullRequestForm from "./components/PullRequests/PullRequestForm";
import PullRequestDetails from "./components/PullRequests/PullRequestDetails";
import Loader from "./components/Common/Loader";

const App = () => {
  return (
    <Router>
      <div className="w-dvw bg-slate-100 min-h-dvh ">
        <header className="bg-slate-950 text-white flex h-16 justify-between items-center px-8 mb-6">
          <h1 className="text-2xl font-semibold">
            Pull Request Management System
          </h1>
          <nav className="flex justify-between gap-16">
            <a href="/">Home</a>
            <a href="/create-pull-request">Create Pull Request</a>
          </nav>
        </header>
        <main>
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PullRequestList />} />
              <Route
                path="/create-pull-request"
                element={<PullRequestForm isEditing={false} />}
              />
              <Route
                path="/pull-requests/:id"
                element={<PullRequestDetails />}
              />
              <Route
                path="/pull-requests/edit/:id/"
                element={<PullRequestForm />}
              />
            </Routes>
          </React.Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
