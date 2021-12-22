/* Set of questions */
class QSet {
   constructor() {
       if (this.constructor == QSet) {
           throw new Error("Abstract classes can't be instantiated.");
       }
   }

   getQstList() {
       throw new Error("Not Yet Implemented.");
   }
}

