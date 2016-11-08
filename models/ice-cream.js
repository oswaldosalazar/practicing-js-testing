function getAll() {
  return new Promise((resolve, reject) => {
    resolve(
      [{
          name: 'Raising',
          ingredients: ['milk', 'cream', 'raisins'],
          brand: 'Sweet Cow'
        },
        {
          name: 'Chunky Monkey',
          ingredients: ['milk', 'cream', 'banana'],
          brand: "Ben & Jerry's"
        }]
    )
  })
}

module.exports = { getAll };
