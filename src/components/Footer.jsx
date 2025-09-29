import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer text-center py-3 small text-muted">
      © {new Date().getFullYear()} CybPass — Onboarding powered by Themis
    </footer>
  );
};

export default Footer;
