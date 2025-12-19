
import React from 'react';
import { BookOpen, GraduationCap, MapPin, Star, Clock, Users, ArrowUpRight } from 'lucide-react';

const COURSES = [
  { title: "Full-Stack Development", provider: "AkinTech Academy", duration: "12 Weeks", rating: 4.9, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" },
  { title: "AI Engineering & Gemini", provider: "AkinTech AI Lab", duration: "8 Weeks", rating: 5.0, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
  { title: "Cybersecurity & FRP Bypass", provider: "Tech Vault", duration: "6 Weeks", rating: 4.8, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" }
];

const SCHOLARSHIPS = [
  { title: "Liberian Tech Excellence", location: "Monrovia / Global", amount: "Full Tuition", deadline: "Aug 2025" },
  { title: "African Innovators Grant", location: "Remote", amount: "$5,000", deadline: "Dec 2025" },
  { title: "STEM Women Scholarship", location: "Global", amount: "Partial + Laptop", deadline: "Oct 2025" }
];

const CourseHub: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      <section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase">Courses</h2>
            <p className="text-gray-400 text-lg">Master the nexus of technology.</p>
          </div>
          <button className="text-cyan-400 font-bold hover:underline flex items-center gap-1">View All <ArrowUpRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, i) => (
            <div key={i} className="glass-panel rounded-[2.5rem] overflow-hidden border-white/5 hover:border-cyan-500/30 transition-all group cursor-pointer">
              <img src={course.image} className="w-full h-48 object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-cyan-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-black">{course.rating}</span>
                </div>
                <h3 className="text-2xl font-black mb-2 leading-tight">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{course.provider}</p>
                <div className="flex justify-between items-center text-xs text-gray-400 font-bold uppercase tracking-widest pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 2.4k Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase">Scholarships</h2>
            <p className="text-gray-400 text-lg">Financial support for the brightest minds.</p>
          </div>
        </div>
        <div className="space-y-4">
          {SCHOLARSHIPS.map((scholarship, i) => (
            <div key={i} className="glass-panel p-8 rounded-[2rem] border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors group">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-xl font-black mb-1">{scholarship.title}</h3>
                   <p className="text-gray-500 text-sm flex items-center gap-2"><MapPin className="w-3 h-3" /> {scholarship.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                 <div className="text-right">
                    <p className="text-cyan-400 font-black text-xl">{scholarship.amount}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Deadline: {scholarship.deadline}</p>
                 </div>
                 <button className="bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseHub;
