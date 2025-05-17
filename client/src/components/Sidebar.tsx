import React from "react";

const Sidebar = () => {
  const categories = [
    { name: "ADMINISTRACIÓN", count: 54 },
    { name: "ARQUITECTURA", count: 47 },
    { name: "CARRETERAS", count: 67 },
    { name: "CIVIL", count: 28 },
    { name: "CONSTRUCCIÓN", count: 36 },
    { name: "CONTABILIDAD", count: 8 },
    { name: "DERECHO", count: 27 },
    { name: "ELÉCTRICA", count: 30 },
    { name: "ENFERMERÍA", count: 1 },
    { name: "GESTIÓN PÚBLICA", count: 333 },
    { name: "IDIOMAS", count: 5 },
  ];

  return (
    <div className="bg-light p-3 rounded">
      <h5 className="mb-3">Categorías</h5>
      <ul className="list-unstyled">
        {categories.map((category, index) => (
          <li className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`category-${index}`}
            />
            <label
              className="form-check-label d-flex justify-content-between"
              htmlFor={`category-${index}`}
            >
              <span>{category.name}</span>
              <span className="text-muted">({category.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
