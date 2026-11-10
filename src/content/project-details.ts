import type { Locale } from '@/lib/i18n';
import type { ProjectDetails } from '@/content/projects';

/** Textos largos de la página de detalle de cada proyecto, por idioma. */

export const cambiappDetails: Record<Locale, ProjectDetails> = {
  es: {
    about: [
      'CambiApp es una calculadora de divisas para Venezuela que muestra en tiempo real las tasas del dólar y el euro oficiales del BCV y la tasa USDT P2P. Permite convertir montos entre bolívares, dólares, euros y USDT desde una sola pantalla, con un teclado numérico propio y la opción de copiar o compartir el resultado.',
      {
        ordered: true,
        items: [
          'Tasas en tiempo real de USD BCV, EUR BCV y USDT P2P',
          'Conversión cruzada entre VES, USD, EUR y USDT',
          'Sistema de respaldo: si la API principal falla, obtiene la tasa directamente de la web del BCV',
          'Caché offline con las últimas tasas guardadas',
          'Widget para la pantalla de inicio',
          'Actualización automática en segundo plano cada 2 horas',
          'Copiar y compartir conversiones',
          'Modo oscuro',
        ],
      },
    ],
    goal: [
      'En Venezuela conviven varias tasas de cambio a la vez (dólar oficial BCV, euro BCV y la tasa USDT del mercado P2P), y la diferencia entre ellas cambia a diario. Para hacer una compra, cobrar un servicio o comparar precios, la gente suele abrir varias páginas, hacer cuentas a mano o depender de capturas que circulan por WhatsApp. Además, las fuentes oficiales no siempre están disponibles: la web del BCV se cae con frecuencia y las APIs públicas fallan sin aviso.',
      'El objetivo era crear una herramienta que resolviera ese problema en un solo lugar: consultar las tres tasas al instante, convertir entre bolívares, dólares, euros y USDT sin hacer cálculos, y seguir funcionando aunque una fuente falle o no haya internet. También buscaba aplicar un stack Android moderno y una arquitectura limpia, que permitiera agregar nuevas monedas o fuentes de datos sin reescribir la app.',
    ],
    execution: [
      'La app se construyó de forma nativa en Kotlin con Jetpack Compose y Material 3, siguiendo Clean Architecture con MVVM para separar interfaz, lógica de negocio y datos. La capa de datos consulta varias fuentes en cascada para que siempre haya una tasa disponible.',
      {
        items: [
          'UI en Jetpack Compose + Material 3',
          'Clean Architecture + MVVM con casos de uso y repositorios',
          'Inyección de dependencias con Hilt',
          'Red con Ktor Client y Kotlinx Serialization',
          'Scraping del BCV con JSoup como respaldo; USDT con DolarApi, monitor alternativo y Binance P2P en cascada',
          'Persistencia local con Room',
          'Sincronización periódica con WorkManager',
          'Widget con Jetpack Glance',
        ],
      },
    ],
    results: [
      'Se obtuvo una aplicación Android funcional que cumple el objetivo principal: el usuario siempre ve una tasa disponible. Si la API principal no responde, la app recurre al scraping del BCV, y para USDT prueba tres fuentes en cascada antes de rendirse. Si no hay conexión, muestra las últimas tasas guardadas e indica que vienen de la caché.',
      'La conversión cruzada entre las cuatro monedas reduce a un solo paso lo que antes requería varias operaciones, y las opciones de copiar y compartir permiten enviar el resultado directamente a un cliente o contacto. El widget y la actualización automática cada 2 horas hacen que la información esté al día sin que el usuario tenga que abrir la app.',
      'En lo técnico, el proyecto quedó organizado en capas independientes (interfaz, casos de uso, repositorio y fuentes de datos), lo que facilita mantenerlo, probarlo y ampliarlo. La app está lista para una futura publicación en Play Store.',
    ],
  },
  en: {
    about: [
      'CambiApp is a currency calculator for Venezuela that shows the official BCV dollar and euro rates and the USDT P2P rate in real time. It converts amounts between bolívares, dollars, euros, and USDT from a single screen, with a custom numeric keypad and the option to copy or share the result.',
      {
        ordered: true,
        items: [
          'Real-time USD BCV, EUR BCV, and USDT P2P rates',
          'Cross-conversion between VES, USD, EUR, and USDT',
          'Fallback system: if the main API fails, it fetches the rate directly from the BCV website',
          'Offline cache with the latest saved rates',
          'Home screen widget',
          'Automatic background updates every 2 hours',
          'Copy and share conversions',
          'Dark mode',
        ],
      },
    ],
    goal: [
      'Venezuela has several exchange rates in use at the same time (the official BCV dollar, the BCV euro, and the USDT rate on the P2P market), and the gap between them changes daily. To make a purchase, charge for a service, or compare prices, people often open several websites, do the math by hand, or rely on screenshots shared on WhatsApp. On top of that, official sources are not always available: the BCV website goes down frequently and public APIs fail without warning.',
      'The goal was to build a tool that solves this problem in one place: check all three rates instantly, convert between bolívares, dollars, euros, and USDT without doing any math, and keep working even if a source fails or there is no internet connection. It also aimed to apply a modern Android stack and a clean architecture that would allow new currencies or data sources to be added without rewriting the app.',
    ],
    execution: [
      'The app was built natively in Kotlin with Jetpack Compose and Material 3, following Clean Architecture with MVVM to separate the UI, business logic, and data. The data layer queries several sources in cascade so that a rate is always available.',
      {
        items: [
          'UI built with Jetpack Compose + Material 3',
          'Clean Architecture + MVVM with use cases and repositories',
          'Dependency injection with Hilt',
          'Networking with Ktor Client and Kotlinx Serialization',
          'BCV scraping with JSoup as a fallback; USDT from DolarApi, an alternative monitor, and Binance P2P in cascade',
          'Local persistence with Room',
          'Periodic sync with WorkManager',
          'Widget built with Jetpack Glance',
        ],
      },
    ],
    results: [
      'The result is a working Android app that meets its main goal: users always see an available rate. If the main API does not respond, the app falls back to scraping the BCV website, and for USDT it tries three sources in cascade before giving up. When there is no connection, it shows the last saved rates and indicates that they come from the cache.',
      'Cross-conversion between the four currencies turns what used to take several calculations into a single step, and the copy and share options make it easy to send the result straight to a client or contact. The widget and the automatic updates every 2 hours keep the information current without the user having to open the app.',
      'On the technical side, the project is organized into independent layers (UI, use cases, repository, and data sources), which makes it easier to maintain, test, and extend. The app is ready for a future release on the Play Store.',
    ],
  },
};

