import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="pagination">
        <div className="previous-page">Anterior</div>
        <div className="page-index selected-page">1</div>
        <div className="page-index">2</div>
        <div className="page-index">3</div>
        <div className="page-index">4</div>
        <div className="next-page">Próximo</div>
    </div>
  );
};

export default Pagination;
