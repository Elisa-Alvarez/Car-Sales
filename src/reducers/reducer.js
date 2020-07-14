export const initalState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'data:image/jpeg;base64,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',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Super Charged Electric Engine', price: 1500 },
      { id: 2, name: 'Eco Boost', price: 1500 },
      { id: 3, name: 'Midnight Blue Finish', price: 500 },
      { id: 4, name: 'Spare Tire', price: 250 }
    ]
  };

export const reducer = (state = initalState, action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return {
              ...state,
              car: {
                ...state.car,
                price: state.car.price + action.payload.price,
                  features: [
                    ...state.car.features,
                    action.payload
                  ]
              },
              additionalFeatures: state.additionalFeatures.filter(item => {
                return item.id !== action.payload.id
              })

            }
          case 'REMOVE_FEATURE':
            return {
              ...state,
              car: {
                ...state.car,
                price: state.car.price - action.payload.price,
                features: state.car.features.filter(item => {
                  return item.id !== action.payload.id
                })
              },
              additionalFeatures: [
                ...state.additionalFeatures,
                action.payload
              ]
            }

    default:
        return state; 
    }
}