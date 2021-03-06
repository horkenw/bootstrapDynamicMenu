'use strict';

function tag(tag){
  return document.getElementById(tag);
}

function menuMaker(data){

  var _doc = document,
    navEl = _doc.createElement('nav'),
    wrapDIV = _doc.createElement('div'),
    _ul = _doc.createElement('ul');

  var menuItems = data.start;

  var oneLevelLayer = function(data){
    var navWrap = _doc.createDocumentFragment(), wrapNode;

    wrapNode = createliWrapNode();
    wrapNode.appendChild(createTextNode(data.name, data.url));
    navWrap.appendChild(wrapNode);
    navWrap.children[0].className = menuOptions.oneLevelItem;
    return navWrap;
  }

  var twoLevelLayer = function(data){
    var navWrap = _doc.createDocumentFragment();

    navWrap.appendChild(createliWrapNode('', menuOptions.firstMenuRoot));
    navWrap.children[0].appendChild(createTextNode(data.name, data.url, menuOptions.toggleClass));
    navWrap.children[0].children[0].setAttribute('data-toggle', 'dropdown')
    navWrap.children[0].children[0].appendChild(createNodeWithClass('b', 'caret'));
    navWrap.children[0].appendChild(subMenuWrap(false, data.menu, menuOptions.twoLevelItem));
    navWrap.children[0].children[1].className = menuOptions.secondMenuRoot;
    return navWrap;
  }

  var fakeTwoLevelLayer = function(data){
    var navWrap = _doc.createDocumentFragment();

    navWrap.appendChild(createliWrapNode('', menuOptions.firstMenuRoot));
    navWrap.children[0].appendChild(createTextNode(data.name, data.url, menuOptions.toggleClass));
    navWrap.children[0].children[0].setAttribute('data-toggle', 'dropdown')
    navWrap.children[0].children[0].appendChild(createNodeWithClass('b', 'caret'));
    return navWrap;
  }

  var threeLevelLayer = function(data){
    var navWrap = _doc.createDocumentFragment();

    navWrap.appendChild(createliWrapNode('', menuOptions.firstMenuRoot));
    navWrap.children[0].appendChild(createTextNode(data.name, data.url, menuOptions.toggleClass));
    navWrap.children[0].children[0].setAttribute('data-toggle', 'dropdown')
    navWrap.children[0].children[0].appendChild(createNodeWithClass('b', 'caret'));
    navWrap.children[0].appendChild(subMenuWrap(true, data.menu, menuOptions.threeLevelMenu));
    navWrap.children[0].children[1].className = menuOptions.secondMenuRoot;
    return navWrap;
  }

  function subMenuWrap(level, data, className, ulRoot){
    var _ul = createNodeWithClass('ul'), _li;

    if(!level){
      for(var i=0; i < data.length; i++){
        _li = createliWrapNode('', className);
        _li.appendChild(createTextNode(data[i].name, data[i].url))
        if(!ulRoot) _ul.appendChild(_li);
        else ulRoot.appendChild(_li);
      }
    }
    else{
      for(var i=0; i< data.length; i++){
        _li = createliWrapNode('', className);
        _li.appendChild(createNodeWithClass('ul'));
        _li.children[0].appendChild(createliWrapNode(data[i].name, menuOptions.threeLevelHeader));
        subMenuWrap(data[i].menu[0].menu.length, data[i].menu, menuOptions.threeLevelItem, _li.children[0]);
        _ul.appendChild(_li);
      }
    }
    return ulRoot ? true: _ul;
  }

  function createNodeWithClass(node, className){
    var _node =  _doc.createElement(node);

    if(className) _node.className = className;
    return _node;
  }

  function createliWrapNode(txt, className){
    var _li = createNodeWithClass('li', className);
    if(txt) _li.innerText = txt;
    return _li;
  }

  function createTextNode(txt, url, className){
    var _a = createNodeWithClass('a', className);

    _a.innerText = txt;
    url ? _a.href = url : _a.href = '#';
    return _a;
  }

  //start
  var roots = _doc.getElementById('nav_menu_set');
  if(roots.dataset.sliderable !== 'true')
    for(var i=0, l=6; i<l; i++){
      var item;
      
      if(menuItems[i].total_level)
        switch(menuItems[i].total_level){
          case 1:
            item = oneLevelLayer(menuItems[i]);
            break; 
          case 2:
            item = twoLevelLayer(menuItems[i]);
            break;
          case 3:
            item = threeLevelLayer(menuItems[i]);
            break;
          case 4:
            // todo: fourLevelLayer(needed?)
            break;
          default:
            break;
        }
      _ul.appendChild(item);
    }
  else '';
  _ul.className = menuOptions.menuRoot;
  wrapDIV.className = "collapse navbar-collapse topMenu";
  wrapDIV.appendChild(_ul);
  // navEl.className = "navbar";
  navEl.appendChild(wrapDIV);
  roots.appendChild(navEl);
}