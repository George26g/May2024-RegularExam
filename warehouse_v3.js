class Warehouse {
    constructor() {
        this.inventory = new Map();
    }

    // Add items to the warehouse inventory
    addItem(itemName, quantity) {
        const currentQuantity = this.inventory.get(itemName) || 0;
        this.inventory.set(itemName, currentQuantity + quantity);
    }

    // Process an order and update inventory
    processOrder(order) {
        for (const [itemName, quantity] of Object.entries(order)) {
            const currentQuantity = this.inventory.get(itemName) || 0;
            if (quantity > currentQuantity) {
                console.log(`Cannot process order for ${itemName}. Insufficient stock.`);
                return false;
            }
            this.inventory.set(itemName, currentQuantity - quantity);
        }
    }

    // Display current inventory
    displayInventory() {
        console.log('Current Inventory:');
        this.inventory.forEach((quantity, itemName) => {
            console.log(`${itemName}: ${quantity}`);
        });
    }
}

// Example usage
const warehouse = new Warehouse();
warehouse.addItem('Widgets', 150);
warehouse.addItem('Gadgets', 120);

// Process an order
const order = { 'Widgets': 5, 'Gadgets': 2 };
warehouse.processOrder(order);

// Display current inventory
warehouse.displayInventory();