export const conavencaDetails: Record<Locale, ProjectDetails> = {
  es: {
    about: [
      'Sistema web para Conavenca, una agencia de envío de paquetes. Gestiona todo el ciclo del envío, desde el registro del paquete en la sucursal de origen hasta su entrega, e incluye rastreo en tiempo real mediante dispositivos GPS conectados.',
      {
        ordered: true,
        items: [
          'Gestión de clientes, empleados y niveles de acceso',
          'Registro y seguimiento de paquetes por estado (en sucursal, en envío, entregado)',
          'Gestión de sucursales y precios por ruta',
          'Calculadora de tarifas según ruta y peso',
          'Generación de códigos QR por paquete',
          'Facturas en PDF',
          'Rastreo en tiempo real en mapa',
          'Reporte de paquetes perdidos o dañados',
          'Notificación y estado de cuenta de pagos',
          'Respaldo y restauración de la base de datos',
        ],
      },
    ],
    goal: [
      'Conavenca es una agencia de envío de paquetes cuya operación dependía de procesos manuales: registro de envíos en papel o en hojas de cálculo, cálculo de tarifas a mano según la ruta y el peso, y facturas hechas por separado. El cliente no tenía forma de saber dónde estaba su paquete más allá de llamar a la sucursal, y los reportes de pérdidas o daños no quedaban registrados de forma ordenada.',
      'Como proyecto académico, el objetivo era diseñar un sistema que digitalizara el ciclo completo del envío: registrar clientes y paquetes, asignar origen y destino entre sucursales, calcular la tarifa automáticamente, emitir la factura y seguir el estado del paquete hasta la entrega. El reto principal era ir más allá de un sistema administrativo e integrar hardware real (ESP32 y A9G) para que el rastreo mostrara la ubicación verdadera del paquete en un mapa, y no solo un estado escrito.',
    ],
    execution: [
      'Se desarrolló una aplicación web en PHP con MySQL, con un panel administrativo para empleados y páginas públicas para que los clientes calculen tarifas y rastreen sus envíos. El rastreo se integró con hardware propio.',
      {
        items: [
          'Backend en PHP (PDO) con base de datos MySQL',
          'Frontend en HTML, CSS, JavaScript, jQuery y Bootstrap (plantilla SB Admin 2)',
          'Mapa de rastreo con Leaflet y OpenStreetMap',
          'Módulos ESP32 + A9G (GPS/GSM) que envían la ubicación del paquete',
          'Facturas PDF con DomPDF y códigos QR con phpqrcode',
          'Respaldos con mysqldump-php',
        ],
      },
    ],
    results: [
      'Se desarrolló un sistema web completo que cubre toda la operación de la agencia. Los empleados registran paquetes y clientes, gestionan sucursales y precios por ruta, y siguen cada envío en sus distintas etapas, desde la sucursal de origen hasta el destino. Al registrar un envío, el sistema calcula la tarifa según la ruta y el peso, genera un código QR para identificar el paquete y emite la factura en PDF, lo que elimina cálculos manuales y errores de cobro.',
      'Del lado del cliente, la página pública permite cotizar un envío antes de llevarlo a la sucursal y rastrear el paquete con su código. Cuando el paquete tiene un dispositivo GPS asignado, su ubicación se muestra en un mapa, lo que demuestra con éxito la integración entre el software y el hardware construido con ESP32 y A9G.',
      'El sistema también deja registro de los reportes de paquetes perdidos o dañados y de los pagos, y permite respaldar y restaurar la base de datos para proteger la información. Como resultado, el proyecto demuestra la viabilidad de una solución de logística de bajo costo que combina gestión web y rastreo en tiempo real.',
    ],
  },
  en: {
    about: [
      'A web system for Conavenca, a package shipping agency. It manages the entire shipping cycle, from registering the package at the origin branch to its delivery, and includes real-time tracking through connected GPS devices.',
      {
        ordered: true,
        items: [
          'Customer, employee, and access level management',
          'Package registration and tracking by status (at branch, in transit, delivered)',
          'Branch and route pricing management',
          'Rate calculator based on route and weight',
          'QR code generation for each package',
          'PDF invoices',
          'Real-time tracking on a map',
          'Lost or damaged package reports',
          'Payment notifications and account statements',
          'Database backup and restore',
        ],
      },
    ],
    goal: [
      'Conavenca is a package shipping agency whose operations relied on manual processes: shipments recorded on paper or in spreadsheets, rates calculated by hand based on route and weight, and invoices issued separately. Customers had no way to know where their package was other than calling the branch, and reports of lost or damaged packages were not recorded in an organized way.',
      'As an academic project, the goal was to design a system that would digitize the entire shipping cycle: registering customers and packages, assigning origin and destination branches, calculating the rate automatically, issuing the invoice, and tracking the package status until delivery. The main challenge was to go beyond an administrative system and integrate real hardware (ESP32 and A9G) so that tracking would show the package’s actual location on a map, not just a written status.',
    ],
    execution: [
      'A PHP and MySQL web application was developed, with an administrative dashboard for employees and public pages where customers can calculate rates and track their shipments. Tracking was integrated with custom-built hardware.',
      {
        items: [
          'PHP (PDO) backend with a MySQL database',
          'HTML, CSS, JavaScript, jQuery, and Bootstrap frontend (SB Admin 2 template)',
          'Tracking map built with Leaflet and OpenStreetMap',
          'ESP32 + A9G (GPS/GSM) modules that send the package’s location',
          'PDF invoices with DomPDF and QR codes with phpqrcode',
          'Backups with mysqldump-php',
        ],
      },
    ],
    results: [
      'The result is a complete web system that covers the agency’s entire operation. Employees register packages and customers, manage branches and route pricing, and follow each shipment through its different stages, from the origin branch to the destination. When a shipment is registered, the system calculates the rate based on route and weight, generates a QR code to identify the package, and issues the PDF invoice, eliminating manual calculations and billing errors.',
      'On the customer side, the public page lets users get a shipping quote before taking the package to the branch and track it with its code. When a package has a GPS device assigned, its location is shown on a map, successfully demonstrating the integration between the software and the hardware built with ESP32 and A9G.',
      'The system also records reports of lost or damaged packages and payments, and allows the database to be backed up and restored to protect the information. As a result, the project demonstrates the feasibility of a low-cost logistics solution that combines web management with real-time tracking.',
    ],
  },
};

