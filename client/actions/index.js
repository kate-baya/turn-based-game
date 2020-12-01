export const RECEIVE_DINOS = 'RECEIVE_DINOS'
export const RECEIVE_INVENTORY = 'RECEIVE_INVENTORY'
export const RECEIVE_CRAFTING = 'RECEIVE_CRAFTING'
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'

export const receiveDinos = (dinos) => {
    return {
        type: RECEIVE_DINOS,
        dinos: dinos
    }
}

export const receiveInventory = (inv) => {
    return {
        type: RECEIVE_INVENTORY,
        inventory: inv
    }
}

export const receiveCrafting = (item) => {
    return {
        type: RECEIVE_CRAFTING,
        crafting: item
    }
}

export const receiveRecipes = (recipes) => {
    return {
        type: RECEIVE_RECIPES,
        recipes: recipes
    }
}