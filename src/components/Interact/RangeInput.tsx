import React from 'react';

const RangeInput: React.FC = () => {
  return (
    <div className="filter-item">
        <div className="filter-title">Preço</div>
        <div className="filter-range">
            <input type="range" id="filterRange" className="filter-range-input" min="0" max="100" step=".25"/>
        </div>
        <div className="filter-output">
            <div className="filter-range-values">
                <div className="filter-range-title">Mín</div>
                <input className="filter-range-value" value="0"/>
            </div>
            <div className="filter-range-values">
                <div className="filter-range-title">Máx</div>
                <input className="filter-range-value" value="100"/>
            </div>
        </div>
    </div>
  );
};

export default RangeInput;
