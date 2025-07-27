const materias = [
  // PRIMER AÑO
  { nombre: "Anatomía Humana", ciclo: "1° Semestre", requisitos: [], abre: ["Fisiología Humana"] },
  { nombre: "Fundamentos de la Matemática", ciclo: "1° Semestre", requisitos: [], abre: ["Bioestadística"] },
  { nombre: "Metodología del Trabajo Académico", ciclo: "1° Semestre", requisitos: [], abre: [] },
  { nombre: "Introducción a la Biología", ciclo: "1° Semestre", requisitos: [], abre: ["Microbiología", "Parasitología"] },
  { nombre: "Introducción a la Química", ciclo: "1° Semestre", requisitos: [], abre: ["Bioquímica"] },
  { nombre: "Apreciación del Arte Universal", ciclo: "1° Semestre", requisitos: [], abre: [] },
  { nombre: "Historia de la Enfermería (E)", ciclo: "1° Semestre", requisitos: [], abre: [] },

  { nombre: "Introducción al Cuidado Enfermero", ciclo: "2° Semestre", requisitos: [], abre: ["Cuidado Enfermero al Adulto I"] },
  { nombre: "Bioquímica", ciclo: "2° Semestre", requisitos: ["Introducción a la Química"], abre: ["Fisiología Humana"] },
  { nombre: "Microbiología", ciclo: "2° Semestre", requisitos: ["Introducción a la Biología"], abre: [] },
  { nombre: "Parasitología", ciclo: "2° Semestre", requisitos: ["Introducción a la Biología"], abre: [] },
  { nombre: "Lingüística, Comprensión y Redacción Académica", ciclo: "2° Semestre", requisitos: [], abre: [] },
  { nombre: "Realidad Nacional", ciclo: "2° Semestre", requisitos: [], abre: [] },
  { nombre: "Cuidado Humanizado", ciclo: "2° Semestre", requisitos: [], abre: [] },
  { nombre: "Informática Básica para la Salud", ciclo: "2° Semestre", requisitos: [], abre: [] },

  // SEGUNDO AÑO
  { nombre: "Introducción a la Enfermería Comunitaria", ciclo: "3° Semestre", requisitos: [], abre: ["Enfermería en Salud Familiar y Comunitaria"] },
  { nombre: "Cuidado Enfermero en Salud Mental I", ciclo: "3° Semestre", requisitos: [], abre: ["Cuidado Enfermero en Salud Mental II"] },
  { nombre: "Fisiología Humana", ciclo: "3° Semestre", requisitos: ["Anatomía Humana", "Bioquímica"], abre: ["Farmacología", "Semiología"] },
  { nombre: "Socioantropología", ciclo: "3° Semestre", requisitos: [], abre: [] },
  { nombre: "Ciudadanía e Interculturalidad", ciclo: "3° Semestre", requisitos: [], abre: [] },
  { nombre: "Desarrollo Emocional, Gestión de Conflictos Y Liderazgo", ciclo: "3° Semestre", requisitos: [], abre: [] },
  { nombre: "Enfermería en Salud Escolar (E)", ciclo: "3° Semestre", requisitos: [], abre: [] },
  { nombre: "Taxonomía Nanda, Nic, Noc (E)", ciclo: "3° Semestre", requisitos: [], abre: [] },

  { nombre: "Cuidado Enfermero al Adulto I", ciclo: "4° Semestre", requisitos: ["Introducción al Cuidado Enfermero"], abre: ["Cuidado Enfermero al Adulto II", "Cuidado Enfermero al Adulto Mayor"] },
  { nombre: "Farmacología", ciclo: "4° Semestre", requisitos: ["Fisiología Humana"], abre: [] },
  { nombre: "Semiología", ciclo: "4° Semestre", requisitos: ["Fisiología Humana"], abre: [] },
  { nombre: "Bioestadística", ciclo: "4° Semestre", requisitos: ["Fundamentos de la Matemática"], abre: ["Epidemiología en Enfermería"] },
  { nombre: "Ecología y Conservación Ambiental", ciclo: "4° Semestre", requisitos: [], abre: [] },
  { nombre: "Cuidados Paliativos, Muerte Y Duelo (E)", ciclo: "4° Semestre", requisitos: [], abre: [] },
  { nombre: "Salud Y Seguridad En El Trabajo (E)", ciclo: "4° Semestre", requisitos: [], abre: [] },

  // TERCER AÑO
  { nombre: "Cuidado Enfermero Al Adulto II", ciclo: "5° Semestre", requisitos: ["Cuidado Enfermero al Adulto I"], abre: ["Cuidado Enfermero a la Mujer", "Gestión de Los Servicios de Salud"] },
  { nombre: "Cuidado Enfermero al Adulto Mayor", ciclo: "5° Semestre", requisitos: ["Cuidado Enfermero al Adulto I"], abre: [] },
  { nombre: "Nutrición", ciclo: "5° Semestre", requisitos: [], abre: [] },
  { nombre: "Epidemiología en Enfermería", ciclo: "5° Semestre", requisitos: ["Bioestadística"], abre: [] },
  { nombre: "Ética General Y Deontología", ciclo: "5° Semestre", requisitos: [], abre: [] },
  { nombre: "Comunicación Terapéutica (E)", ciclo: "5° Semestre", requisitos: [], abre: [] },
  { nombre: "Planificación Educativa En Salud (E)", ciclo: "5° Semestre", requisitos: [], abre: [] },
  { nombre: "Introducción a La Metodología de La Investigación Científica (E)", ciclo: "5° Semestre", requisitos: [], abre: [] },

  { nombre: "Cuidado Enfermero a la Mujer", ciclo: "6° Semestre", requisitos: ["Cuidado Enfermero Al Adulto II"], abre: ["Cuidado Enfermero al Neonato, Niño y Adolescente I", "Crecimiento y Desarrollo e Inmunizaciones"] },
  { nombre: "Enfermería en Salud Familiar y Comunitaria", ciclo: "6° Semestre", requisitos: ["Introducción a la Enfermería Comunitaria"], abre: [] },
  { nombre: "Legislación en Salud", ciclo: "6° Semestre", requisitos: [], abre: [] },
  { nombre: "Quechua", ciclo: "6° Semestre", requisitos: [], abre: [] },
  { nombre: "Modelos y Teorías en Enfermería (E)", ciclo: "6° Semestre", requisitos: [], abre: [] },
  { nombre: "Promoción De La Salud (E)", ciclo: "6° Semestre", requisitos: [], abre: [] },
  { nombre: "Investigación Aplicada a La Enfermería (E)", ciclo: "6° Semestre", requisitos: [], abre: [] },

  // CUARTO AÑO
  { nombre: "Cuidado Enfermero al Neonato, Niño y Adolescente I", ciclo: "7° Semestre", requisitos: ["Cuidado Enfermero a la Mujer", "Crecimiento y Desarrollo e Inmunizaciones"], abre: ["Cuidado Enfermero al Neonato, Niño y Adolescente II"] },
  { nombre: "Crecimiento y Desarrollo e Inmunizaciones", ciclo: "7° Semestre", requisitos: ["Cuidado Enfermero a la Mujer"], abre: ["Cuidado Enfermero al Neonato, Niño y Adolescente II"] },
  { nombre: "Gestión de Los Servicios de Salud", ciclo: "7° Semestre", requisitos: ["Cuidado Enfermero Al Adulto II"], abre: [] },
  { nombre: "Investigación en Enfermería", ciclo: "7° Semestre", requisitos: [], abre: ["Trabajo de Investigación"] },
  { nombre: "Medicina Tradicional y Complementaria (E)", ciclo: "7° Semestre", requisitos: [], abre: [] },
  { nombre: "Proyectos De Desarrollo En Salud (E)", ciclo: "7° Semestre", requisitos: [], abre: [] },

  { nombre: "Cuidado Enfermero al Neonato, Niño y Adolescente II", ciclo: "8° Semestre", requisitos: ["Cuidado Enfermero al Neonato, Niño y Adolescente I", "Crecimiento y Desarrollo e Inmunizaciones"], abre: [] },
  { nombre: "Cuidado Enfermero en Salud Mental II", ciclo: "8° Semestre", requisitos: ["Cuidado Enfermero en Salud Mental I"], abre: [] },
  { nombre: "Emergencias y Desastres", ciclo: "8° Semestre", requisitos: [], abre: [] },
  { nombre: "Trabajo de Investigación", ciclo: "8° Semestre", requisitos: ["Investigación en Enfermería"], abre: [] },
  { nombre: "Estimulación Temprana (E)", ciclo: "8° Semestre", requisitos: [], abre: [] },
  { nombre: "Tecnología Aplicada al Cuidado Enfermero (E)", ciclo: "8° Semestre", requisitos: [], abre: [] },

  // QUINTO AÑO
  { nombre: "Internado I", ciclo: "9° Semestre", requisitos: [], abre: [] },
  { nombre: "Internado II", ciclo: "10° Semestre", requisitos: [], abre: [] }
];

const estadoMaterias = {};
const malla = document.getElementById("malla");

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
