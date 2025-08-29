const serviceData = {
  culinario: {
    name: "Culinario",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center",
    clients: ["Restaurante /Bar", "Cafetería/Pastelería", "Food Truck", "Chef /Catering", "Bodega&Bebidas", "Alimentos", "otros"],
    scenarios: [
      {
        name: "Menú de Estreno",
        desc: "Soy nuevo o renové mi carta y necesito fotos y/o videos de mis platos para mis redes y apps de delivery. ¡Urgente!",
        levels: {
          express: {
            name: "Express",
            icon: "📸",
            promo: true,
            promoText: "1 dia de rodaje = 1 mes de contenido",
            desc: {
              utilidad: "Fotografías para mostrar tu menú en redes sociales y apps de pedidos.",
              equipo: "1 Cámara fotográfica profesional, media jornada, iluminación básica.",
              edicion: "Edición base: color básico.",
              entregables: "Max 15 platos - 30 fotos."
            }
          },
          indie: {
            name: "Indie",
            icon: "🎬",
            desc: {
              utilidad: "Fotografías para mostrar tu menú en redes sociales y apps de pedidos. Videos en slow motion de cada plato.",
              equipo: "1 cámara 4K, 1 jornada de producción, iluminación de producto.",
              edicion: "Edición pro: transiciones, sfx, color, subtítulos, voz en off, efectos creativos.",
              entregables: "Todo el menú - 2 Fotos y 2 videos en slow motion de cada producto - 3 reels de 30 seg de toda la producción."
            }
          },
          estelar: {
            name: "Estelar",
            icon: "⭐",
            desc: {
              utilidad: "Cubrís fotográficamente y con videos el menú, el restaurante y el ambiente del lugar en un solo paquete.",
              equipo: "1 cámara 4K, 2 jornadas de producción, iluminación profesional, estabilizador de cámara, grabación de sonido.",
              edicion: "Edición pro: transiciones, sfx, color, subtítulos, voz en off, efectos creativos.",
              entregables: "Todo el menú - 2 Fotos y 2 videos en slow motion de cada producto - 3 reels de 30 seg, 1 video con look cinematográfico (máx. 2 min)."
            }
          }
        },
        addons: [
          { name: "Entrevista", icon: "🎤" },
          { name: "Dron", icon: "🚁" },
          { name: "Modelo/Presentador", icon: "👤" },
          { name: "Lente Macro", icon: "🔍" }
        ]
      }
    ]
  },
  ambientes: {
    name: "Ambientes",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center",
    clients: ["Inmobiliaria/Agente", "Hotel/Hostel/Cabaña", "Arquitectura/Interiorismo", "Desarrolladora", "Alquiler temporal (Airbnb)", "Coworking", "Showroom deco"],
    scenarios: [
      {
        name: "Tour de Estreno",
        desc: "Necesito fotos y/o videos de una propiedad o un espacio. Lo necesito rápido y que sea profesional.",
        levels: {
          standard: {
            name: "Standard",
            icon: "📸",
            desc: {
              utilidad: "Fotografías profesionales de un espacio o propiedad.",
              equipo: "1 Cámara fotográfica profesional, media jornada, iluminación básica.",
              entregables: "Máximo 100 fotos."
            }
          }
        }
      }
    ]
  },
  indumentaria: {
    name: "Indumentaria",
    icon: "👕",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop&crop=center",
    clients: ["Marca de indumentaria", "Showroom", "Local multimarca", "Otros"],
    scenarios: [
      {
        name: "Colección Nueva",
        desc: "Lanzaste o renovaste colección, necesitás catálogo y redes.",
        levels: {
          express: {
            name: "Express",
            icon: "📸",
            desc: {
              utilidad: "Fotografías de tu nueva colección, ideales para catálogo y e-commerce.",
              equipo: "1 Cámara fotográfica profesional, media jornada, iluminación básica.",
              entregables: "Máximo 20 prendas."
            }
          }
        }
      }
    ]
  }
};

export default serviceData;
