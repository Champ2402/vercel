import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronRight, Flag, Settings, User } from 'lucide-react';

// SEO component for reusable meta tags
const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

const Header = () => (
  <header className="bg-indigo-600 text-white p-4">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">हिंदी-English Typing Practice</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-indigo-200">Home</Link>
        <Link to="/practice" className="hover:text-indigo-200">Practice</Link>
        <Link to="/lessons" className="hover:text-indigo-200">Lessons</Link>
        <Link to="/profile" className="hover:text-indigo-200">Profile</Link>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2024 हिंदी-English Typing Practice. All rights reserved.</p>
  </footer>
);

const Home = () => (
  <div className="container mx-auto p-8">
    <SEO 
      title="हिंदी-English Typing Practice | Improve Your Typing Skills"
      description="Enhance your typing skills in both Hindi and English with our interactive lessons and practice sessions. Perfect for beginners and advanced typists."
      keywords="typing practice, Hindi typing, English typing, bilingual typing, typing speed, typing accuracy"
    />
    <h2 className="text-3xl font-bold mb-4">Welcome to हिंदी-English Typing Practice</h2>
    <p className="mb-4">Improve your typing skills in both Hindi and English with our interactive lessons and practice sessions.</p>
    <Link to="/practice" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Start Practicing</Link>
  </div>
);

const Practice = () => {
  // ... (Practice component logic remains the same)

  return (
    <div className="container mx-auto p-8">
      <SEO 
        title="Practice Hindi and English Typing | हिंदी-English Typing Practice"
        description="Practice your Hindi and English typing skills with customizable text input. Measure your WPM, accuracy, and track your progress."
        keywords="typing practice, Hindi typing exercise, English typing test, WPM calculator, typing accuracy"
      />
      {/* ... (Rest of the Practice component JSX) */}
    </div>
  );
};

const Lessons = () => (
  <div className="container mx-auto p-8">
    <SEO 
      title="Hindi and English Typing Lessons | हिंदी-English Typing Practice"
      description="Learn to type efficiently in Hindi and English with our structured typing lessons. From basic to advanced levels."
      keywords="typing lessons, Hindi keyboard layout, English typing tutorial, touch typing, typing techniques"
    />
    <h2 className="text-3xl font-bold mb-4">Typing Lessons</h2>
    <ul className="space-y-4">
      <li>
        <Link to="/lesson/1" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <ChevronRight className="mr-2" />
          Lesson 1: Basic Hindi Vowels
        </Link>
      </li>
      <li>
        <Link to="/lesson/2" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <ChevronRight className="mr-2" />
          Lesson 2: Hindi Consonants
        </Link>
      </li>
      <li>
        <Link to="/lesson/3" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <ChevronRight className="mr-2" />
          Lesson 3: English Alphabet
        </Link>
      </li>
      <li>
        <Link to="/lesson/4" className="flex items-center text-indigo-600 hover:text-indigo-800">
          <ChevronRight className="mr-2" />
          Lesson 4: Common English Words
        </Link>
      </li>
    </ul>
  </div>
);

const Profile = () => (
  <div className="container mx-auto p-8">
    <SEO 
      title="User Profile | हिंदी-English Typing Practice"
      description="View your typing statistics, achievements, and progress in Hindi and English typing practice."
      keywords="typing profile, typing statistics, WPM tracker, typing achievements, bilingual typing progress"
    />
    <h2 className="text-3xl font-bold mb-4">User Profile</h2>
    {/* ... (Rest of the Profile component JSX) */}
  </div>
);

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
