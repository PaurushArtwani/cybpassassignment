import React from 'react';

const InputBar = ({ value, onChange, onNext, onSkip, disabledNext }) => {
  return (
    <div className="input-bar mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control input-answer"
          placeholder="Type your answer here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !disabledNext) onNext(); }}
        />
        <button className="btn btn-outline-light skip-btn" type="button" onClick={onSkip}>
          Skip for now
        </button>
        <button className="btn next-btn" type="button" onClick={onNext} disabled={disabledNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InputBar;
