const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  addStep,
  remove
};

// find
function find() {
  return db('schemes');
}

//findById
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

//findSteps

function findSteps(id) {
  return db('steps').where('scheme_id', id);
}

// add

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(id => {
      const [myid] = id;
      return findById(myid);
    });
}

// addStep

function addStep(step, id) {
  return db('steps')
    .insert({
      ...step,
      scheme_id: id
    })
    .then(id => {
      const [myid] = id;
      return db('steps').where({ id: myid });
    });
}

function update(scheme, id) {
  return db('schemes')
    .where({ id })
    .update(scheme)
    .then(() => findById(id));
}

// remove

async function remove(id) {
  const toDelete = await findById(id);
  console.log('toDelete', toDelete);
  if (toDelete) {
    return db('schemes')
      .where({ id })
      .del()
      .then(() => {
        return db('steps')
          .where('scheme_id', id)
          .del()
          .then(() => {
            console.log('toDetel2', toDelete);
            return toDelete;
          });
        // return toDelete;
      });
  } else return null;
}
