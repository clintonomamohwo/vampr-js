class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;
    // climb "up" the tree (using iteration), counting nodes, until original vampire is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire ++;
    }
    return numberOfVampire;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  
  
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {
  //   let ancestor = vampire.numberOfVampiresFromOriginal;
  //   for (let i = 0; i < this.offspring.length; i++) {
  //     if (this.offspring[i].numberOfVampiresFromOriginal > ancestor) {
  //       ancestor = this.offspring[i].numberOfVampiresFromOriginal;
  //     }
  //     return this.offspring[i];
  //   }
  // }
  
}

module.exports = Vampire;

