 
 
/**
 * @description Función que permite consultar las aplicaciones de autoria
 * @creation David Villanueva 15/01/2021
 * @update
 */
exports.consultarAuditoria = async (req, res) => { 
	 var oResponse			= {};
	 oResponse.oData		= {};
	 var oRequest			= null;
     oResponse.iCode 		= 1; 
     oResponse.sMessage		= 'OK';
     oResponse.oData		= {};
     res.json(oResponse) 
};
 