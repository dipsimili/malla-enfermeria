// script.js

const materias = [
  {
    nombre: "Anatomía Humana",
    requisitos: [],
    abre: ["Fisiología Humana"]
  },
  {
    nombre: "Fundamentos de la Matemática",
    requisitos: [],
    abre: ["Bioestadística"]
  },
  {
    nombre: "Metodología del Trabajo Académico",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Introducción a la Biología",
    requisitos: [],
    abre: ["Microbiología", "Parasitología"]
  },
  {
    nombre: "Introducción a la Química",
    requisitos: [],
    abre: ["Bioquímica"]
  },
  {
    nombre: "Apreciación del Arte Universal",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Historia de la Enfermería",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Introducción al Cuidado Enfermero",
    requisitos: [],
    abre: ["Cuidado Enfermero al Adulto I"]
  },
  {
    nombre: "Bioquímica",
    requisitos: ["Introducción a la Química"],
    abre: ["Fisiología Humana"]
  },
  {
    nombre: "Microbiología",
    requisitos: ["Introducción a la Biología"],
    abre: []
  },
  {
    nombre: "Parasitología",
    requisitos: ["Introducción a la Biología"],
    abre: []
  },
  {
    nombre: "Lingüística, Comprensión y Redacción Académica",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Realidad Nacional",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Cuidado Humanizado",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Informática Básica para la Salud",
    requisitos: [],
    abre: []
  }
  // Puedes continuar agregando el resto de materias aquí siguiendo el mismo formato
];

const estadoMaterias = {}; // Guardar estado actual
const malla = document.getElementById("malla");

function crearMalla() {
  materias.forEach((m) => {
    estadoMaterias[m.nombre] = m.requisitos.length ? "bloqueada" : "pendiente";
  });

  materias.forEach((m) => {
    const div = document.createElement("div");
    div.className = `materia ${estadoMaterias[m.nombre]}`;
    div.innerText = m.nombre;
    div.id = m.nombre;

    div.addEventListener("click", () => aprobarMateria(m));

    malla.appendChild(div);
  });
}

function aprobarMateria(m) {
  const div = document.getElementById(m.nombre);
  if (estadoMaterias[m.nombre] === "aprobada") return;

  estadoMaterias[m.nombre] = "aprobada";
  div.classList.add("aprobada");

  // Desbloquear materias que dependían de esta
  materias.forEach((materia) => {
    if (materia.requisitos.includes(m.nombre)) {
      const pendientes = materia.requisitos.filter(
        (r) => estadoMaterias[r] !== "aprobada"
      );
      if (pendientes.length === 0) {
        estadoMaterias[materia.nombre] = "pendiente";
        const desbloquear = document.getElementById(materia.nombre);
        desbloquear.classList.remove("bloqueada");
      }
    }
  });
}

crearMalla();
