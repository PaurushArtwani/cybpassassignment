import React from 'react';

const Sidebar = () => {
  const icons = ['🏠','🔎','📁','📊','⚙️','👤'];
  return (
    <aside className="sidebar d-flex flex-column align-items-center py-4">
      <div className="brand mb-4">CYB<span>PASS</span></div>
      <nav className="nav-icons d-flex flex-column gap-3">
        {icons.map((ic, idx) => (
          <div key={idx} className={`nav-icon ${idx===1 ? 'active' : ''}`}>
            <span>{ic}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
