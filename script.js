const materias = [
  {
    nombre: "Anatomía Humana",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: ["Fisiología Humana"]
  },
  {
    nombre: "Fundamentos de la Matemática",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: ["Bioestadística"]
  },
  {
    nombre: "Metodología del Trabajo Académico",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Introducción a la Biología",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: ["Microbiología", "Parasitología"]
  },
  {
    nombre: "Introducción a la Química",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: ["Bioquímica"]
  },
  {
    nombre: "Apreciación del Arte Universal",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Historia de la Enfermería (E)",
    ciclo: "1° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Introducción al Cuidado Enfermero",
    ciclo: "2° Semestre",
    requisitos: [],
    abre: ["Cuidado Enfermero al Adulto I"]
  },
  {
    nombre: "Bioquímica",
    ciclo: "2° Semestre",
    requisitos: ["Introducción a la Química"],
    abre: ["Fisiología Humana"]
  },
  {
    nombre: "Microbiología",
    ciclo: "2° Semestre",
    requisitos: ["Introducción a la Biología"],
    abre: []
  },
  {
    nombre: "Parasitología",
    ciclo: "2° Semestre",
    requisitos: ["Introducción a la Biología"],
    abre: []
  },
  {
    nombre: "Lingüística, Comprensión y Redacción Académica",
    ciclo: "2° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Realidad Nacional",
    ciclo: "2° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Cuidado Humanizado",
    ciclo: "2° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Informática Básica para la Salud",
    ciclo: "2° Semestre",
    requisitos: [],
    abre: []
  },
  {
    nombre: "Fisiología Humana",
    ciclo: "3° Semestre",
    requisitos: ["Anatomía Humana", "Bioquímica"],
    abre: ["Farmacología", "Semiología"]
  },
  {
    nombre: "Farmacología",
    ciclo: "4° Semestre",
    requisitos: ["Fisiología Humana"],
    abre: []
  }
  // Continúa agregando el resto aquí...
];

const estadoMaterias = {};
const malla = document.getElementById("malla");

// Agrupar por ciclos
const ciclos = [...new Set(materias.map(m => m.ciclo))];
const columnas = {};

ciclos.forEach(ciclo => {
  const columna = document.createElement("div");
  columna.classList.add("semestre");
  const titulo = document.createElement("h2");
  titulo.textContent = ciclo;
  columna.appendChild(titulo);
  malla.appendChild(columna);
  columnas[ciclo] = columna;
});

function crearMalla() {
  materias.forEach(m => {
    estadoMaterias[m.nombre] = m.requisitos.length ? "bloqueada" : "pendiente";

    const div = document.createElement("div");
    div.className = `materia ${estadoMaterias[m.nombre]}`;
    div.innerText = m.nombre;
    div.id = m.nombre;

    div.addEventListener("click", () => aprobarMateria(m));

    columnas[m.ciclo].appendChild(div);
  });
}

function aprobarMateria(m) {
  const div = document.getElementById(m.nombre);
  if (estadoMaterias[m.nombre] === "aprobada") return;

  estadoMaterias[m.nombre] = "aprobada";
  div.classList.add("aprobada");

  materias.forEach(materia => {
    if (materia.requisitos.includes(m.nombre)) {
      const pendientes = materia.requisitos.filter(
        r => estadoMaterias[r] !== "aprobada"
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
