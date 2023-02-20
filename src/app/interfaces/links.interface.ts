/* Opciones del menú (texto a mostrar y path al que lleva) */
export interface Option {
    text:   string;
    path:   string;
    pathImagen?: string;
}
  
/* Item para representar una red social */
export interface RedSocial {
    title:          string;
    src:            string;
    path:           string;
    pathResponsive: string;
    pathNegro:      string;
    pathHover:      string;
    pathUsed:       string;
}

/* Item para representar una empresa */
export interface ItemEmpresa {
    _id?:            string;
    __v?:            string;
    nombre:         string;
    direccion:      string;
    descripcion:    string;
    url:            string;
    pathFoto:       string;
}

/* Item para guardar dos empresas (utilidad para la vista) */
export interface ItemEmpresaDuo {
    empresaUno:     ItemEmpresa;
    empresaDos?:    ItemEmpresa;
}

/* Guarda los datos pertenecientes a una empresa en el currículum */
export interface ItemCurriculumEmpleo {
    _id?:                        string;
    __v?:                        string;
    empresa:                    string;
    puesto:                     string;
    descripcionPuesto?:         string;
    direccion:                  string;
    fechaDesde:                 string;
    fechaHasta:                 string;
    descripcionAplicaciones?:   string;
    descripcionBackend?:        string;
    descripcionFrontend?:       string;
    otrosDatosDesarrollo?:      string;
    otraDescripcion?:           string;
    orden:                      number;
}

/* Datos pertenecientes a la formación en el currículum */
export interface ItemCurriculumFormacion {
    _id?:            string;
    __v?:            string;
    titulo:         string;
    dondeSeObtuvo:  string;
}

/* Datos de un idioma en el currículum */
export interface ItemCurriculumIdioma {
    _id?:            string;
    __v?:            string;
    idioma:         string;
    nivel:          string;
    dondeSeObtuvo:  string;
}

/* Datos de un item del portfolio */
export interface ItemPortfolio {
    _id?:                    string;
    __v?:                    string;
    nombre:                 string;
    pathWeb?:               string;
    pathDescarga?:          string;
    pathImagen:             string;
    descripcion:            string;
    tecnologiasFrontend?:   string;
    tecnologiasBackend?:    string;
    tecnologiasAplicacion?: string;
    otrasTecnologias?:      string;
}

export interface MensajeFormulario {
    asunto: string;
    mensaje: string;
    nombre: string;
    email: string;
}

export interface RespuestaFormspree {
    next: string;
    ok: boolean;
}