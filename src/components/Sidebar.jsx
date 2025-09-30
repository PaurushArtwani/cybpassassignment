const Sidebar = ({isActive}) => {
  const icons = ["🏠", "🔎", "📁", "📊", "⚙️", "👤"];
   const iconsName  = ["Home", "Search", "File", "Data", "Setting", "Your Profile"];

  return (
   <aside className={`sidebar d-flex flex-column align-items-center py-4 ${isActive ? "active" : ""}`}>

      <nav className="nav-icons d-flex flex-column gap-3">
        {icons.map((ic, idx) => (
          <div key={idx} className={`nav-icon ${idx === 1 ? "active" : ""}`}>
            <span>{ic}</span>
          <span className="label">{iconsName[idx]}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