export const corblasercaDetails: Record<Locale, ProjectDetails> = {
  es: {
    about: [
      'Plataforma web para una academia de idiomas en línea. Organiza cursos, periodos académicos, horarios y pagos, con espacios diferenciados para estudiantes, profesores y administradores.',
      {
        ordered: true,
        items: [
          'Registro, inicio de sesión y recuperación de contraseña',
          'Roles de Estudiante, Profesor y Administrador',
          'Gestión de cursos y periodos académicos',
          'Inscripción de usuarios en cursos',
          'Carga de notas por parte del profesor',
          'Vista de horarios por bloque',
          'Foro por curso',
          'Notificación de pagos con aprobación o rechazo por el administrador',
          'Recibos y reportes en PDF (alumnos, usuarios y horarios)',
          'Respaldo y restauración de la base de datos',
        ],
      },
    ],
    goal: [
      'Una academia de idiomas que ofrece clases en línea necesita coordinar a estudiantes, profesores, cursos, periodos, horarios y pagos. Sin una plataforma propia, esa información suele estar dispersa en hojas de cálculo, mensajes y transferencias que hay que verificar a mano, y el estudiante no tiene un lugar único donde ver sus cursos, notas y estado de pago.',
      'Como proyecto académico, el objetivo era construir una plataforma centralizada con espacios distintos para cada tipo de usuario: el estudiante se inscribe, consulta su horario, participa en el foro de su curso y reporta sus pagos; el profesor gestiona su curso y carga las notas; y el administrador controla cursos, periodos, usuarios y pagos desde un solo panel. Además, se buscaba automatizar la generación de reportes y recibos, y asegurar la información con respaldos de la base de datos.',
    ],
    execution: [
      'Se construyó una aplicación web en PHP y MySQL con paneles CRUD para el administrador y vistas propias para estudiantes y profesores. Los pagos siguen un flujo de notificación, revisión y emisión de recibo.',
      {
        items: [
          'Backend en PHP con MySQL',
          'Frontend en HTML, CSS, JavaScript y Bootstrap',
          'Control de acceso por roles',
          'Reportes y recibos en PDF con DomPDF',
          'Respaldos SQL con mysqldump-php',
        ],
      },
    ],
    results: [
      'Se obtuvo una plataforma web funcional que cubre el ciclo académico y administrativo de la academia. El sistema de roles separa correctamente lo que puede ver y hacer cada usuario, y los paneles de administración permiten crear y editar cursos, periodos y usuarios, así como asignar estudiantes y profesores a cada curso.',
      'El flujo de pagos quedó completamente digitalizado: el estudiante notifica su pago, el administrador lo aprueba o rechaza desde la lista de pendientes, y se genera un recibo en PDF, con un historial que permite consultar los pagos anteriores. Los reportes en PDF de alumnos, usuarios y horarios por bloque reemplazan listas que antes se armarían a mano.',
      'El foro por curso da a estudiantes y profesores un canal de comunicación dentro de la plataforma, y la carga de notas permite que cada estudiante consulte su rendimiento. Con el registro, la recuperación de contraseña y los respaldos de la base de datos, el proyecto entrega una versión demo completa y lista para ampliarse a un entorno real.',
    ],
  },
  en: {
    about: [
      'A web platform for an online language academy. It organizes courses, academic terms, schedules, and payments, with separate spaces for students, teachers, and administrators.',
      {
        ordered: true,
        items: [
          'Sign-up, login, and password recovery',
          'Student, Teacher, and Administrator roles',
          'Course and academic term management',
          'User enrollment in courses',
          'Grade entry by teachers',
          'Schedule view by time block',
          'Course forum',
          'Payment notifications approved or rejected by the administrator',
          'PDF receipts and reports (students, users, and schedules)',
          'Database backup and restore',
        ],
      },
    ],
    goal: [
      'A language academy that offers online classes needs to coordinate students, teachers, courses, terms, schedules, and payments. Without its own platform, that information tends to be scattered across spreadsheets, messages, and bank transfers that have to be verified by hand, and students have no single place to see their courses, grades, and payment status.',
      'As an academic project, the goal was to build a centralized platform with separate spaces for each type of user: students enroll, check their schedule, take part in their course forum, and report their payments; teachers manage their course and enter grades; and administrators control courses, terms, users, and payments from a single dashboard. It also aimed to automate the generation of reports and receipts, and to secure the information with database backups.',
    ],
    execution: [
      'A PHP and MySQL web application was built, with CRUD dashboards for the administrator and dedicated views for students and teachers. Payments follow a notification, review, and receipt issuance flow.',
      {
        items: [
          'PHP backend with MySQL',
          'HTML, CSS, JavaScript, and Bootstrap frontend',
          'Role-based access control',
          'PDF reports and receipts with DomPDF',
          'SQL backups with mysqldump-php',
        ],
      },
    ],
    results: [
      'The result is a working web platform that covers the academy’s academic and administrative cycle. The role system correctly separates what each user can see and do, and the admin dashboards make it possible to create and edit courses, terms, and users, as well as assign students and teachers to each course.',
      'The payment flow is fully digitized: students report their payment, the administrator approves or rejects it from the pending list, and a PDF receipt is generated, with a history for reviewing previous payments. PDF reports of students, users, and schedules by time block replace lists that would otherwise be put together by hand.',
      'The course forum gives students and teachers a communication channel within the platform, and grade entry lets each student check their performance. With sign-up, password recovery, and database backups, the project delivers a complete demo ready to be extended to a real-world environment.',
    ],
  },
};
