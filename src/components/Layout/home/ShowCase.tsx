import React from 'react';
import Slider from '../../Element/Slider';
import Popular from '../../Element/Popular';

const ShowCase: React.FC = () => {
  return (
    <section className="container" id="showcase">
        <aside className="left-aside">
            <div className="aside-title">Categorias</div>
            <div className="categories-list">
                <div className="category">Roupas</div>
                <div className="category">Acessórios</div>
                <div className="category">Luminárias</div>
                <div className="category">Canecas</div>
                <div className="category">Kharitas</div>
                <div className="category">Especiais</div>
                <div className="more-categories">
                    <div className="category-text">Mais</div>
                    <div className="more-categories-icon">›</div>
                </div>
            </div>
        </aside>
        <div className="banner">
            <Slider />
        </div>
        <aside className="right-aside">
            <div className="aside-title-background">Populares</div>
            <Popular />
            <Popular />
            <Popular />
        </aside>
    </section>
  );
};

export default ShowCase;
