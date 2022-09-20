

/* il riducer in base all'oggetto che gli 
viene passato fa in modo tale attraverso uno 
switch di ridurre il tutto a un singolo return */

export default function storeReducer(state =[], action) {

    /* Attraverso il type contenuto all'interno delle 
    azioni viene ritornata l'azione ridotta corrispondente
    */

    switch (action.type) {
        case 'CERCA':
            return {
                ...state,
                city: action.city,
                cityCode: action.cityCode
            }

        default:
            return {
                ...state,
                city: 'Roma',
                cityCode: 'IT',
            };
    }
}