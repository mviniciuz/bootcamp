import React, { useState, useEffect, useMemo, useCallback } from "react";

// import { Container } from './styles';

export default function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState("");

  //function handleAdd() {
  //  setTech([...tech, newTech]);
  //  setNewTech("");
  //}

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech("");
  }, [newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem("tech");

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []); //ComponentdiAmount;

  const techSize = useMemo(() => tech.length, [tech]);

  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]); //ComponetDidUpdate

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
      <strong> Você tem {techSize} Tecnologias</strong>
    </>
  );
}
