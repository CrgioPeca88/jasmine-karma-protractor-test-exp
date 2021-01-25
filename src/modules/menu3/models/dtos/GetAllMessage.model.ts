export interface GetAllMessage {
	tipoId: number;
	informacionId: number;
	cId: number;
	fechaInicio: string;
	fechaFin: string;
	diasAusencia: number;
	tipoXInformacionId: number;
	tipoDocumento: string;
	numeroDocumento: string;
	primerNombre: string;
	segundoNombre: string;
	primerApellido: string;
	segundoApellido: string;
	tipoNombre: string;
	cNombre: string;
	pId: number;
	estado: string;
	nombreCelula: string;
	descuenta: boolean;
	descontado: number;
	p?: string;
	ynDescuenta?: string;
	ynDescontado?: string;
}

export class GetAllMessageObj {

	constructor() {}

	public getDefaultInstance(): GetAllMessage {
		return({
			tipoId: 1,
			informacionId: 1,
			cId: 1,
			fechaInicio: "23/01/2020",
			fechaFin: "23/01/2020",
			diasAusencia: 2,
			tipoXInformacionId: 3,
			tipoDocumento: "testTipoDocumento",
			numeroDocumento: "testNumeroDocumento",
			primerNombre: "testPrimerNombre",
			segundoNombre: "testSegundoNombre",
			primerApellido: "testPrimerApellido",
			segundoApellido: "testSegundoApellido",
			tipoNombre: "testTipoNombre",
			cNombre: "testCNombre",
			pId: 1,
			estado: "testEstado",
			nombreCelula: "testNombreCelula",
			descuenta: false,
			descontado: 1,
			p: "testP",
			ynDescuenta: "testYnDescuenta",
			ynDescontado: "testYnDescontado",
		});
	}
}
