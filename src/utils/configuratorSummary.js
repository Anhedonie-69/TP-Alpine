export const sumCategory = (items, data) => {

   if (!items || !data) return 0;

   let total = 0;

   for (const category in items) {

       const value = items[category];

       const categoryData = data[category];

       if (!categoryData) continue;

       if (Array.isArray(value)) {
           value.forEach(id => {
               const item = categoryData.items.find(i => i.id === id);
               if (item) total += item.price;
           });
       } else {
           const item = categoryData.items.find(i => i.id === value);
           if (item) total += item.price;
       }
   }

   return total;

};

export const getSelectedItems = (stateItems, data) => {

    const result = [];

    for (const category in stateItems) {

        const value = stateItems[category];

        const categoryData = data[category];

        if (!categoryData) continue;

        // MULTIPLE
        if (Array.isArray(value)) {
            value.forEach(id => {
                const item = categoryData.items.find(i => i.id === id);
                if (item) result.push(item);
            });
        }

        // SINGLE
        else if (value) {
            const item = categoryData.items.find(i => i.id === value);
            if (item) result.push(item);
        }
    }

    return result;
};