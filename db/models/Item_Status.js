const bookshelf = require('./bookshelf');


class Item_Status extends bookshelf.Model{
  get tableName(){return 'item_status'}

  items(){
    return this.hasMany(`Item`);
  }
  
}



module.exports = bookshelf.model('Item_Status',Item_Status);