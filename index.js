
console.log('hello dirt')

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return people;;
  } catch (error) {
    console.error(error)
  }
}

const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};


const view = getPersonsInfo('Odin')

view.then((person) => {
  console.log(person)
}).catch(err => {
  console.error(err)
})