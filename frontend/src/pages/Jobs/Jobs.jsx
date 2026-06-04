import React, { useState } from "react";
import { ArrowRight, MapPin, Briefcase, X, Upload } from "lucide-react";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeForm, setResumeForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp India",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹12L - ₹16L",
      description: "Build responsive web applications with React and modern tools.",
      fullDescription: "Build responsive web applications with React and modern tools. We are looking for an experienced frontend developer with 5+ years of experience in React development. You will work on cutting-edge projects and mentor junior developers.",
      requirements: ["React.js expertise", "5+ years experience", "HTML5/CSS3", "Git proficiency"]
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CloudSystems Ltd",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹13L - ₹17L",
      description: "Develop scalable server-side solutions using Node.js and databases.",
      fullDescription: "Develop scalable server-side solutions using Node.js and databases. Join our growing backend team and help build the infrastructure that powers our platform. Experience with microservices architecture is a plus.",
      requirements: ["Node.js", "MongoDB/PostgreSQL", "REST APIs", "Docker/Kubernetes"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹10L - ₹14L",
      description: "Work on both frontend and backend of our learning platform.",
      fullDescription: "Work on both frontend and backend of our learning platform. This is a great opportunity to grow your full-stack skills in a fast-paced startup environment.",
      requirements: ["React & Node.js", "Database design", "Problem solving", "Communication skills"]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "DesignHub Creative",
      location: "Pune, India",
      type: "Contract",
      salary: "₹8L - ₹12L",
      description: "Create beautiful and intuitive user interfaces for web applications.",
      fullDescription: "Create beautiful and intuitive user interfaces for web applications. We value creativity and user-centered design. Portfolio required.",
      requirements: ["UI/UX design", "Figma", "Design thinking", "Prototyping"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "InfraCloud Solutions",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹11L - ₹15L",
      description: "Manage cloud infrastructure and deployment pipelines.",
      fullDescription: "Manage cloud infrastructure and deployment pipelines. Work with AWS/Azure, CI/CD systems, and containerization technologies.",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Linux"]
    },
    {
      id: 6,
      title: "Junior Developer",
      company: "EduTech Academy",
      location: "Chennai, India",
      type: "Full-time",
      salary: "₹5L - ₹7L",
      description: "Entry-level position to grow your skills in web development.",
      fullDescription: "Entry-level position to grow your skills in web development. Perfect for fresh graduates. We provide mentoring and training.",
      requirements: ["HTML/CSS/JavaScript", "Basic React", "Problem solving", "Eagerness to learn"]
    },
  ];

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  const handleResumeInputChange = (e) => {
    const { name, value } = e.target;
    setResumeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResumeFileChange = (e) => {
    setResumeForm((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleResumeSubmit = (e) => {
    e.preventDefault();
    if (!resumeForm.name || !resumeForm.email || !resumeForm.phone || !resumeForm.resume) {
      alert("Please fill in all fields and upload a resume!");
      return;
    }
    // Simulate submission
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setShowResumeModal(false);
      setResumeForm({ name: "", email: "", phone: "", resume: null });
    }, 2000);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
    setUploadSuccess(false);
    setResumeForm({ name: "", email: "", phone: "", resume: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="pt-20 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {" "}
            Ram Our Team
          </h1>
          <p className="text-lg text-slate-300">
            Explore amazing career opportunities and grow with us in the world
            of education technology.
          </p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-sky-400/50 hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              {/* Job Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-sky-500/20 text-sky-300 text-sm font-semibold rounded-full">
                  {job.type}
                </span>
                <Briefcase className="w-5 h-5 text-sky-400" />
              </div>

              {/* Job Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition">
                {job.title}
              </h2>

              {/* Company */}
              <p className="text-slate-300 font-semibold mb-4">{job.company}</p>

              {/* Description */}
              <p className="text-slate-400 mb-4 line-clamp-2">{job.description}</p>

              {/* Location & Salary */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>{job.location}</span>
                </div>
                <p className="text-sky-300 font-semibold">{job.salary}</p>
              </div>

              {/* Apply Button */}
              <button 
                onClick={() => handleViewDetails(job)}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-3"
              >
                View Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-400 mb-6">
            Don't see the right position? Submit your resume and we'll keep you
            in mind for future opportunities.
          </p>
          <button 
            onClick={() => setShowResumeModal(true)}
            className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Submit Your Resume
          </button>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sky-400/30 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedJob.title}
                </h2>
                <p className="text-slate-300 font-semibold">{selectedJob.company}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Location & Salary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">Location</p>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    {selectedJob.location}
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">Salary</p>
                  <p className="text-sky-300 font-semibold">{selectedJob.salary}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-slate-400 text-sm mb-1">Type</p>
                  <p className="text-white font-semibold">{selectedJob.type}</p>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">About the Role</h3>
                <p className="text-slate-300 leading-relaxed">
                  {selectedJob.fullDescription}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Key Requirements</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Now Button */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => alert(`Applied for ${selectedJob.title}! We will review your application.`)}
                  className="flex-1 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Apply Now
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 border border-slate-500 text-slate-300 hover:text-white hover:border-slate-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Upload Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full border border-sky-400/30 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Submit Your Resume
              </h2>
              <button
                onClick={closeResumeModal}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {uploadSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Resume Submitted Successfully!
                  </h3>
                  <p className="text-slate-300">
                    Thank you for submitting your resume. We'll review it and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleResumeSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={resumeForm.name}
                      onChange={handleResumeInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={resumeForm.email}
                      onChange={handleResumeInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={resumeForm.phone}
                      onChange={handleResumeInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Upload Resume
                    </label>
                    <div className="relative border-2 border-dashed border-slate-600 rounded-lg p-6 hover:border-sky-500 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-300 font-semibold">
                          {resumeForm.resume
                            ? resumeForm.resume.name
                            : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-slate-400 text-sm">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Submit Resume
                    </button>
                    <button
                      type="button"
                      onClick={closeResumeModal}
                      className="flex-1 border border-slate-500 text-slate-300 hover:text-white hover:border-slate-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
