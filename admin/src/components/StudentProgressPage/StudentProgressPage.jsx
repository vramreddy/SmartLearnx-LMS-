import React, { useEffect, useState, useRef } from "react";
import {
  Search,
  User,
  BookOpen,
  TrendingUp,
  Calendar,
  Award,
  BarChart3,
  Trash2,
  UserPlus,
  MoreVertical,
} from "lucide-react";
import { bookingsStyles } from "../../assets/dummyStyles";
import toast, { Toaster } from "react-hot-toast";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

const StudentProgressPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    course: "",
    email: "",
  });

  // debounce timer and abort controller
  const debounceRef = useRef(null);
  const abortRef = useRef(null);

  const fetchStudentProgress = async (search = "") => {
    setLoading(true);
    setError(null);

    // abort previous
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const q = new URLSearchParams();
      if (search) q.set("search", search);

      const res = await fetch(`${API_BASE}/api/booking?${q.toString()}`, {
        method: "GET",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.message || `Request failed with status ${res.status}`
        );
      }

      const data = await res.json();
      if (data && data.success) {
        // Transform bookings data into progress data
        const progressItems = (data.bookings || []).map((b, idx) => {
          // Calculate mock progress based on booking date (newer = less progress)
          const daysSincePurchase = b.createdAt
            ? Math.floor(
                (Date.now() - new Date(b.createdAt).getTime()) /
                  (1000 * 60 * 60 * 24)
              )
            : 0;
          const progress = Math.min(
            100,
            Math.max(0, Math.floor((daysSincePurchase / 30) * 100))
          );

          return {
            id: b._id || b.bookingId || String(idx),
            studentName: b.studentName || b.userName || "Unknown student",
            courseName: b.courseName || "Untitled course",
            teacherName: b.teacherName || "Unknown teacher",
            progress: progress,
            enrollmentDate: b.createdAt
              ? new Date(b.createdAt).toISOString().split("T")[0]
              : "",
            lastActivity: b.createdAt
              ? new Date(
                  new Date(b.createdAt).getTime() +
                    Math.random() * 7 * 24 * 60 * 60 * 1000
                )
                  .toISOString()
                  .split("T")[0]
              : "",
            status:
              progress >= 100
                ? "Completed"
                : progress > 0
                ? "In Progress"
                : "Not Started",
            completedModules: Math.floor((progress / 100) * 12),
            totalModules: 12,
          };
        });

        setProgressData(progressItems);
      } else {
        setProgressData([]);
        setError(data?.message || "No data");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        // aborted — ignore
      } else {
        console.error("fetchStudentProgress error:", err);
        setError(err.message || "Failed to fetch student progress");
      }
    } finally {
      setLoading(false);
    }
  };

  // initial fetch
  useEffect(() => {
    fetchStudentProgress("");
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // debounce search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchStudentProgress(searchTerm.trim());
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // Handle removing a student
  const handleRemoveStudent = async (studentId, studentName) => {
    try {
      // In a real application, this would make an API call to delete the booking
      // For now, we'll just remove it from the local state
      setProgressData((prev) => prev.filter((s) => s.id !== studentId));
      toast.success(`${studentName} removed successfully`);
      setDeleteConfirm(null);
    } catch (err) {
      toast.error("Failed to remove student");
      console.error(err);
    }
  };

  // Handle adding a new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    
    if (!newStudent.name || !newStudent.course) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // In a real application, this would make an API call to create a booking
      // For now, we'll just add it to the local state
      const newStudentData = {
        id: Date.now().toString(),
        studentName: newStudent.name,
        courseName: newStudent.course,
        teacherName: "Assigned Teacher",
        progress: 0,
        enrollmentDate: new Date().toISOString().split("T")[0],
        lastActivity: new Date().toISOString().split("T")[0],
        status: "Not Started",
        completedModules: 0,
        totalModules: 12,
      };

      setProgressData((prev) => [newStudentData, ...prev]);
      toast.success(`${newStudent.name} added successfully`);
      setShowAddModal(false);
      setNewStudent({ name: "", course: "", email: "" });
    } catch (err) {
      toast.error("Failed to add student");
      console.error(err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "Not Started":
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 25) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className={bookingsStyles.pageContainer}>
      <Toaster position="top-right" />
      <div className={bookingsStyles.contentContainer}>
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className={bookingsStyles.headerTitle}>Student Progress</h1>
            <p className={bookingsStyles.headerSubtitle}>
              Track and monitor student learning progress across all courses
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium whitespace-nowrap"
          >
            <UserPlus className="w-5 h-5" />
            Add Student
          </button>
        </div>

        {/* Search */}
        <div className={bookingsStyles.searchContainer}>
          <div className={bookingsStyles.searchInputContainer}>
            <Search className={bookingsStyles.searchIcon} />
            <input
              type="text"
              placeholder="Search by student name or course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={bookingsStyles.searchInput}
            />
          </div>
        </div>

        {/* Loading / Error */}
        <div style={{ minHeight: 36 }}>
          {loading && (
            <div className={bookingsStyles.loadingState}>
              <p>Loading student progress…</p>
            </div>
          )}
          {!loading && error && (
            <div className={bookingsStyles.errorState}>
              <p>Error: {error}</p>
            </div>
          )}
        </div>

        {/* Progress Grid */}
        <div className={bookingsStyles.bookingsGrid}>
          {!loading &&
            progressData.map((student) => (
              <div key={student.id} className="relative">
                <div className={bookingsStyles.bookingCard}>
                  {/* Action Button - Always Visible */}
                  <button
                    onClick={() => setDeleteConfirm(student)}
                    className="absolute top-3 right-3 p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                    title="Remove Student"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* Student Header */}
                  <div className={bookingsStyles.studentSection}>
                    <div className={bookingsStyles.studentIconContainer}>
                      <User className={bookingsStyles.studentIcon} />
                    </div>
                    <div className={bookingsStyles.studentInfo}>
                      <h3 className={bookingsStyles.studentName}>
                        {student.studentName}
                      </h3>
                      <p className={bookingsStyles.purchaseDate}>
                        Enrolled on {student.enrollmentDate || "—"}
                      </p>
                    </div>
                  </div>

                {/* Course & Progress Info */}
                <div className={bookingsStyles.courseDetails}>
                  <div className={bookingsStyles.detailItem}>
                    <BookOpen className={bookingsStyles.detailIcon} />
                    <span className={bookingsStyles.detailLabel}>Course:</span>
                    <span className={bookingsStyles.detailValue}>
                      {student.courseName}
                    </span>
                  </div>

                  <div className={bookingsStyles.detailItem}>
                    <BarChart3 className={bookingsStyles.detailIcon} />
                    <span className={bookingsStyles.detailLabel}>
                      Modules:
                    </span>
                    <span className={bookingsStyles.detailValue}>
                      {student.completedModules} / {student.totalModules}
                    </span>
                  </div>

                  <div className={bookingsStyles.detailItem}>
                    <Calendar className={bookingsStyles.detailIcon} />
                    <span className={bookingsStyles.detailLabel}>
                      Last Activity:
                    </span>
                    <span className={bookingsStyles.detailValue}>
                      {student.lastActivity || "—"}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">
                        Overall Progress
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {student.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-500 ${getProgressColor(
                        student.progress
                      )}`}
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={bookingsStyles.statusContainer}>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      student.status
                    )}`}
                  >
                    <Award className="w-3 h-3 inline mr-1" />
                    {student.status}
                  </span>
                </div>
              </div>
              </div>
            ))}
        </div>

        {/* Empty State */}
        {!loading && !error && progressData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <BarChart3 className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg">No student progress data found</p>
            <p className="text-sm mt-2">
              Student progress will appear here once courses are enrolled
            </p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <UserPlus className="w-6 h-6 text-blue-400" />
                Add New Student
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewStudent({ name: "", course: "", email: "" });
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  value={newStudent.name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter student name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Course Name *
                </label>
                <input
                  type="text"
                  value={newStudent.course}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, course: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter course name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={newStudent.email}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter student email"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setNewStudent({ name: "", course: "", email: "" });
                  }}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 rounded-full">
                <Trash2 className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Remove Student</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Are you sure you want to remove{" "}
              <span className="font-semibold text-white">
                {deleteConfirm.studentName}
              </span>{" "}
              from{" "}
              <span className="font-semibold text-white">
                {deleteConfirm.courseName}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  handleRemoveStudent(
                    deleteConfirm.id,
                    deleteConfirm.studentName
                  )
                }
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProgressPage;
