// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Removing Neptunium ingot')
ServerEvents.recipes(event => {
    event.remove({output: 'aquaculture:nuptunium_ingot'})
    event.remove({output: '#aquaculture:nuptunium_ingot'})
    event.remove({id: 'aquaculture:nuptunium_ingot'})
    event.remove({id: 'aquaculture:nuptunium_ingot'})
    event.remove({id: 'aquaculture:neptunium_ingot_from_nuggets'})
    event.remove({id: 'aquaculture:neptunium_ingot_from_neptunium_block'})
})
