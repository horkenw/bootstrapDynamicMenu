function menuMaker(nodes){
	'use strict';

	var menuItems = nodes.start.reverse(); ;

	var secondLayer = function(items, rootNode){
		var item=items.menu, liLayer = document.createElement('li');

		var link = document.createElement('a');
		link.href = items.url? items.url : '#';
		link.text = items.name;
		liLayer.appendChild(link);
		rootNode.appendChild(liLayer);
	}

	var firstLayer = function(node, rootNode){
		var liFirst = document.createElement('li');
		var link = document.createElement('a');

		if(!node.url){
			link.className = 'dropdown-toggle';
			link.href = '#';
			link.text = node.name;
			link.setAttribute('data-toggle', 'dropdown');
			liFirst.appendChild(link);
			liFirst.appendChild(document.createElement('ul'));
			if(rootNode.id){
				var b = document.createElement('b')
				b.className = 'caret';
				link.appendChild(b);
				liFirst.className = 'dropdown ';
				liFirst.children[1].setAttribute('role', 'menu');
			}else liFirst.className = 'dropdown dropdown-submenu';
			
			liFirst.children[1].className = 'dropdown-menu';
			node.menu.forEach(function(v){
				firstLayer(v, liFirst.children[1]);
			});
			rootNode.appendChild(liFirst);
		}
		else{
			secondLayer(node, rootNode);
		}
	}

	for(var i=menuItems.length; i--;){
		var roots = document.getElementById('nav_menu_set');
		firstLayer(menuItems[i], roots);
	}
	
}

function takeMenu(){
	$.getJSON('./menudata.json', function(data){
		menuMaker(data);

		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});

}

window.onload= takeMenu;

