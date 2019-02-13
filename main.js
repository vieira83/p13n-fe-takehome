var orm = orm || {};
orm.p13n = orm.p13n || {};
orm.p13n.takehome = orm.p13n.takehome || {};

orm.p13n.takehome.main = function(){
  var columns = document.getElementsByClassName('column');
  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];
    if (!column.id) {
      column.id = 'id-' + i;
    }
  }
};

orm.p13n.takehome.main();