'use client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Home = () => <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
  <div className="min-h-28 ">
    <div className="max-w-screen-lg mx-auto py-4">

      <div className="rounded-lg overflow-hidden relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
        <div className="relative z-20 p-10 h-full w-1/2">
          <h2 className="text-white text-3xl font-semibold">Web Development Group</h2>
          <div className="flex gap-4 items-center pt-4 border-t border-slate-300 text-slate-300 mt-6">
            <p className="text-sm text-slate-200 mt-4">
              Check out the links below to learn more about our group!
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        
        <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img src="/question-mark.png" className="mt-3 object-contain h-52 w-full" alt=""/>
          <div className="p-6 flex flex-col flex-1">
            <span className="block text-slate-400 font-semibold text-xl">About Page</span>
            <h2 className="mt-3 mb-2 text-xs text-slate-400 mb-3">Find information about our group goals</h2>
            <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
            </div>
          </div>
        </div>

        <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
        <img src="/question-mark.png" className="mt-3 object-contain h-52 w-full" alt=""/>
          <div className="p-6 flex flex-col flex-1">
            <span className="block text-slate-400 font-semibold text-xl">Projects</span>
            <h2 className="mt-3 mb-2 text-xs text-slate-400 mb-3">Check out what our group has worked on</h2>
            <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
            </div>
          </div>
        </div>

        <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
        <img src="/question-mark.png" className="mt-3 object-contain h-52 w-full" alt=""/>
          <div className="p-6 flex flex-col flex-1">
            <span className="block text-slate-400 font-semibold text-xl">Contact</span>
            <h2 className="mt-3 mb-2 text-xs text-slate-400 mb-3">Find out how to contact us</h2>
            <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>;

const About = () => <div className="p-4">About Page</div>;
const Projects = () => <div className="p-4">Projects Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}