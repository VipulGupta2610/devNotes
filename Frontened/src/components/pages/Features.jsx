import React from 'react'

function Features() {

const features = [
  {
    title: "Subject-wise & Chapter-wise Notes",
    description: "Browse notes easily by selecting subject and chapter.",
    icon: "📚",
    category: "Student"
  },
  {
    title: "Smart Search",
    description: "Search notes by keyword or topic instantly.",
    icon: "🔍",
    category: "Student"
  },
  {
    title: "Download PDF Notes",
    description: "One-click downloads of clean, printable notes.",
    icon: "📥",
    category: "Student"
  },
  {
    title: "View Without Downloading",
    description: "Preview notes directly in the browser.",
    icon: "👁",
    category: "Student"
  },
  {
    title: "Light & Dark Mode",
    description: "Toggle themes for a comfortable viewing experience.",
    icon: "🌙",
    category: "Student"
  },
  {
    title: "Upload Notes",
    description: "Upload PDFs categorized by subject and chapter.",
    icon: "⬆",
    category: "Admin"
  },
  {
    title: "Edit/Delete Notes",
    description: "Manage existing notes with full control.",
    icon: "🛠",
    category: "Admin"
  },
  {
    title: "Fast and Clean UI/UX",
    description: "Smooth and minimal interface for users.",
    icon: "⚡",
    category: "General"
  },
  {
    title: "Mobile Responsive",
    description: "Perfect layout across all devices.",
    icon: "📱",
    category: "General"
  },
  {
    title: "AI-powered Search (Future)",
    description: "Get smart suggestions while searching.",
    icon: "🧠",
    category: "General"
  }
];

  const grouped = {
    Student: features.filter(f => f.category === "Student"),
    Admin: features.filter(f => f.category === "Admin"),
    General: features.filter(f => f.category === "General")
  };

  return (
       <div className="p-6 max-w-6xl mx-auto sm:mt-20 mt-20">
      <h1 className="text-4xl font-bold text-center mb-10 mt-5">🚀 Features of Our Note Sharing Platform</h1>

      {Object.entries(grouped).map(([section, items]) => (
        <div key={section} className="mb-10">
          <h2 className="text-4xl font-bold mb-4">{section === "Student" ? "🎓 For Students" : section === "Admin" ? "🛠 For Admins (Future)" : "🌐 General Features"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-gradient-to-r from-violet-500 to-indigo-600 p-5 rounded-2xl shadow-md shadow-gray-400 hover:shadow-lg transition hover:scale-105"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xl font-semibold">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
