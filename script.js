const materias = [
  // PRIMER AÑO
  { nombre: "Anatomía Humana", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: ["Fisiología Humana"] },
  { nombre: "Fundamentos de la Matemática", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: ["Bioestadística"] },
  { nombre: "Metodología del Trabajo Académico", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: [] },
  { nombre: "Introducción a la Biología", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: ["Microbiología", "Parasitología"] },
  { nombre: "Introducción a la Química", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: ["Bioquímica"] },
  { nombre: "Apreciación del Arte Universal", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: [] },
  { nombre: "Historia de la Enfermería (E)", ciclo: "1° Semestre", anio: "Primer Año", requisitos: [], abre: [] },

  { nombre: "Introducción al Cuidado Enfermero", ciclo: "2° Semestre", anio: "Primer Año", requisitos: [], abre: ["Cuidado Enfermero al Adulto I"] },
  { nombre: "Bioquímica", ciclo: "2° Semestre", anio: "Primer Año", requisitos: ["Introducción a la Química"], abre: ["Fisiología Humana"] },
  { nombre: "Microbiología", ciclo: "2° Semestre", anio: "Primer Año", requisitos: ["Introducción a la Biología"], abre: [] },
  { nombre: "Parasitología", ciclo: "2° Semestre", anio: "Primer Año", requisitos: ["Introducción a la Biología"], abre: [] },
  { nombre: "Lingüística, Comprensión y Redacción Académica", ciclo: "2° Semestre", anio: "Primer Año", requisitos: [], abre: [] },
  { nombre: "Realidad Nacional", ciclo: "2° Semestre", anio: "Primer Año", requisitos: [], abre: [] },
  { nombre: "Cuidado Humanizado", ciclo: "2° Semestre", anio: "Primer Año", requisitos: [], abre: [] },
  { nombre: "Informática Básica para la Salud", ciclo: "2° Semestre", anio: "Primer Año", requisitos: [], abre: [] },

  // SEGUNDO AÑO
  { nombre: "Introducción a La Enfermería Comunitaria", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: ["Enfermería en Salud Familiar y Comunitaria"] },
  { nombre: "Cuidado Enfermero en Salud Mental I", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: ["Cuidado Enfermero en Salud Mental II"] },
  { nombre: "Fisiología Humana", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: ["Anatomía Humana", "Bioquímica"], abre: ["Farmacología", "Semiología"] },
  { nombre: "Socioantropología", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },
  { nombre: "Ciudadanía e Interculturalidad", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },
  { nombre: "Desarrollo Emocional, Gestión de Conflictos Y Liderazgo", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },
  { nombre: "Enfermería en Salud Escolar (E)", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },
  { nombre: "Taxonomía Nanda, Nic, Noc (E)", ciclo: "1° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },

  { nombre: "Cuidado Enfermero al Adulto I", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: ["Introducción al Cuidado Enfermero"], abre: ["Cuidado Enfermero al Adulto II", "Cuidado Enfermero al Adulto Mayor"] },
  { nombre: "Farmacología", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: ["Fisiología Humana"], abre: [] },
  { nombre: "Semiología", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: ["Fisiología Humana"], abre: [] },
  { nombre: "Bioestadística", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: ["Fundamentos de la Matemática"], abre: ["Epidemiología en Enfermería"] },
  { nombre: "Ecología y Conservación Ambiental", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },
  { nombre: "Cuidados Paliativos, Muerte Y Duelo (E)", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },
  { nombre: "Salud Y Seguridad En El Trabajo (E)", ciclo: "2° Semestre", anio: "Segundo Año", requisitos: [], abre: [] },

  // TERCER AÑO
  { nombre: "Cuidado Enfermero Al Adulto II", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: ["Cuidado Enfermero al Adulto I"], abre: ["Cuidado Enfermero a la Mujer", "Gestión de Los Servicios de Salud"] },
  { nombre: "Cuidado Enfermero al Adulto Mayor", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: ["Cuidado Enfermero al Adulto I"], abre: [] },
  { nombre: "Nutrición", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Epidemiología en Enfermería", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: ["Bioestadística"], abre: [] },
  { nombre: "Ética General Y Deontología", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Comunicación Terapéutica (E)", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Planificación Educativa En Salud (E)", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Introducción a La Metodología de La Investigación Científica (E)", ciclo: "1° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },

  { nombre: "Cuidado Enfermero a la Mujer", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: ["Cuidado Enfermero Al Adulto II"], abre: ["Cuidado Enfermero al Neonato, Niño y Adolescente I", "Crecimiento y Desarrollo e Inmunizaciones"] },
  { nombre: "Enfermería en Salud Familiar y Comunitaria", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: ["Introducción a La Enfermería Comunitaria"], abre: [] },
  { nombre: "Legislación en Salud", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Quechua", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Modelos y Teorías en Enfermería (E)", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Promoción De La Salud (E)", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },
  { nombre: "Investigación Aplicada a La Enfermería (E)", ciclo: "2° Semestre", anio: "Tercer Año", requisitos: [], abre: [] },

  // CUARTO AÑO
  { nombre: "Cuidado Enfermero al Neonato, Niño y Adolescente I", ciclo: "1° Semestre", anio: "Cuarto Año", requisitos: ["Cuidado Enfermero a la Mujer"], abre: ["Cuidado Enfermero al Neonato, Niño y Adolescente II"] },
  { nombre: "Crecimiento y Desarrollo e Inmunizaciones", ciclo: "1° Semestre", anio: "Cuarto Año", requisitos: ["Cuidado Enfermero a la Mujer"], abre: ["Cuidado Enfermero al Neonato, Niño y Adolescente II"] },
  { nombre: "Gestión de Los Servicios de Salud", ciclo: "1° Semestre", anio: "Cuarto Año", requisitos: ["Cuidado Enfermero Al Adulto II"], abre: [] },
  { nombre: "Investigación en Enfermería", ciclo: "1° Semestre", anio: "Cuarto Año", requisitos: [], abre: ["Trabajo de Investigación"] },
  { nombre: "Medicina Tradicional y Complementaria (E)", ciclo: "1° Semestre", anio: "Cuarto Año", requisitos: [], abre: [] },
  { nombre: "Proyectos De Desarrollo En Salud (E)", ciclo: "1° Semestre", anio: "Cuarto Año", requisitos: [], abre: [] },

  { nombre: "Cuidado Enfermero al Neonato, Niño y Adolescente II", ciclo: "2° Semestre", anio: "Cuarto Año", requisitos: ["Cuidado Enfermero al Neonato, Niño y Adolescente I", "Crecimiento y Desarrollo e Inmunizaciones"], abre: [] },
  { nombre: "Cuidado Enfermero en Salud Mental II", ciclo: "2° Semestre", anio: "Cuarto Año", requisitos: ["Cuidado Enfermero en Salud Mental I"], abre: [] },
  { nombre: "Emergencias y Desastres", ciclo: "2° Semestre", anio: "Cuarto Año", requisitos: [], abre: [] },
  { nombre: "Trabajo de Investigación", ciclo: "2° Semestre", anio: "Cuarto Año", requisitos: ["Investigación en Enfermería"], abre: [] },
  { nombre: "Estimulación Temprana (E)", ciclo: "2° Semestre", anio: "Cuarto Año", requisitos: [], abre: [] },
  { nombre: "Tecnología Aplicada al Cuidado Enfermero (E)", ciclo: "2° Semestre", anio: "Cuarto Año", requisitos: [], abre: [] },

  // QUINTO AÑO
  { nombre: "Internado I", ciclo: "1° Semestre", anio: "Quinto Año", requisitos: [], abre: [] },
  { nombre: "Internado II", ciclo: "2° Semestre", anio: "Quinto Año", requisitos: [], abre: [] },
];

const estadoMaterias = {};
const contenedor = document.getElementById("malla-container");

function agruparPorAnioYSemestre() {
  const grupos = {};
  materias.forEach((m) => {
    const key = `${m.anio} - ${m.ciclo}`;
    if (!grupos[key]) grupos[key] = [];
    grupos[key].push(m);
    estadoMaterias[m.nombre] = m.requisitos.length ? "bloqueada" : "pendiente";
  });
  return grupos;
}

function crearMalla() {
  const grupos = agruparPorAnioYSemestre();
  for (const seccion in grupos) {
    const columna = document.createElement("div");
    columna.className = "anio-columna";

    const titulo = document.createElement("h2");
    titulo.textContent = seccion;
    columna.appendChild(titulo);

    grupos[seccion].forEach((materia) => {
      const div = document.createElement("div");
      div.className = `materia ${estadoMaterias[materia.nombre]}`;
      div.textContent = materia.nombre;
      div.id = materia.nombre;

      div.addEventListener("click", () => aprobarMateria(materia));
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

function aprobarMateria(m) {
  if (estadoMaterias[m.nombre] !== "pendiente") return;

  const div = document.getElementById(m.nombre);
  estadoMaterias[m.nombre] = "aprobada";
  div.classList.add("aprobada");

  materias.forEach((materia) => {
    if (materia.requisitos.includes(m.nombre)) {
      const pendientes = materia.requisitos.filter(
        (r) => estadoMaterias[r] !== "aprobada"
      );
      if (pendientes.length === 0) {
        estadoMaterias[materia.nombre] = "pendiente";
        const desbloquear = document.getElementById(materia.nombre);
        if (desbloquear) desbloquear.classList.remove("bloqueada");
      }
    }
  });
}

crearMalla();
